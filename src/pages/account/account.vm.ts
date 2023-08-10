export interface Account {
  id?: string;
  type: string;
  name: string;
}

export const createEmptyAccount = (): Account => ({
  id: "",
  type: "",
  name: "",
});

export interface AccountErrors {
  type: string;
  name: string;
}

export const createEmptyErrors = (): AccountErrors => ({
  type: "",
  name: "",
});
