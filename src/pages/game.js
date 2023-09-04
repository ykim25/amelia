import React, { useEffect, useState } from 'react';
import styles from './game.css'; // Ensure the correct path to your CSS file
import Orv9 from '../components/planes/Orv9';
import Neha1 from '../components/planes/Neha1';
import Melia from '../components/planes/Melia';
import Tom6 from '../components/planes/Tom6';
import Will7 from '../components/planes/Will7';
import Mav5 from '../components/planes/Mav5';
import Buster from '../components/planes/Buster';
import NextButton from '../components/buttons/NextButton';
import PreviousButton from '../components/buttons/PreviousButton';
import axios from 'axios';
import GameConditions from '../components/GameConditions';
import LaunchButton from '../components/buttons/LaunchButton';

export default function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameConditions, setGameConditions] = useState({
    location: null,
    windDirection: null,
    distance: '25 mi',
  });

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
  //       const windSpeedThreshold = 10; // Threshold on if wind has affect on plane
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

  //////////////
  //work in progress: Store in local storage to not make api call everytime
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Check if data is in local storage
  //       const cachedData = localStorage.getItem('gameConditions');

  //       if (cachedData) {
  //         // If data is found in local storage, parse and set it
  //         const parsedData = JSON.parse(cachedData);
  //         console.log(`parsed data: ${parsedData}`);
  //         console.log(`${location}, ${windSpeed}, ${windDirection}`);
  //         console.log(`game conditions: ${gameConditions}`);
  //         setGameConditions(parsedData);
  //       } else {
  //         // If data is not in local storage, make API calls
  //         console.log('MAKING API CALL');
  //         const locationResponse = await axios.get(
  //           'https://ipinfo.io/?token=86747a7a9a810d'
  //         );
  //         const locationData = locationResponse.data;
  //         const [latitude, longitude] = locationData.loc.split(',');
  //         const location = locationData.city;
  //         const stormglassApiKey =
  //           '77bd0bb0-4abb-11ee-86b2-0242ac130002-77bd0c96-4abb-11ee-86b2-0242ac130002';
  //         const headers = {
  //           Authorization: stormglassApiKey,
  //         };
  //         const params = 'windSpeed,windDirection';
  //         const windResponse = await axios.get(
  //           `https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}`,
  //           { headers }
  //         );

  //         const windSpeedThreshold = 10; // Threshold on if wind has affect on plane
  //         const stormGlassData = windResponse.data;
  //         const windSpeed = stormGlassData.hours[0].windSpeed.icon;
  //         let windDirection;

  //         if (windSpeed >= windSpeedThreshold) {
  //           windDirection = stormGlassData.hours[0].windDirection.icon;

  //           if (windDirection >= 225 && windDirection <= 315) windDirection = 2;
  //           else if (windDirection >= 135 && windDirection < 225)
  //             windDirection = -2;
  //           else if (windDirection >= 45 && windDirection < 135)
  //             windDirection = 0;
  //         } else {
  //           windDirection = 0;
  //         }

  //         console.log(`${location}, ${windSpeed}, ${windDirection}`);
  //         setGameConditions({
  //           location,
  //           windSpeed,
  //           windDirection,
  //         });

  //         // Store data in local storage
  //         localStorage.setItem(
  //           'gameConditions',
  //           JSON.stringify({ location, windSpeed, windDirection })
  //         );
  //       }
  //     } catch (error) {
  //       console.error('An error occurred:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  /////////////

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
  const CurrentPlane = planes[currentIndex];
  const currentPlaneName = planeNames[currentIndex];
  const [showPlanes, setShowPlanes] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === planes.length - 1 ? planes.length - 1 : prev + 1
    );
  };

  console.log(`current plane: ${CurrentPlane}`);

  return (
    <div className={styles.backgroundContainer}>
      <video autoPlay loop muted playsInline>
        <source src='/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* later create a wrapper or something to contain current plane and buttons and conditionally render after user clicks start*/}
      {/* {showPlanes && <CurrentPlane/>} */}
      {/* or something like showPlanes && <PlaneSelectionWrapper/> <-- contains prev, next and launch */}
      <GameConditions
        location={gameConditions.location}
        wind='ayy'
        distance='yo'
      />
      <CurrentPlane />
      <div>
        <PreviousButton onClick={handlePrev} />
        <NextButton onClick={handleNext} />
        <LaunchButton
          plane={currentPlaneName}
          gameConditions={gameConditions}
        />
      </div>
    </div>
  );
}
