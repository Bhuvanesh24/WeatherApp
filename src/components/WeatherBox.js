import React from "react";


function WeatherBox(props) {
  /**
   * Function to get the day of the week from a given date.
   * @param {string} date - Date string in YYYY-MM-DD format.
   * @returns {string} Name of the day of the week.
   */
  const getDay = (date) => {
    // Array of weekdays
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    // Get the day of the week from the date
    return weekdays[new Date(date).getDay()];
  };

  return (
    <>
      {/* Render weather box if date is provided */}
      {props.date ? (
        <div className="weather-box">
          {/* Display the day of the week */}
          <h1>{props.date ? getDay(props.date) : ""}</h1>
          {/* Display the weather icon */}
          <img
            src={props.icon ? `/images/${props.icon}.svg` : "/images/01d.svg"}
            alt="sun"
          />
          {/* Display the temperature */}
          <span className="temp">{Math.round(props.temp - 273.15)}°C</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default WeatherBox;