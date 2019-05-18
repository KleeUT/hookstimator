import { Estimate } from "./EstimateState";

export interface EstimateAction {
  type: string;
}
const types = { NEW_ESTIMATE: "ESTIMATE/NEW" };

interface NewEstimateAction extends EstimateAction {
  value: Estimate;
}

const newEstimateAction = (): NewEstimateAction => {
  return {
    type: types.NEW_ESTIMATE,
    value: {
      units: "aa",
      modifier: "",
      value: ""
    }
  };
};

export { types, newEstimateAction };
