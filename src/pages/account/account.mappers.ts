import * as apiModel from "./api";
import * as viewModel from "./account.vm";

export const mapAccountFromVmToApi = (
  account: viewModel.Account
): apiModel.Account => ({
  id: account.id,
  type: account.type,
  name: account.name,
});

export const mapAccountFromApiToVm = (
  account: apiModel.Account
): viewModel.Account => ({
  id: account.id,
  type: account.type,
  name: account.name,
});
