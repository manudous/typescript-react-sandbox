import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { AppLayout } from "@/layouts";
import { mapAccountListApiToVm } from "./account-list.mappers";
import { AccountListTable } from "./components";
import * as api from "./api";
import * as viewModel from "./account-list.vm";
import classes from "./account-list.module.css";

export const AccountList: React.FunctionComponent = () => {
  const [accounts, setAccounts] = React.useState<viewModel.Account[]>([]);

  const loadAccounts = async () => {
    try {
      const accountList = await api.getAccountList();
      const accountListVm = mapAccountListApiToVm(accountList);
      setAccounts(accountListVm);
    } catch (error) {
      throw new Error("Error loading accounts");
    }
  };

  React.useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.header}>
            <h1>Mis cuentas</h1>
            <Link to={appRoutes.createAccount} className={classes.button}>
              AGREGAR NUEVA CUENTA
            </Link>
          </div>
        </div>
        <AccountListTable accounts={accounts} />
      </div>
    </AppLayout>
  );
};
