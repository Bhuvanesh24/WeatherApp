import React, { useState } from "react";

/**
 * CityInput component handles user input for city selection.
 * @param {Object} props - Component props.
 * @param {string} props.city - Current selected city.
 * @param {Function} props.makeApiCall - Function to make API call for weather data.
 * @returns {JSX.Element} JSX representation of the CityInput component.
 */
function CityInput(props) {
  const [inputValue, setInputValue] = useState("");

  /**
   * Event handler for key press events.
   * @param {Object} e - Event object.
   */
  const onKeyPressHandler = async (e) => {
    if (e.key === "Enter") {
      const city = inputValue.trim();

      // Validate city name using regex
      if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)) {
        e.target.classList.add("loading");
        if (await props.makeApiCall(city)) {
          e.target.placeholder = "Enter a City...";
        } else {
          e.target.placeholder = "City was not found, try again...";
        }
      } else {
        e.target.placeholder = "Please enter a valid city name...";
      }
      e.target.classList.remove("loading");
      setInputValue("");
    }
  };

  // Inline style object for input element
  const style = {
    top: props.city ? "-380px" : "-20px",
    width: "600px",
    display: "inline-block",
    padding: "10px 0px 10px 30px",
    lineHeight: "120%",
    position: "relative",
    borderRadius: "20px",
    outline: "none",
    fontSize: "20px",
    transition: "all 0.5s ease-out",
  };

  return (
    <input
      className="city-input"
      style={style}
      type="text"
      placeholder="Enter a City..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={onKeyPressHandler}
    />
  );
}

export default CityInput;
