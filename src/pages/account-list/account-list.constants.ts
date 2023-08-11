import { Lookup } from "@/common/models";

interface Labels {
  selectName: string;
  transferName: string;
  movementsName: string;
}

export const labels: Labels = {
  selectName: "Seleccionar",
  transferName: "Transferir",
  movementsName: "Movimientos",
};

export const selectOptions: Lookup[] = [
  { id: "", name: labels.selectName },
  { id: "1", name: labels.transferName },
  { id: "2", name: labels.movementsName },
];
