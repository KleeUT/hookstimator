import React from "react";
import { newEstimateAction } from "./estimateActions";
import { useEstimateState } from "./EstimateStateProvider";
export const EstimateButton = () => {
  const { dispatch } = useEstimateState();
  return (
    <button onClick={() => dispatch(newEstimateAction())}>
      Lets have a new Estimate
    </button>
  );
};
