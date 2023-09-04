import Orv9 from '../pages/components/planes/Orv9.png';
import Neha1 from '../pages/components/planes/Neha1.png'
import Melia from '../pages/components/planes/Melia.png'
import Tom6 from '../pages/components/planes/Tom6.png'
import Will7 from '../pages/components/planes/Will7.png'
import Mav5 from '../pages/components/planes/Mav5.png'
import Buster from '../pages/components/planes/Buster.png'

export const calculateOutcome = (currentPlane, gameConditions) => {
  const baseScores = {
    Orv9: -2,
    Neha1: 4,
    Melia: 2,
    Tom6: 1,
    Will7: 3,
    Mav5: 2,
    Buster: 4,
  };

  let windScore = gameConditions.windDirection;
  console.log(`windscore: ${windScore}`);
  const baseScore = baseScores[currentPlane] || 0;
  let totalScore = baseScore + windScore;
  console.log(`total score: ${totalScore}`);
  let animationStyle;

  switch (totalScore) {
    case -2:
      animationStyle = 'crash';
      break;
    case 1:
    case 2:
    case 3:
      animationStyle = 'water';
      break;
    case 4:
      animationStyle = 'win';
      break;
    default:
      animationStyle = 'offScreen';
      break;
  }

  const finalAnimation = `${currentPlane}${animationStyle}`
  let id;

  switch (finalAnimation) {
    case 'Orv9offScreen':
      id = 1;
      break;
    case 'Busterwin':
      id = 2;
      break;
    case 'Mav5offScreen':
      id = 3;
      break;
    case 'Mav5water':
      id = 4;
      break;
    case 'Meliacrash':
      id = 5;
      break;
    case 'Meliawater':
      id = 6;
      break;
    case 'Meliawin':
      id = 7;
      break;
    case 'Neha1water':
      id = 8;
      break;
    case 'Neha1win':
      id = 9;
      break;
    case 'Orv9crash':
      id = 10;
      break;
    case 'Tom6crash':
      id = 11;
      break;
    case 'Tom6water':
      id = 12;
      break;
    case 'Will7offScreen':
      id = 13;
      break;
    case 'Will7water':
      id = 14;
      break;
    default:
      id = 15; // Default to loading
      break;
  }


  // const videos = {
  //   1: '/videos/BUST3R_FlyThrough.mp4',
  //   2: '/videos/BUST3R_Win.mp4',
  //   3: '/videos/Mav5_FlyThrough.mp4',
  //   4: '/videos/Mav5_Water.mp4',
  //   5: '/videos/Melia_Crash.mp4',
  //   6: '/videos/Melia_Water.mp4',
  //   7: '/videos/Melia_Win.mp4',
  //   8: '/videos/Neha1_Water.mp4',
  //   9: '/videos/Neha1_Win.mp4',
  //   10: '/videos/Orv9_Crash.mp4',
  //   11: '/videos/Tom6_Crash.mp4',
  //   12: '/videos/Tom6_Water.mp4',
  //   13: '/videos/Will7_FlyThrough.mp4',
  //   14: '/videos/Will7_Water.mp4',
  //   15: '/videos/LOADING.mp4'
  // }
  return id;
};