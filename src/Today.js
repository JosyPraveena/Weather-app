import React from "react";

import moment from "moment";
import kelvinToCelsius from "kelvin-to-celsius";

const Today = ({ current }) => {
  return (
    <>
      {current && (
        <div className="current">
          <h2>{current.weather[0].main}</h2>
          <img
            alt="example"
            src={`http://openweathermap.org/img/wn/${
              current.weather[0].icon
            }@2x.png`}
          />

          <h3>{Math.round(kelvinToCelsius(current.temp)) + "°"}</h3>
        </div>
      )}

      {current && (
        <h4 id="description">{`Today: ${
          current.weather[0].description
        }.  It's currently ${Math.round(
          kelvinToCelsius(current.temp)
        )}; feels like ${Math.round(kelvinToCelsius(current.feels_like))}`}</h4>
      )}
    </>
  );
};

export default Today;
