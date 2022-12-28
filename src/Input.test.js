import { screen, render } from "@testing-library/react";
import Input from "./components/Input.js";

it("should render an input with a class 'input'", () => {
  render(<Input placeholder="TestInput" />);
  const inputElement = screen.getByPlaceholderText("TestInput", {
    hidden: true,
  });

  expect(inputElement).toBeInTheDocument();
  expect(inputElement.classList.contains("input")).toBe(true);
});

it("should render an input with property required", () => {
  render(<Input placeholder="TestInput" required />);
  const inputElement = screen.getByPlaceholderText("TestInput", {
    hidden: true,
  });

  expect(inputElement).toHaveAttribute("required");
});
