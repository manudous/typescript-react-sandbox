import { Lookup } from "@/common/models";

interface Labels {
  selectName: string;
  checkingAccount: string;
  savingsAccount: string;
  payrollAccount: string;
}

export const labels: Labels = {
  selectName: "Seleccionar",
  checkingAccount: "Cuenta Corriente",
  savingsAccount: "Cuenta de Ahorro",
  payrollAccount: "Cuenta de Nómina",
};

export const selectOptions: Lookup[] = [
  { id: "", name: labels.selectName },
  { id: "1", name: labels.checkingAccount },
  { id: "2", name: labels.savingsAccount },
  { id: "3", name: labels.payrollAccount },
];
