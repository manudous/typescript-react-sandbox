import * as apiModel from "./api";
import * as vm from "./login.vm";

export const mapCredentialFromVmToApi = (
  credential: vm.Credential
): apiModel.Credential => ({
  user: credential.user,
  password: credential.password,
});
