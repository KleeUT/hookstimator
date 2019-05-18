import React from "react";
import { useEstimateState } from "./EstimateStateProvider";
export const EstimateDisplay = () => {
  const { state, dispatch } = useEstimateState();
  return <div>{JSON.stringify(state)}</div>;
};
