import {DtoSpent} from "./DtoSpent";
import {DtoIncome} from "./DtoIncome";

export interface DtoTableResponse {
  spent:DtoSpent[];
  income:DtoIncome[];
}
