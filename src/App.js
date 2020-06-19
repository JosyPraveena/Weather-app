import React, { useEffect, useState } from "react";
import "./styles.css";
import moment from "moment";
import kelvinToCelsius from "kelvin-to-celsius";
import { Route, Switch, Link } from "react-router-dom";
import Hourly from "./Hourly";
import Weather from "./Weather";
import Today from "./Today";
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
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ee72c57929fea298dc920a087fbecfda`
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

      {/* <Switch> */}
      {/* <Route
          path="/:day"
          render={props => <Hourly {...props} data={hourly} />}
        /> */}
      {/* < */}
      {/* <Weather weather={weather} />
      </Switch> */}
    </>
  );
};

export default App;
