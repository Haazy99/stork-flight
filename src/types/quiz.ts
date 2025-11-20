// Hot Seat Challenge Types
export type Rank = 'PEEP' | 'WINGED' | 'SONGBIRD' | 'WAYFINDER' | 'SKYMASTER';

export type OutcomeType = 'victory' | 'walkaway' | 'failure' | 'legendary';

export interface LifelineState {
  sixtyFortyRemaining: number; // 0-2
  eliminatedOptions: number[]; // Array of eliminated option indices
}

export interface HotSeatState {
  callsign: string;
  currentQuestionNumber: number; // 1-25
  currentEggsValue: number;
  lastSafeHavenEggs: number; // 0, 50000, or 250000
  lifelines: LifelineState;
  correctAnswers: number;
  incorrectAnswers: number;
  isComplete: boolean;
  outcome: OutcomeType | null;
}

export interface LeaderboardEntry {
  id: string;
  callsign: string;
  eggs: number;
  rank: Rank;
  outcome: OutcomeType;
  questionReached: number;
  correct: number;
  incorrect: number;
  date: string;
}

export const getRankFromEggs = (eggs: number): Rank => {
  if (eggs >= 600000) return 'SKYMASTER';
  if (eggs >= 300000) return 'WAYFINDER';
  if (eggs >= 150000) return 'SONGBIRD';
  if (eggs >= 60000) return 'WINGED';
  return 'PEEP';
};

export const getRankThresholds = () => ({
  PEEP: { min: 0, max: 59999, color: 'text-yellow-400', label: 'Peep' },
  WINGED: { min: 60000, max: 149999, color: 'text-cyan-400', label: 'Winged' },
  SONGBIRD: { min: 150000, max: 299999, color: 'text-green-400', label: 'Songbird' },
  WAYFINDER: { min: 300000, max: 599999, color: 'text-orange-400', label: 'Wayfinder' },
  SKYMASTER: { min: 600000, max: Infinity, color: 'text-amber-400', label: 'Skymaster' }
});

export const getRankTitle = (rank: Rank): string => {
  const titles: Record<Rank, string> = {
    PEEP: 'Peep',
    WINGED: 'Winged',
    SONGBIRD: 'Songbird',
    WAYFINDER: 'Wayfinder',
    SKYMASTER: 'Skymaster',
  };
  return titles[rank];
};
