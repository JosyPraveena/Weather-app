import React from "react";
import kelvinToCelsius from "kelvin-to-celsius";
import moment from "moment";

const Weather = ({ weather }) => {
  const data = weather.slice(1, 7);
  return (
    <div className="Weather">
      {data.length &&
        data.map(each => {
          return (
            <>
              <div className="weather" key={each.index}>
                <h4 key={each.index}>{moment.unix(each.dt).format("ddd")}</h4>
                <img
                  alt="example"
                  src={`http://openweathermap.org/img/wn/${
                    each.weather[0].icon
                  }@2x.png`}
                />
                <br />
                <h4>
                  {" "}
                  {"Max " +
                    Math.round(kelvinToCelsius(each.temp.max)) +
                    "° / " +
                    "Min " +
                    Math.round(kelvinToCelsius(each.temp.min)) +
                    "°"}{" "}
                </h4>
                <br />
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Weather;
