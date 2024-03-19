import React from "react";
/**
 * MainWeatherWindow component displays the main weather information.
 * @param {Object} props - Component props.
 * @param {string} props.city - The name of the city for which weather information is displayed.
 * @param {Object} props.data - Weather data for the current day.
 * @param {string} props.data.icon - Icon representing the weather condition.
 * @param {number} props.data.temp - Temperature in Kelvin.
 * @param {string} props.data.weather_desc - Description of the weather condition.
 * @returns {JSX.Element} JSX representation of the MainWeatherWindow component.
 */

function MainWeatherWindow(props) {
  const { city, data } = props;

  const Title = city ? null : <h1 className="title">WeatherApp</h1>;

  return (
    <div className="main">
      <div className="inner-main">
        {Title}
        <img
          src={data ? `/images/${data.icon}.svg` : "/images/01d.svg"}
          alt="sun"
          style={{
            visibility: city ? "visible" : "hidden",
            opacity: city ? "1" : "0",
          }}
        />
        
        <div
          className="today"
          style={{
            visibility: city ? "visible" : "hidden",
            opacity: city ? "1" : "0",
          }}
        >
          <span>Today</span>
          <h1>{city}</h1>
          <p>
            Temperature: {data ? Math.round(data.temp - 273.15) : 0}
            °C
          </p>
          <p>{data ? data.weather_desc.toLowerCase() : ""}</p>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default MainWeatherWindow;
