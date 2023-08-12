import React from "react";
import { TableBody } from "./table-body.component";
import * as viewModel from "../account-list.vm";
import classes from "./account-list-table.module.css";

interface Props {
  accounts: viewModel.Account[];
}

export const AccountListTable: React.FunctionComponent<Props> = (props) => {
  const { accounts } = props;
  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridTable}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>IBAN</span>
          <span className={classes.headerCell}>ALIAS</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          <span className={classes.headerCell}>ÚLTIMA OPERACIÓN</span>
          <span className={classes.headerCell}>OPERACIÓN</span>
        </div>
        {accounts.map((account) => (
          <TableBody account={account} />
        ))}
      </div>
    </div>
  );
};
