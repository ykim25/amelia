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

  return `${currentPlane} ${animationStyle}`;
};