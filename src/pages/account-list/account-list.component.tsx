import React from "react";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { Lookup, createEmptyLookup } from "../../common/models";
import { appRoutes } from "../../core/router";
import { AppLayout } from "../../layouts";
import { mapAccountListApiToVm } from "./account-list.mappers";
import * as api from "./api";
import * as vm from "./account-list.vm";
import { AccountListTable } from "./components";
import classes from "./account-list.module.css";

export const AccountList: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = React.useState<vm.Account[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<Lookup>(
    createEmptyLookup()
  );

  const loadAccounts = async () => {
    try {
      const accountList = await api.getAccountList();
      const accountListVm = mapAccountListApiToVm(accountList);
      setAccounts(accountListVm);
    } catch (error) {
      throw new Error("Error loading accounts");
    }
  };

  const handleSelectedOptionChange = (selectedOption: Lookup): void => {
    if (selectedOption.name === "1") {
      navigate(
        generatePath(appRoutes.trasnferWithId, {
          id: selectedOption.id,
        })
      );
    } else if (selectedOption.name === "2") {
      navigate(
        generatePath(appRoutes.movements, {
          id: selectedOption.id,
        })
      );
      console.log(selectedOption);
    }
  };

  React.useEffect(() => {
    loadAccounts();
  }, []);

  React.useEffect(() => {
    handleSelectedOptionChange(selectedOption);
  }, [selectedOption]);

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
        <AccountListTable
          accounts={accounts}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
    </AppLayout>
  );
};
