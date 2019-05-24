import React from "react";
import { useEstimateState } from "./EstimateStateProvider";
import { Estimate } from "./EstimateState";
const EstimateHistory = () => {
  const { state } = useEstimateState();
  return (
    <ul>
      {state.previousEstimates.map(estimate => (
        <li data-testid="history-estimate" key={estimate.id}>
          {estimate.units} {estimate.modifier} {estimate.value}
        </li>
      ))}
    </ul>
  );
};

export { EstimateHistory };
