export interface Credential {
  user: string;
  password: string;
}

export const createEmptyCredential = (): Credential => ({
  user: "",
  password: "",
});
