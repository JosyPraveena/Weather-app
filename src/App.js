import React, { useEffect, useState } from "react";

import "./styles.css";
// import Hourly from "./Hourly";
import Weather from "./Weather";
import Today from "./Today";
require("dotenv").config();

const App = () => {
  const [current, setCurrent] = useState(null);
  const [weather, setWeather] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geo => {
      setLat(geo.coords.latitude);
      setLon(geo.coords.longitude);
    });
  });

  useEffect(() => {
    const fetchStudents = async () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${
          process.env.REACT_APP_API_KEY
        }`
      )
        .then(response => response.json())
        .then(result => {
          setWeather(result.daily);
          setHourly(result.hourly);
          setCurrent(result.current);
        })
        .catch(error => console.log("error", error));
    };
    fetchStudents();
  }, [lat, lon]);
  return (
    <>
      <div className="App">
        <h1>Local Weather</h1>
        <Today current={current} />
        {/* <Hourly hourly={hourly} /> */}
        <Weather weather={weather} />
      </div>
    </>
  );
};

export default App;
