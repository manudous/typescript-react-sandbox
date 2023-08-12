import * as apiModel from "./api";
import * as viewModel from "./account-list.vm";

export const mapAccountListApiToVm = (
  accountList: apiModel.Account[]
): viewModel.Account[] =>
  Array.isArray(accountList)
    ? accountList.map((account) => mapAccountApiToVm(account))
    : [];

const mapAccountApiToVm = (account: apiModel.Account): viewModel.Account => ({
  id: account.id,
  iban: account.iban,
  name: account.name,
  balance: `${account.balance} €`,
  lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
});
