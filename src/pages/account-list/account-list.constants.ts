import { Lookup } from "@/common/models";

export const actionLabels: { [name: string]: string } = {
  selectName: "Seleccionar",
  transferName: "Transferir",
  movementsName: "Movimientos",
};

export const selectOptions: Lookup[] = [
  { id: "", name: actionLabels.selectName },
  { id: "1", name: actionLabels.transferName },
  { id: "2", name: actionLabels.movementsName },
];
