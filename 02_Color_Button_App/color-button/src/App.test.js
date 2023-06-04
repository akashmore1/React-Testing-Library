import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { convertCamelCaseIntoSpacedCamelCase } from "./App";

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

test("initial coditions", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });

  //   Check initially button is enabled
  expect(button).toBeEnabled();

  //   Checks button is disabled after clicking on ckeckbox
  const checkBox = screen.getByRole("checkbox", { name: /disable button/i });
  expect(checkBox).not.toBeChecked();

  //  When ckeckbox is clicked button is disabled
  fireEvent.click(checkBox);
  expect(button).toBeDisabled();

  fireEvent.click(checkBox);
  expect(button).not.toBeDisabled();
});

test("disbaled buttons color is grey", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
});

describe("test camel case converter", () => {
  test("", () => {
    expect(convertCamelCaseIntoSpacedCamelCase("Red")).toBe("Red");
    expect(convertCamelCaseIntoSpacedCamelCase("SkyBlue")).toBe("Sky Blue");
    expect(convertCamelCaseIntoSpacedCamelCase("RedBlueGreen")).toBe(
      "Red Blue Green"
    );
  });
});
