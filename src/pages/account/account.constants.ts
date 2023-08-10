import { Lookup } from "../../common/models";

export const optionTypes = {
  payroll: "Nómina",
  savings: "Ahorros",
  normal: "Normal",
};

export const selectOptions: Lookup[] = [
  { id: "1", name: optionTypes.payroll },
  { id: "2", name: optionTypes.savings },
  { id: "3", name: optionTypes.normal },
];
