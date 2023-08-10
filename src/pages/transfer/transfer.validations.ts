import * as vm from "./transfer.vm";

export const validateForm = (account: vm.Transfer): vm.Transfer => {
  let errors: vm.Transfer = vm.createEmptyTransfer();

  if (!account.accountId) {
    errors = { ...errors, accountId: "La cuenta es requerida" };
  }

  if (!account.ibanId) {
    errors = { ...errors, ibanId: "El IBAN es requerido" };
  }

  if (!account.name.trim()) {
    errors = { ...errors, name: "El alias es requerido" };
  }

  if (!account.amount.trim()) {
    errors = { ...errors, amount: "El importe es requerido" };
  }

  if (!account.concept.trim()) {
    errors = { ...errors, concept: "El concepto es requerido" };
  }

  if (!account.notes.trim()) {
    errors = { ...errors, notes: "Las notas son requeridas" };
  }

  if (!account.date.trim()) {
    errors = { ...errors, date: "La fecha es requerida" };
  }

  if (!account.month.trim()) {
    errors = { ...errors, month: "El mes es requerido" };
  }

  if (!account.year.trim()) {
    errors = { ...errors, year: "El año es requerido" };
  }

  if (!account.email.trim()) {
    errors = { ...errors, email: "El email es requerido" };
  }

  return errors;
};
