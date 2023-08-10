import * as api from "./api";
import * as vm from "./account-list.vm";

export const mapAccountListApiToVm = (
  accountList: api.Account[]
): vm.Account[] =>
  Array.isArray(accountList)
    ? accountList.map((account) => mapAccountApiToVm(account))
    : [];

const mapAccountApiToVm = (account: api.Account): vm.Account => ({
  id: account.id,
  iban: account.iban,
  name: account.name,
  balance: `${account.balance} €`,
  lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
});
