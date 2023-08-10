export interface Movement {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: string;
  realTransaction: string;
}

export interface Account {
  id: string;
  name: string;
  iban: string;
  balance: string;
}

export const createEmptyAccount = (): Account => ({
  id: "",
  name: "",
  iban: "",
  balance: "",
});
