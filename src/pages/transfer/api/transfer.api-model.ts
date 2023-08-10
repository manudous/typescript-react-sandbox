export interface Account {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: number;
  lastTransaction: string;
}

export interface Transfer {
  accountId: string;
  ibanId: string;
  name: string;
  amount: number;
  concept: string;
  notes: string;
  transaction: string;
  realTransaction: string;
}
