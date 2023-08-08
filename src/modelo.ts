export interface Miembro {
  avatar_url: string;
  id: string;
  login: string;
}

export const crearMiembroVacio = (): Miembro => ({
  id: "",
  login: "",
  avatar_url: "",
});
