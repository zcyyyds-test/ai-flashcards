// FSRS-5 (Free Spaced Repetition Scheduler) — core algorithm
// Based on open-memorize/ts-fsrs (MIT License)
// Simplified pure JS implementation for browser use

const FSRS_VERSION = 5;

// FSRS-5 default parameters (optimized from Anki user data)
const DEFAULT_W = [
  0.40255, 1.18385, 3.173, 15.69105,  // w0-w3: initial stability for Again/Hard/Good/Easy
  7.1949,                               // w4: initial difficulty offset
  0.5345,                               // w5: initial difficulty slope
  1.4604,                               // w6: difficulty mean reversion strength
  0.0046,                               // w7: difficulty mean reversion weight
  1.54575,                              // w8: stability increase base factor
  0.1192,                               // w9: stability sensitivity to difficulty
  1.01925,                              // w10: stability sensitivity to retrievability
  1.9395,                               // w11: stability decrease factor (lapse)
  0.11,                                 // w12: lapse sensitivity to difficulty
  0.29605,                              // w13: lapse sensitivity to stability
  2.2698,                               // w14: lapse sensitivity to retrievability
  0.2315,                               // w15: hard penalty
  2.9898,                               // w16: easy bonus
  0.51655,                              // w17: short-term stability multiplier
  0.6621,                               // w18: short-term stability decay
];

const Rating = { Again: 1, Hard: 2, Good: 3, Easy: 4 };
const State  = { New: 0, Learning: 1, Review: 2, Relearning: 3 };

const DESIRED_RETENTION = 0.9;

// ─── Core math ───

function clamp(x, lo, hi) { return Math.min(Math.max(x, lo), hi); }

/** Retrievability: probability of recall at elapsed days */
function retrievability(stability, elapsedDays) {
  if (stability <= 0) return 0;
  return Math.pow(1 + elapsedDays / (9 * stability), -1);
}

/** Optimal interval for desired retention */
function nextInterval(stability) {
  return Math.max(1, Math.round(9 * stability * (1 / DESIRED_RETENTION - 1)));
}

/** Initial difficulty D0 for a given rating */
function initDifficulty(rating, w) {
  return clamp(w[4] - Math.exp(w[5] * (rating - 1)) + 1, 1, 10);
}

/** Initial stability S0 for a given rating */
function initStability(rating, w) {
  return Math.max(w[rating - 1], 0.1);
}

/** Update difficulty after a review */
function nextDifficulty(d, rating, w) {
  const d0 = initDifficulty(Rating.Good, w); // mean reversion target
  const newD = w[6] * d0 + (1 - w[6]) * (d - w[7] * (rating - 3));
  return clamp(newD, 1, 10);
}

/** Stability after a successful recall (state=Review, rating>=Hard) */
function nextRecallStability(d, s, r, rating, w) {
  let hardPenalty = (rating === Rating.Hard) ? w[15] : 1;
  let easyBonus  = (rating === Rating.Easy) ? w[16] : 1;
  return s * (1 + Math.exp(w[8]) *
    (11 - d) *
    Math.pow(s, -w[9]) *
    (Math.exp(w[10] * (1 - r)) - 1) *
    hardPenalty * easyBonus);
}

/** Stability after forgetting (rating=Again from Review/Relearning state) */
function nextForgetStability(d, s, r, w) {
  return Math.max(
    0.1,
    w[11] *
    Math.pow(d, -w[12]) *
    (Math.pow(s + 1, w[13]) - 1) *
    Math.exp(w[14] * (1 - r))
  );
}

/** Short-term stability for Learning/Relearning steps */
function shortTermStability(s, rating, w) {
  return s * Math.exp(w[17] * (rating - 3 + w[18]));
}

// ─── Scheduling ───

/**
 * Create a new (empty) card state
 */
function createNewCard() {
  return {
    state: State.New,
    due: null,
    stability: 0,
    difficulty: 0,
    elapsed_days: 0,
    scheduled_days: 0,
    reps: 0,
    lapses: 0,
    last_review: null,
  };
}

/**
 * Schedule a card after a review
 * @param {object} card - current card state
 * @param {number} rating - Rating.Again/Hard/Good/Easy (1-4)
 * @param {Date} now - current timestamp
 * @param {number[]} w - FSRS parameters (default: DEFAULT_W)
 * @returns {{card: object, log: object}} - new card state and review log entry
 */
function schedule(card, rating, now, w) {
  w = w || DEFAULT_W;
  now = now || new Date();

  const elapsedDays = card.last_review
    ? Math.max(0, (now - new Date(card.last_review)) / 86400000)
    : 0;

  let newCard = { ...card };
  newCard.elapsed_days = elapsedDays;
  newCard.last_review = now.toISOString();
  newCard.reps += 1;

  if (card.state === State.New) {
    // First review ever
    newCard.difficulty = initDifficulty(rating, w);
    newCard.stability = initStability(rating, w);

    if (rating === Rating.Again) {
      newCard.state = State.Learning;
      newCard.scheduled_days = 0;
      newCard.due = new Date(now.getTime() + 60000).toISOString(); // 1 min
    } else if (rating === Rating.Hard) {
      newCard.state = State.Learning;
      newCard.scheduled_days = 0;
      newCard.due = new Date(now.getTime() + 300000).toISOString(); // 5 min
    } else if (rating === Rating.Good) {
      newCard.state = State.Learning;
      newCard.scheduled_days = 0;
      newCard.due = new Date(now.getTime() + 600000).toISOString(); // 10 min
    } else { // Easy
      newCard.state = State.Review;
      const interval = nextInterval(newCard.stability);
      newCard.scheduled_days = interval;
      newCard.due = new Date(now.getTime() + interval * 86400000).toISOString();
    }

  } else if (card.state === State.Learning || card.state === State.Relearning) {
    // In learning/relearning step
    newCard.difficulty = nextDifficulty(card.difficulty, rating, w);

    if (rating === Rating.Again) {
      newCard.stability = shortTermStability(card.stability, rating, w);
      newCard.state = card.state; // stay in same state
      newCard.scheduled_days = 0;
      newCard.due = new Date(now.getTime() + 300000).toISOString(); // 5 min
      if (card.state === State.Relearning) newCard.lapses += 1;
    } else if (rating === Rating.Hard) {
      newCard.stability = shortTermStability(card.stability, rating, w);
      newCard.state = card.state;
      newCard.scheduled_days = 0;
      newCard.due = new Date(now.getTime() + 600000).toISOString(); // 10 min
    } else { // Good or Easy → graduate to Review
      newCard.stability = shortTermStability(card.stability, rating, w);
      newCard.state = State.Review;
      const interval = nextInterval(newCard.stability);
      newCard.scheduled_days = interval;
      newCard.due = new Date(now.getTime() + interval * 86400000).toISOString();
    }

  } else { // State.Review
    const r = retrievability(card.stability, elapsedDays);
    newCard.difficulty = nextDifficulty(card.difficulty, rating, w);

    if (rating === Rating.Again) {
      // Lapse: forgot the card
      newCard.stability = nextForgetStability(card.difficulty, card.stability, r, w);
      newCard.state = State.Relearning;
      newCard.lapses += 1;
      newCard.scheduled_days = 0;
      newCard.due = new Date(now.getTime() + 300000).toISOString(); // 5 min
    } else {
      // Successful recall
      newCard.stability = nextRecallStability(card.difficulty, card.stability, r, rating, w);
      newCard.state = State.Review;
      const interval = nextInterval(newCard.stability);
      newCard.scheduled_days = interval;
      newCard.due = new Date(now.getTime() + interval * 86400000).toISOString();
    }
  }

  const log = {
    rating,
    review_time: now.toISOString(),
    elapsed_days: elapsedDays,
    scheduled_days: newCard.scheduled_days,
    state: card.state,
  };

  return { card: newCard, log };
}

/**
 * Get interval preview text for each rating option
 */
function getIntervalPreview(card, now) {
  now = now || new Date();
  const previews = {};
  [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy].forEach(r => {
    const result = schedule({ ...card }, r, now);
    const sc = result.card;
    if (sc.scheduled_days === 0) {
      // Minutes
      const mins = Math.round((new Date(sc.due) - now) / 60000);
      previews[r] = mins < 60 ? `${mins}分` : `${Math.round(mins / 60)}时`;
    } else {
      const days = sc.scheduled_days;
      if (days < 30) previews[r] = `${days}天`;
      else if (days < 365) previews[r] = `${(days / 30).toFixed(1)}月`;
      else previews[r] = `${(days / 365).toFixed(1)}年`;
    }
  });
  return previews;
}

/**
 * Get cards due for review
 */
function getDueCards(allCards, fsrsStates, now) {
  now = now || new Date();
  const due = [];
  const newCards = [];

  allCards.forEach(card => {
    const st = fsrsStates[card.id];
    if (!st || st.state === State.New) {
      newCards.push(card);
    } else if (new Date(st.due) <= now) {
      due.push(card);
    }
  });

  // Sort due cards: most overdue first
  due.sort((a, b) => {
    const da = new Date(fsrsStates[a.id].due);
    const db = new Date(fsrsStates[b.id].due);
    return da - db;
  });

  return { due, newCards };
}

/**
 * Get review forecast for next N days
 */
function getReviewForecast(allCards, fsrsStates, days) {
  days = days || 7;
  const now = new Date();
  const forecast = new Array(days).fill(0);

  allCards.forEach(card => {
    const st = fsrsStates[card.id];
    if (!st || !st.due || st.state === State.New) return;
    const due = new Date(st.due);
    const dayDiff = Math.floor((due - now) / 86400000);
    if (dayDiff >= 0 && dayDiff < days) {
      forecast[dayDiff]++;
    }
  });

  return forecast;
}
