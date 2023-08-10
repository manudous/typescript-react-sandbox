import { Lookup } from "../../common/models";

export const optionTypes = {
  accounts: "Mis Cuentas",
  transfers: "Transferencias",
  movements: "Movimientos",
};

export const selectOptions: Lookup[] = [
  { id: optionTypes.accounts, name: optionTypes.accounts },
  { id: optionTypes.transfers, name: optionTypes.transfers },
  { id: optionTypes.movements, name: optionTypes.movements },
];
