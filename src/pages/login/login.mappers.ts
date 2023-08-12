import * as apiModel from "./api";
import * as viewModel from "./login.vm";

export const mapCredentialFromVmToApi = (
  credential: viewModel.Credential
): apiModel.Credential => ({
  user: credential.user,
  password: credential.password,
});
