import Buster from '../components/planes/Buster';
import Mav5 from '../components/planes/Mav5';
import Melia from '../components/planes/Melia';
import Neha1 from '../components/planes/Neha1';
import Orv9 from '../components/planes/Orv9';
import Tom6 from '../components/planes/Tom6';
import Will7 from '../components/planes/Will7';

export const calculateOutcome = (currentPlane) => {
  let baseScore = 0;
  let windScore = 0; // = nehas fetch result (either 2, 0, or -2)
  console.log(`current plane: ${currentPlane}`);
  if (currentPlane == 'Orv9') baseScore = -2;
  else if (currentPlane === 'Neha1') baseScore = 4;
  else if (currentPlane === 'Melia') baseScore = 2;
  else if (currentPlane === 'Tom6') baseScore = 1;
  else if (currentPlane === 'Will7') baseScore = 3;
  else if (currentPlane === 'Mav5') baseScore = 2;
  else if (currentPlane === 'Buster') baseScore = 4;

  console.log(`base score: ${baseScore}`);

  let totalScore = baseScore + windScore;
  //if statements: if score > 0 and currentPlane = neha1, return video x -- etc.
  console.log(`total score: ${totalScore}`);
  if (totalScore === -2 && currentPlane === 'Orv9') return 'Orv9 lose';

  //return video
};
