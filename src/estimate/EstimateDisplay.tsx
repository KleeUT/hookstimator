import React from "react";
import { useEstimateState } from "./EstimateStateProvider";
export const EstimateDisplay = () => {
  const { state } = useEstimateState();
  return <div>{JSON.stringify(state)}</div>;
};
