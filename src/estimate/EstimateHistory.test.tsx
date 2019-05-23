import React from "react";
import { EstimateHistory } from "./EstimateHistory";
import { useEstimateState } from "./EstimateStateProvider";
import { EstimateState } from "./EstimateState";
import { render, cleanup } from "react-testing-library";
jest.mock("./EstimateStateProvider", () => ({
  useEstimateState: jest.fn()
}));

function givenStateAndDispatch(state: EstimateState | undefined) {
  (useEstimateState as jest.Mock).mockReturnValue({ state });
}

describe("Estimate History Display", () => {
  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });
  it("Should not show history if there isnt one in state", () => {
    givenStateAndDispatch({ previousEstimates: [], latestEstimate: undefined });
    const { findAllByTestId } = render(<EstimateHistory />);
    const elements = findAllByTestId("history-estimate");
    elements.then(e => {
      expect(e).toBeEmpty();
    });
  });

  it("Should display one esimtate if there is one in history", done => {
    givenStateAndDispatch({
      latestEstimate: undefined,
      previousEstimates: [
        { units: "red", modifier: "fish", value: "blue fish" }
      ]
    });
    const { findAllByTestId } = render(<EstimateHistory />);
    const elements = findAllByTestId("history-estimate");
    elements.then(e => {
      expect(e.length).toBe(1);
      expect(e[0].innerHTML).toEqual("red fish blue fish");
      done();
    });
  });
  it("Should display multiple esimtates if there is more than one in history", done => {
    givenStateAndDispatch({
      latestEstimate: undefined,
      previousEstimates: [
        { units: "red", modifier: "fish", value: "blue fish" },
        { units: "go", modifier: "dog", value: "go" }
      ]
    });
    const { findAllByTestId } = render(<EstimateHistory />);
    const elements = findAllByTestId("history-estimate");
    elements.then(e => {
      expect(e.length).toBe(2);
      expect(e[0].innerHTML).toEqual("red fish blue fish");
      expect(e[1].innerHTML).toEqual("go dog go");
      done();
    });
  });
});
