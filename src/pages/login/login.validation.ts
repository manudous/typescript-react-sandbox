import * as vm from "./login.vm";

export const validateForm = (credential: vm.Credential): vm.Credential => {
  let errors: vm.Credential = vm.createEmptyCredential();

  if (!credential.user.trim()) {
    errors = { ...errors, user: "El usuario es requerido" };
  }

  if (!credential.password.trim()) {
    errors = { ...errors, password: "La contraseña es requerida" };
  }

  return errors;
};
