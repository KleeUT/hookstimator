import React, { useContext, useReducer, createContext } from "react";
import { EstimateState } from "./EstimateState";
import { EstimateAction } from "./estimateActions";
import { reducer } from "./estimateReducer";
const GlobalStateContext = createContext({} as {
  state: EstimateState;
  dispatch: React.Dispatch<EstimateAction>;
});

const CreateEstimateStateProvider = ({
  reducer,
  initialState,
  children
}: {
  reducer: React.Reducer<EstimateState, EstimateAction>;
  initialState: EstimateState;
  children: any;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useEstimateState = () => useContext(GlobalStateContext);
const EstimateStateProvider = ({ children }: { children: any }) => {
  return CreateEstimateStateProvider({
    reducer,
    initialState: { latestEstimate: undefined, previousEstimates: [] },
    children
  });
};
export { EstimateStateProvider, useEstimateState };
