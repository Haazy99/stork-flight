import peepImg from '../assets/levels/peep.png';
import wingedImg from '../assets/levels/winged.png';
import songbirdImg from '../assets/levels/songbird.png';
import wayfinderImg from '../assets/levels/wayfinder.png';
import skymasterImg from '../assets/levels/skymaster.png';

/**
 * Returns the level image based on the current question number (1-25)
 * Q1-Q5: PEEP
 * Q6-Q10: WINGED
 * Q11-Q15: SONGBIRD
 * Q16-Q20: WAYFINDER
 * Q21-Q25: SKYMASTER
 */
export function getLevelImage(questionNumber: number): string {
  if (questionNumber <= 5) return peepImg;
  if (questionNumber <= 10) return wingedImg;
  if (questionNumber <= 15) return songbirdImg;
  if (questionNumber <= 20) return wayfinderImg;
  return skymasterImg;
}

/**
 * Returns the level name based on the current question number
 */
export function getLevelName(questionNumber: number): string {
  if (questionNumber <= 5) return 'PEEP';
  if (questionNumber <= 10) return 'WINGED';
  if (questionNumber <= 15) return 'SONGBIRD';
  if (questionNumber <= 20) return 'WAYFINDER';
  return 'SKYMASTER';
}

