import { render, screen } from "@testing-library/react";
import App from "./App";
import data from "./data.json";

test("renders h1 text content", () => {
  render(<App />);
  const regex = new RegExp(data.h1, "i");
  const h1Text = screen.getByText(regex);
  expect(h1Text).toBeInTheDocument();
});
