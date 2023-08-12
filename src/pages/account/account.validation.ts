import * as viewModel from "./account.vm";

export const validateForm = (account: viewModel.AccountErrors): viewModel.AccountErrors => {
  let errors: viewModel.AccountErrors = viewModel.createEmptyErrors();

  if (!account.type) {
    errors = { ...errors, type: "El tipo de cuenta es requerido" };
  }

  if (!account.name.trim()) {
    errors = { ...errors, name: "El alias es requerido" };
  }

  return errors;
};
