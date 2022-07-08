import { Rates } from "./Rates";
export interface CurrenciesState {
  effectiveDate: string;
  isLoading: boolean;
  rates: Rates[];
  reducedRates: Rates[];
  limit: number[];
  selectedRates: Rates[];
}
