import React from "react";
import { Select } from "../../../common-app/components";
import { Account } from "../account-list.vm";
import { Link, generatePath } from "react-router-dom";
import { appRoutes } from "../../../core/router";
import { Lookup } from "../../../common/models";
import { selectOptions } from "../account-list.constants";
import classes from "./account-list-grid.module.css";

interface Props {
  accounts: Account[];
  setSelectedOption: (value: Lookup) => void;
}

export const AccountListGrid: React.FunctionComponent<Props> = (props) => {
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
            <span className={`${classes.dataCell} ${classes.bold} `}>
              {account.name}
            </span>
            <span className={`${classes.dataCell} ${classes.alignRight} `}>
              {account.balance}
            </span>
            <span className={`${classes.dataCell} ${classes.alignRight} `}>
              {account.lastTransaction}
            </span>
            <span className={`${classes.select} `}>
              <Select
                value={account.id}
                onChange={setSelectedOption}
                optionList={selectOptions}
                defaultValue="Seleccionar"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
