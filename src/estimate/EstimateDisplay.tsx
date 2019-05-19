import React from "react";
import { useEstimateState } from "./EstimateStateProvider";
import { Estimate } from "./EstimateState";
export const EstimateDisplay = () => {
  const { state } = useEstimateState();
  return (
    <div>
      <h1 data-testid="heading">Estimate</h1>
      <EstimateText estimate={undefined} />
      {/* <p>{JSON.stringify(state)}</p> */}
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
