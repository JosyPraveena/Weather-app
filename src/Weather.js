import React from "react";
import kelvinToCelsius from "kelvin-to-celsius";
import Link from "react-router";
import moment from "moment";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16)
      }
    }
  })
);

const Weather = ({ weather }) => {
  const data = weather.slice(1, 7);
  return (
    <div className="Weather">
      {data.length &&
        data.map(each => {
          return (
            <>
              <div className="weather">
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
