import * as apiModel from "./api";
import * as vm from "./account.vm";

export const mapAccountFromVmToApi = (
  account: vm.Account
): apiModel.Account => ({
  id: account.id,
  type: account.type,
  name: account.name,
});

export const mapAccountFromApiToVm = (
  account: apiModel.Account
): vm.Account => ({
  id: account.id,
  type: account.type,
  name: account.name,
});
