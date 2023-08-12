import * as viewModel from "./login.vm";

export const validateForm = (credential: viewModel.Credential): viewModel.Credential => {
  let errors: viewModel.Credential = viewModel.createEmptyCredential();

  if (!credential.user.trim()) {
    errors = { ...errors, user: "El usuario es requerido" };
  }

  if (!credential.password.trim()) {
    errors = { ...errors, password: "La contraseña es requerida" };
  }

  return errors;
};
