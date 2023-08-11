import { Lookup } from "../../common/models";
import * as apiModel from "./api";
import * as vm from "./transfer.vm";

const mapAccountFromApiToVm = (accountList: apiModel.Account): Lookup => ({
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
  iban: transfer.iban,
  name: transfer.name,
  amount: Number(transfer.amount),
  concept: transfer.concept,
  notes: transfer.notes,
  transferDate: new Date().toISOString(),
  realTransferDate: transfer.realDateTransfer
    ? new Date(transfer.realDateTransfer).toISOString()
    : new Date().toISOString(),
});
