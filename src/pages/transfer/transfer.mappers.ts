import { Lookup } from "../../common/models";
import * as apiModel from "./api";
import * as vm from "./transfer.vm";

export const mapAccountFromApiToVm = (
  accountList: apiModel.Account
): Lookup => ({
  id: accountList.id,
  name: accountList.name,
});

export const mapAccountListFromApiToVm = (
  accountList: apiModel.Account[]
): Lookup[] =>
  Array.isArray(accountList)
    ? accountList.map((account) => mapAccountFromApiToVm(account))
    : [];

export const mapTransferFromVmToApi = (
  transfer: vm.Transfer
): apiModel.Transfer => ({
  accountId: transfer.accountId,
  ibanId: transfer.ibanId,
  name: transfer.name,
  amount: Number(transfer.amount),
  concept: transfer.concept,
  notes: transfer.notes,
  transaction: new Date(
    `${transfer.year}-${transfer.month}-${transfer.date}`
  ).toISOString(),
  realTransaction: new Date(
    `${transfer.year}-${transfer.month}-${transfer.date}`
  ).toISOString(),
});
