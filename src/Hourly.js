import React from "react";
import moment from "moment";
import kelvinToCelsius from "kelvin-to-celsius";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const Hourly = ({ hourly }) => {
  return (
    <>
      <div className="Hourly">
        {hourly &&
          hourly.map(each => {
            return (
              <>
                <img
                  id="weatherimage"
                  alt="example"
                  src={`http://openweathermap.org/img/wn/${
                    each.weather[0].icon
                  }@2x.png`}
                />

                <div id="temp">
                  {Math.round(kelvinToCelsius(each.temp)) + "°"}
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Hourly;
