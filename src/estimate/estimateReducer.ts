import { EstimateState } from "./EstimateState";
import { EstimateAction, NewEstimateAction, types } from "./estimateActions";

const reducer = (
  state: EstimateState,
  action: EstimateAction
): EstimateState => {
  switch (action.type) {
    case types.NEW_ESTIMATE:
      const previousEstimates = [...state.previousEstimates];
      if (state.latestEstimate) {
        previousEstimates.push(state.latestEstimate);
      }
      return {
        ...state,
        latestEstimate: (<NewEstimateAction>action).value,
        previousEstimates
      };
  }
  return state;
};

export { reducer };
