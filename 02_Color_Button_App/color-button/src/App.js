import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Change to blue");
  const [buttonColor, setButtonColor] = useState("red");

  const onClickHandler = () => {
    setButtonText((prevState) => {
      if (prevState === "Change to blue") {
        return "Change to red";
      } else {
        return "Change to blue";
      }
    });
    setButtonColor((prevState) => {
      if (prevState === "red") {
        return "blue";
      } else {
        return "red";
      }
    });
  };
  return (
    <div className="App">
      <div>
        <button
          style={{ backgroundColor: buttonColor }}
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
            if (buttonText === "Change to blue") {
              setButtonColor("red");
            } else {
              setButtonColor("blue");
            }
          }
        }}
      />
      <label htmlFor="disable_button_checkbox">Disable Button</label>
    </div>
  );
}

export default App;
