import { EstimateState } from "./EstimateState";
import { EstimateAction, NewEstimateAction, types } from "./estimateActions";

const reducer = (
  state: EstimateState,
  action: EstimateAction
): EstimateState => {
  switch (action.type) {
    case types.NEW_ESTIMATE:
      let previousEstimates = [];
      if (state.latestEstimate) {
        previousEstimates = [state.latestEstimate, ...state.previousEstimates];
      } else {
        previousEstimates = [...state.previousEstimates];
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
