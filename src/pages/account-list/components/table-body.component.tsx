import React from "react";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { Lookup, createEmptyLookup } from "@/common/models";
import { appRoutes } from "@/core/router";
import * as viewModel from "../account-list.vm";
import classes from "./table-body.module.css";
import { selectOptions, labels } from "../account-list.constants";

interface Props {
  account: viewModel.Account;
}

export const TableBody: React.FunctionComponent<Props> = (props) => {
  const { account } = props;
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = React.useState<Lookup>(
    createEmptyLookup()
  );

  const handleSelectedOptionChange = (selectedOption: Lookup): void => {
    if (selectedOption.name === labels.transferName) {
      navigate(
        generatePath(appRoutes.trasnferWithId, {
          id: selectedOption.id,
        })
      );
    } else if (selectedOption.name === labels.movementsName) {
      navigate(
        generatePath(appRoutes.movements, {
          id: selectedOption.id,
        })
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption({
      id: account.id,
      name: e.target.value,
    });
  };

  React.useEffect(() => {
    handleSelectedOptionChange(selectedOption);
  }, [selectedOption]);

  return (
    <div className={classes.bodyTable} key={account.id}>
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
      <span className={classes.selectContainer}>
        <select className={classes.select} onChange={handleChange}>
          {selectOptions.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};
