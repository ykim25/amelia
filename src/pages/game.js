import { useState, useEffect } from 'react';
import styles from './game.css';
import Orv9 from '../pages/components/planes/Orv9.png';
import Neha1 from '../pages/components/planes/Neha1.png'
import Melia from '../pages/components/planes/Melia.png'
import Tom6 from '../pages/components/planes/Tom6.png'
import Will7 from '../pages/components/planes/Will7.png'
import Mav5 from '../pages/components/planes/Mav5.png'
import Buster from '../pages/components/planes/Buster.png'
import NextButton from './components/buttons/NextButton';
import PreviousButton from './components/buttons/PreviousButton';
import LaunchButton from './components/buttons/LaunchButton';
import axios from 'axios'

export default function Game() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameConditions, setGameConditions] = useState({
    location: null,
    windDirection: null,
    distance: '25 mi'
  })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       //get location
  //       const locationResponse = await axios.get(
  //         'https://ipinfo.io/?token=86747a7a9a810d'
  //       );
  //       const locationData = locationResponse.data;
  //       const [latitude, longitude] = locationData.loc.split(',');
  //       const location = locationData.city;

  //       //get wind
  //       const stormglassApiKey =
  //         '77bd0bb0-4abb-11ee-86b2-0242ac130002-77bd0c96-4abb-11ee-86b2-0242ac130002';
  //       const headers = {
  //         Authorization: stormglassApiKey,
  //       };
  //       const params = 'windSpeed,windDirection';
  //       const windResponse = await axios.get(
  //         `https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}`,
  //         { headers }
  //       );

  //       //LOCATION: Walnut, WINDSPEED:5.83, windDirection: 270.36
  //       const windSpeedThreshold = 5; // Threshold on if wind has affect on plane
  //       const stormGlassData = windResponse.data;
  //       const windSpeed = stormGlassData.hours[0].windSpeed.icon;
  //       let windDirection;

  //       if (windSpeed >= windSpeedThreshold) {
  //         windDirection = stormGlassData.hours[0].windDirection.icon;

  //         if (windDirection >= 225 && windDirection <= 315) windDirection = 2;
  //         else if (windDirection >= 135 && windDirection < 225)
  //           windDirection = -2;
  //         else if (windDirection >= 45 && windDirection < 135)
  //           windDirection = 0;
  //       } else {
  //         // If wind speed doesn't meet the threshold, set windDirection to 0.
  //         windDirection = 0;
  //       }

  //       setGameConditions({
  //         location,
  //         windSpeed,
  //         windDirection,
  //       });

  //       console.log(
  //         `LOCATION: ${location}, WINDSPEED:${windSpeed}, windDirection: ${windDirection}`
  //       );
  //     } catch (error) {
  //       console.error('An error occurred:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const planes = [Orv9, Neha1, Melia, Tom6, Will7, Mav5, Buster];
  const planeNames = [
    'Orv9',
    'Neha1',
    'Melia',
    'Tom6',
    'Will7',
    'Mav5',
    'Buster',
  ];
  const currentPlane = planes[currentIndex]
  const currentPlaneName = planeNames[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === planes.length - 1 ? planes.length - 1 : prev + 1
    );
  };

  return (
    <div className={styles.backgroundContainer}>
      <video autoPlay loop muted playsInline>
        <source src='/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <img
        src={planes[currentIndex]}
        alt="orv9"
        className='orv-9'
      />
      <NextButton onClick={handleNext} />
      <PreviousButton onClick={handlePrev} />
      <LaunchButton plane={currentPlaneName} gameConditions={gameConditions} />
    </div>
  )
}