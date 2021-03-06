import React from "react";
import "jest-dom/extend-expect";
import { render, cleanup } from "react-testing-library";
import { EstimateDisplay } from "./EstimateDisplay";
import { useEstimateState } from "./EstimateStateProvider";
import { EstimateState } from "./EstimateState";
jest.mock("./EstimateStateProvider", () => ({
  useEstimateState: jest.fn()
}));
describe("Estimate Display", () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });
  it("should display a heading", () => {
    (useEstimateState as jest.Mock).mockReturnValue({ state: {} });
    const { getByTestId } = render(<EstimateDisplay />);
    expect(getByTestId("heading")).toHaveTextContent("How Long Will It Take?");
  });

  it("should display no estimate before the first is generated", () => {
    (useEstimateState as jest.Mock).mockReturnValue({ state: {} });
    const { getByTestId } = render(<EstimateDisplay />);
    expect(getByTestId("estimate")).toHaveTextContent("No Estimate");
  });

  it("should display units modifier space when an estimate is provided", () => {
    const sampleState: EstimateState = {
      latestEstimate: {
        units: "1",
        modifier: "lazy dog dangling",
        value: "afternoon",
        id: ""
      },
      previousEstimates: []
    };
    (useEstimateState as jest.Mock).mockReturnValue({ state: sampleState });
    const { getByTestId } = render(<EstimateDisplay />);
    expect(getByTestId("estimate")).toHaveTextContent(
      "1 lazy dog dangling afternoon"
    );
  });
});
