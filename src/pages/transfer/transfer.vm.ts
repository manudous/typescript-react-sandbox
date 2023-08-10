export interface Transfer {
  accountId: string;
  ibanId: string;
  name: string;
  amount: string;
  concept: string;
  notes: string;
  date: string;
  month: string;
  year: string;
  email: string;
}

export const createEmptyTransfer = (): Transfer => ({
  accountId: "",
  ibanId: "",
  name: "",
  amount: "",
  concept: "",
  notes: "",
  date: "",
  month: "",
  year: "",
  email: "",
});
