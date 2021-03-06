import { Estimate } from "./EstimateState";
import { randomInt } from "./randomProvider";

const allUnits = ["1", "2", "3", "5", "8", "Too many", "Not enough"];
const randomUnitValue = () => {
  return allUnits[randomInt(allUnits.length)];
};

const allModifieres = [
  "long",
  "short",
  "big",
  "tiny",
  "quick",
  "testing",
  "unicorn",
  "uncomforable"
];
const randomModifierValue = () => {
  return allModifieres[randomInt(allModifieres.length)];
};

const allDurations = ["hours", "days", "weeks", "months"];
const randomDurationValue = () => {
  return allDurations[randomInt(allDurations.length)];
};

export interface EstimateAction {
  type: string;
}
const types = { NEW_ESTIMATE: "ESTIMATE/NEW" };

export interface NewEstimateAction extends EstimateAction {
  value: Estimate;
}

const newEstimateAction = (): NewEstimateAction => {
  const units = randomUnitValue();
  const modifier = randomModifierValue();
  const value = randomDurationValue();
  return {
    type: types.NEW_ESTIMATE,
    value: {
      units,
      modifier,
      value,
      id: `${units}${modifier}${value}${Math.random()}`
    }
  };
};

export { types, newEstimateAction };
