import * as apiModel from "./api";
import * as vm from "./movements.vm";

export const mapMovementListApiToVm = (
  movementList: apiModel.Movement[]
): vm.Movement[] =>
  Array.isArray(movementList)
    ? movementList.map((movement) => mapMovementApiToVm(movement))
    : [];

const mapMovementApiToVm = (movement: apiModel.Movement): vm.Movement => ({
  id: movement.id,
  description: movement.description,
  amount: `${movement.amount} €`,
  balance: `${movement.balance} €`,
  transaction: new Date(movement.transaction).toLocaleDateString(),
  realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
});

export const mapAccountApiToVm = (account: apiModel.Account): vm.Account => ({
  id: account.id,
  name: account.name,
  iban: account.iban,
  balance: `${account.balance} €`,
});
