import React from "react";
import { useEstimateState } from "./EstimateStateProvider";
const EstimateHistory = () => {
  const { state } = useEstimateState();
  return (
    <ol>
      {state.previousEstimates.map(estimate => (
        <li
          data-testid="history-estimate"
          key={`${estimate.units}${estimate.modifier}${estimate.value}`}
        >
          {estimate.units} {estimate.modifier} {estimate.value}
        </li>
      ))}
    </ol>
  );
};

export { EstimateHistory };
