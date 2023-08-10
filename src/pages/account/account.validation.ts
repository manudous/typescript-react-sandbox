import * as vm from "./account.vm";

export const validateForm = (account: vm.AccountErrors): vm.AccountErrors => {
  let errors: vm.AccountErrors = vm.createEmptyErrors();

  if (!account.type) {
    errors = { ...errors, type: "El tipo de cuenta es requerido" };
  }

  if (!account.name.trim()) {
    errors = { ...errors, name: "El alias es requerido" };
  }

  return errors;
};
