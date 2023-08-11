import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "@/core/router/routes";
import { AppLayout } from "@/layouts";
import * as api from "./api";
import { AccountForm } from "./components";
import { validateForm } from "./account.validation";
import {
  mapAccountFromApiToVm,
  mapAccountFromVmToApi,
} from "./account.mappers";
import * as vm from "./account.vm";
import classes from "./account.module.css";

export const Account: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [account, setAccount] = React.useState<vm.Account>(
    vm.createEmptyAccount()
  );

  const [errors, setErrors] = React.useState<vm.AccountErrors>(
    vm.createEmptyErrors()
  );

  const loadAccount = async () => {
    try {
      if (!id) {
        throw new Error("No ID");
      }
      const apiAccount = await api.getAccount(id);
      setAccount(mapAccountFromApiToVm({ ...apiAccount, id }));
    } catch (error) {
      throw new Error("Error loading the account");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validateForm(account);
    setErrors(formErrors);

    const isValidForm = Object.values(formErrors).every(
      (error) => error === ""
    );

    if (isValidForm) {
      try {
        const accountModel = mapAccountFromVmToApi(account);
        await api.saveAccount(accountModel);
        navigate(appRoutes.accountList);
      } catch (error) {
        throw new Error("Error saving the account");
      }
    }
  };

  React.useEffect(() => {
    if (id) {
      loadAccount();
    }
  }, []);

  return (
    <AppLayout>
      <section className={classes.container}>
        <div>
          <h1 className={classes.title}>Cuenta Bancaria</h1>
        </div>
        <AccountForm
          account={account}
          errors={errors}
          setAccount={setAccount}
          onSubmit={handleSubmit}
        />
      </section>
    </AppLayout>
  );
};
