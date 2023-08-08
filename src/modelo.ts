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

export interface Credencial {
  usuario: string;
  password: string;
}

export const crearCredencialVacia = (): Credencial => ({
  usuario: "",
  password: "",
});
