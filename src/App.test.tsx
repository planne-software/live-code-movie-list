import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
  });
});
