import type { Rank } from '@/types/quiz';

// Import rank logo images
import peepLogo from '@/assets/ranks/peep.png';
import wingedLogo from '@/assets/ranks/winged.png';
import songbirdLogo from '@/assets/ranks/songbird.png';
import wayfinderLogo from '@/assets/ranks/wayfinder.png';
import skymasterLogo from '@/assets/ranks/skymaster.png';

/**
 * Get the logo image path for a given rank
 */
export const getRankLogo = (rank: Rank): string => {
  const logoMap: Record<Rank, string> = {
    PEEP: peepLogo,
    WINGED: wingedLogo,
    SONGBIRD: songbirdLogo,
    WAYFINDER: wayfinderLogo,
    SKYMASTER: skymasterLogo,
  };

  return logoMap[rank];
};

// Note: For a React component version of RankLogo, create a separate .tsx file
// For now, we'll just use getRankLogo() function directly in components

