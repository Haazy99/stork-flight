// Hot Seat Challenge Configuration
// 25-question ladder with EGGs prizes, time limits, and rank tiers

export interface HotSeatLevel {
  questionNumber: number;
  eggsValue: number;
  rankTier: 'PEEP' | 'WINGED' | 'SONGBIRD' | 'WAYFINDER' | 'SKYMASTER';
  timeLimit: number; // in seconds
  isSafeHaven: boolean;
}

export const HOT_SEAT_LADDER: HotSeatLevel[] = [
  // PEEP Tier (Q1-Q5): 40 seconds per question
  { questionNumber: 1, eggsValue: 5000, rankTier: 'PEEP', timeLimit: 40, isSafeHaven: false },
  { questionNumber: 2, eggsValue: 10000, rankTier: 'PEEP', timeLimit: 40, isSafeHaven: false },
  { questionNumber: 3, eggsValue: 20000, rankTier: 'PEEP', timeLimit: 40, isSafeHaven: false },
  { questionNumber: 4, eggsValue: 30000, rankTier: 'PEEP', timeLimit: 40, isSafeHaven: false },
  { questionNumber: 5, eggsValue: 50000, rankTier: 'PEEP', timeLimit: 40, isSafeHaven: true }, // Safe Haven #1

  // WINGED Tier (Q6-Q10): 30 seconds per question
  { questionNumber: 6, eggsValue: 60000, rankTier: 'WINGED', timeLimit: 30, isSafeHaven: false },
  { questionNumber: 7, eggsValue: 75000, rankTier: 'WINGED', timeLimit: 30, isSafeHaven: false },
  { questionNumber: 8, eggsValue: 90000, rankTier: 'WINGED', timeLimit: 30, isSafeHaven: false },
  { questionNumber: 9, eggsValue: 110000, rankTier: 'WINGED', timeLimit: 30, isSafeHaven: false },
  { questionNumber: 10, eggsValue: 125000, rankTier: 'WINGED', timeLimit: 30, isSafeHaven: false },

  // SONGBIRD Tier (Q11-Q15): 20 seconds per question
  { questionNumber: 11, eggsValue: 150000, rankTier: 'SONGBIRD', timeLimit: 20, isSafeHaven: false },
  { questionNumber: 12, eggsValue: 175000, rankTier: 'SONGBIRD', timeLimit: 20, isSafeHaven: false },
  { questionNumber: 13, eggsValue: 200000, rankTier: 'SONGBIRD', timeLimit: 20, isSafeHaven: false },
  { questionNumber: 14, eggsValue: 225000, rankTier: 'SONGBIRD', timeLimit: 20, isSafeHaven: false },
  { questionNumber: 15, eggsValue: 250000, rankTier: 'SONGBIRD', timeLimit: 20, isSafeHaven: true }, // Safe Haven #2

  // WAYFINDER Tier (Q16-Q20): 15 seconds per question
  { questionNumber: 16, eggsValue: 300000, rankTier: 'WAYFINDER', timeLimit: 15, isSafeHaven: false },
  { questionNumber: 17, eggsValue: 350000, rankTier: 'WAYFINDER', timeLimit: 15, isSafeHaven: false },
  { questionNumber: 18, eggsValue: 400000, rankTier: 'WAYFINDER', timeLimit: 15, isSafeHaven: false },
  { questionNumber: 19, eggsValue: 450000, rankTier: 'WAYFINDER', timeLimit: 15, isSafeHaven: false },
  { questionNumber: 20, eggsValue: 500000, rankTier: 'WAYFINDER', timeLimit: 15, isSafeHaven: false },

  // SKYMASTER Tier (Q21-Q25): 10 seconds per question
  { questionNumber: 21, eggsValue: 600000, rankTier: 'SKYMASTER', timeLimit: 10, isSafeHaven: false },
  { questionNumber: 22, eggsValue: 700000, rankTier: 'SKYMASTER', timeLimit: 10, isSafeHaven: false },
  { questionNumber: 23, eggsValue: 800000, rankTier: 'SKYMASTER', timeLimit: 10, isSafeHaven: false },
  { questionNumber: 24, eggsValue: 900000, rankTier: 'SKYMASTER', timeLimit: 10, isSafeHaven: false },
  { questionNumber: 25, eggsValue: 1000000, rankTier: 'SKYMASTER', timeLimit: 10, isSafeHaven: false }, // Final Question
];

export interface SafeHaven {
  questionNumber: number;
  eggsValue: number;
  rankTier: string;
}

export const SAFE_HAVENS: SafeHaven[] = [
  { questionNumber: 5, eggsValue: 50000, rankTier: 'PEEP' },
  { questionNumber: 15, eggsValue: 250000, rankTier: 'SONGBIRD' },
];

// Helper functions
export const getLevelByQuestionNumber = (questionNumber: number): HotSeatLevel | undefined => {
  return HOT_SEAT_LADDER.find(level => level.questionNumber === questionNumber);
};

export const getLastSafeHaven = (questionNumber: number): SafeHaven | null => {
  // Returns the last Safe Haven the user passed
  if (questionNumber >= 15) {
    return SAFE_HAVENS[1]; // Q15 Safe Haven
  } else if (questionNumber >= 5) {
    return SAFE_HAVENS[0]; // Q5 Safe Haven
  }
  return null; // No Safe Haven yet
};

export const getConsolationPrize = (questionNumber: number): number => {
  // Returns the EGGs amount the user gets when they fail
  if (questionNumber >= 16) {
    // Failed after Q15 Safe Haven: get 250,000
    return 250000;
  } else if (questionNumber >= 6) {
    // Failed after Q5 Safe Haven: get 50,000
    return 50000;
  } else if (questionNumber === 5) {
    // Failed at Q5 (the consolation prize question): get 5,000
    return 5000;
  }
  // Failed Q1-Q4: get 0 (consolation 5,000 mentioned in rules)
  return 5000;
};

export const getRankFromEggs = (eggs: number): 'PEEP' | 'WINGED' | 'SONGBIRD' | 'WAYFINDER' | 'SKYMASTER' => {
  if (eggs >= 600000) return 'SKYMASTER';
  if (eggs >= 300000) return 'WAYFINDER';
  if (eggs >= 150000) return 'SONGBIRD';
  if (eggs >= 60000) return 'WINGED';
  return 'PEEP';
};

export const LIFELINE_CONFIG = {
  maxLifelines: 2,
  type: '60:40' as const,
  description: 'Removes 2 wrong options, leaving 3 choices (1 correct + 2 wrong)',
};

