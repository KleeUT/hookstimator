import React from "react";
import { useEstimateState } from "./EstimateStateProvider";
import { Estimate } from "./EstimateState";
export const EstimateDisplay = () => {
  const { state } = useEstimateState();
  return (
    <div>
      <h1 data-testid="heading">How Long Will It Take?</h1>
      <EstimateText estimate={state.latestEstimate} />
    </div>
  );
};

const EstimateText = ({ estimate }: { estimate: Estimate | undefined }) =>
  estimate ? (
    <p data-testid="estimate">
      {estimate.units} {estimate.modifier} {estimate.value}
    </p>
  ) : (
    <p data-testid="estimate">No Estimate</p>
  );
