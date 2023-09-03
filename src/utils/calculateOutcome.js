import Buster from '../components/planes/Buster';
import Mav5 from '../components/planes/Mav5';
import Melia from '../components/planes/Melia';
import Neha1 from '../components/planes/Neha1';
import Orv9 from '../components/planes/Orv9';
import Tom6 from '../components/planes/Tom6';
import Will7 from '../components/planes/Will7';

const calculateOutcome = (currentPlane = <Orv9 />) => {
  let baseScore;
  let windScore = 0;
  //calculate plane base stats
  if (currentPlane === <Orv9 />) baseScore = -2;
  else if (currentPlane === <Neha1 />) baseScore = 4;
  else if (currentPlane === <Melia />) baseScore = 2;
  else if (currentPlane === <Tom6 />) baseScore = 1;
  else if (currentPlane === <Will7 />) baseScore = 3;
  else if (currentPlane === <Mav5 />) baseScore = 2;
  else if (currentPlane === <Buster />) baseScore = 4;
  else if (currentPlane === <Tom6 />) baseScore = 1;
  //nehas fetch thing --> Fetch location on page load actally

  return baseScore + windScore;
};
