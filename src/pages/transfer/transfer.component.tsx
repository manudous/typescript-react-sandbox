import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { Lookup } from "@/common/models";
import { AppLayout } from "@/layouts";
import {
  mapAccountListFromApiToVm,
  mapTransferFromVmToApi,
} from "./transfer.mappers";
import { validateForm } from "./transfer.validations";
import * as api from "./api";
import { TransferForm } from "./components";
import * as viewModel from "./transfer.vm";
import classes from "./transfer.module.css";

export const Transfer: React.FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [transfer, setTransfer] = React.useState<viewModel.Transfer>(
    viewModel.createEmptyTransfer()
  );

  const [accounts, setAccounts] = React.useState<Lookup[]>([]);

  const [errors, setErrors] = React.useState<viewModel.Transfer>(
    viewModel.createEmptyTransfer()
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validateForm(transfer);
    setErrors(formErrors);

    const isValidForm = Object.values(formErrors).every(
      (error) => error === ""
    );

    if (isValidForm) {
      try {
        const transferModel = mapTransferFromVmToApi(transfer);
        await api.saveTransfer(transferModel);
        navigate(appRoutes.accountList);
      } catch (error) {
        throw new Error("Error al guardar la transferencia");
      }
    }
  };

  const loadInitialData = async () => {
    try {
      const accountList = await api.getAccountList();
      const accountListVm = mapAccountListFromApiToVm(accountList);
      setAccounts(accountListVm);
      if (id) {
        setTransfer({
          ...transfer,
          accountId: id,
        });
      }
    } catch (error) {
      throw new Error("Error loading initial data");
    }
  };

  React.useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <AppLayout>
      <section>
        <div className={classes.container}>
          <h1 className={classes.title}>Transferencias Nacionales</h1>
          <TransferForm
            accounts={accounts}
            transfer={transfer}
            errors={errors}
            setTransfer={setTransfer}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
    </AppLayout>
  );
};
