import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color, and updates when clicked", () => {
  render(<App />);

  //   This will find an element with role "button" and name "change to blue"
  const colorButton = screen.getByRole("button", { name: /Change to blue/i });

  //   Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  render(<App />);

  //   Click on the button
  fireEvent.click(colorButton);

  //   Expect the color change
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // Expect the change in the text
  expect(colorButton).toHaveTextContent(/change to red/i);
});
