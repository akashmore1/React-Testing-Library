import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttonText, setButtonText] = useState("Change to blue");
  const [buttonColor, setButtonColor] = useState("red");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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
      <button
        style={{ backgroundColor: buttonColor }}
        disabled={isButtonDisabled}
        onClick={() => {
          onClickHandler();
        }}
      >
        {buttonText}
      </button>
      <input
        type="checkbox"
        onClick={(e) => {
          setIsButtonDisabled(e.target.checked);
        }}
      />
    </div>
  );
}

export default App;
