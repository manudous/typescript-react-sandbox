import * as viewModel from "./transfer.vm";

export const validateForm = (account: viewModel.Transfer): viewModel.Transfer => {
  let errors: viewModel.Transfer = viewModel.createEmptyTransfer();

  if (!account.accountId) {
    errors = { ...errors, accountId: "La cuenta es requerida" };
  }

  if (!account.iban.trim()) {
    errors = { ...errors, iban: "El IBAN es requerido" };
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

  if (!account.email.trim()) {
    errors = { ...errors, email: "El email es requerido" };
  }

  return errors;
};
