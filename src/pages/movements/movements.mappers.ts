import * as apiModel from "./api";
import * as viewModel from "./movements.vm";

export const mapMovementListApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.Movement[] =>
  Array.isArray(movementList)
    ? movementList.map((movement) => mapMovementApiToVm(movement))
    : [];

const mapMovementApiToVm = (movement: apiModel.Movement): viewModel.Movement => ({
  id: movement.id,
  description: movement.description,
  amount: `${movement.amount} €`,
  balance: `${movement.balance} €`,
  transaction: new Date(movement.transaction).toLocaleDateString(),
  realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
});

export const mapAccountApiToVm = (account: apiModel.Account): viewModel.Account => ({
  id: account.id,
  name: account.name,
  iban: account.iban,
  balance: `${account.balance} €`,
});
