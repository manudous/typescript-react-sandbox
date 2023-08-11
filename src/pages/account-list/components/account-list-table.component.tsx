import React from "react";
import { Link, generatePath } from "react-router-dom";
import { Lookup } from "@/common/models";
import { appRoutes } from "@/core/router";
import { Account } from "../account-list.vm";
import classes from "./account-list-table.module.css";

interface Props {
  accounts: Account[];
  setSelectedOption: (value: Lookup) => void;
  selectedOption: Lookup;
}

export const AccountListTable: React.FunctionComponent<Props> = (props) => {
  const { accounts, setSelectedOption } = props;
  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridTable}>
        <div className={classes.gridTableRow}>
          <span className={classes.headerCell}>IBAN</span>
          <span className={classes.headerCell}>ALIAS</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          <span className={classes.headerCell}>ÚLTIMA OPERACIÓN</span>
          <span className={classes.headerCell}>OPERACIÓN</span>
        </div>

        {accounts.map((account) => (
          <div className={classes.gridTableRow} key={account.id}>
            <span className={`${classes.dataCell} ${classes.bold}`}>
              <Link
                to={generatePath(appRoutes.editAccount, {
                  id: account.id,
                })}
              >
                {account.iban}
              </Link>
            </span>
            <span className={classes.dataCell}>{account.name}</span>
            <span className={`${classes.dataCell} ${classes.alignRight} `}>
              {account.balance}
            </span>
            <span className={`${classes.dataCell} ${classes.alignRight} `}>
              {account.lastTransaction}
            </span>
            <span className={`${classes.select} `}>
              <select
                className={classes.select}
                onChange={(e) =>
                  setSelectedOption({
                    id: account.id,
                    name: e.target.value,
                  })
                }
              >
                <option value="Seleccionar">Seleccionar</option>
                <option value="1">Transferir</option>
                <option value="2">Movimientos</option>
              </select>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
