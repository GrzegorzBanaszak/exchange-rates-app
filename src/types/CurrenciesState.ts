import { Rates } from "./Rates";
export interface CurrenciesState {
  effectiveDate: string;
  rates: Rates[];
  reducedRates: Rates[];
  limit: number[];
  selectedRates: Rates[];
}
