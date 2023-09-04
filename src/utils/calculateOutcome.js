import Buster from '../components/planes/Buster';
import Mav5 from '../components/planes/Mav5';
import Melia from '../components/planes/Melia';
import Neha1 from '../components/planes/Neha1';
import Orv9 from '../components/planes/Orv9';
import Tom6 from '../components/planes/Tom6';
import Will7 from '../components/planes/Will7';

export const calculateOutcome = (currentPlane) => {
  const baseScores = {
    Orv9: -2,
    Neha1: 4,
    Melia: 2,
    Tom6: 1,
    Will7: 3,
    Mav5: 2,
    Buster: 4,
  };

  let windScore = 0; //fetch result

  const baseScore = baseScores[currentPlane] || 0;
  let totalScore = baseScore + windScore;
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

  return `${currentPlane} ${animationStyle}`;
};
