export interface Estimate {
  value: string;
  modifier: string;
  units: string;
}

export interface EstimateState {
  latestEstimate: Estimate | undefined;
  previousEstimates: Array<Estimate>;
}
// export { EstimateState, Estimate };
