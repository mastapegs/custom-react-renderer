import { render, screen } from "@testing-library/react";
import App from "./App";
import data from "./data.json";

test("renders learn react link", () => {
  render(<App />);
  const regex = new RegExp(data.h1, "i");
  const linkElement = screen.getByText(regex);
  expect(linkElement).toBeInTheDocument();
});
