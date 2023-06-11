import React, { useState } from "react";
import "./App.css";

export const convertCamelCaseIntoSpacedCamelCase = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Change to midnight blue");
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");

  const onClickHandler = () => {
    setButtonText((prevState) => {
      if (prevState === "Change to midnight blue") {
        return "Change to Medium Violet Red";
      } else {
        return "Change to midnight blue";
      }
    });
    setButtonColor((prevState) => {
      if (prevState === "MediumVioletRed") {
        return "MidnightBlue";
      } else {
        return "MediumVioletRed";
      }
    });
  };
  return (
    <div className="App">
      <div>
        <button
          style={{
            backgroundColor: buttonColor,
            width: "14rem",
            height: "4rem",
            margin: "1rem",
            color: "white",
          }}
          disabled={isButtonDisabled}
          onClick={() => {
            onClickHandler();
          }}
        >
          {buttonText}
        </button>
      </div>
      <input
        type="checkbox"
        id="disable_button_checkbox"
        onClick={(e) => {
          setIsButtonDisabled(e.target.checked);
          if (e.target.checked) {
            setButtonColor("grey");
          } else {
            if (buttonText === "Change to midnight blue") {
              setButtonColor("MediumVioletRed");
            } else {
              setButtonColor("MidnightBlue");
            }
          }
        }}
      />
      <label htmlFor="disable_button_checkbox">Disable Button</label>
    </div>
  );
}

export default App;
