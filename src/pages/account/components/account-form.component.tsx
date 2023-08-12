import React from "react";
import * as viewModel from "../account.vm";
import classes from "./account-form.module.css";
import { selectOptions } from "../account.constants";

interface Props {
  account: viewModel.Account;
  errors: viewModel.Account;
  setAccount: (account: viewModel.Account) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AccountForm: React.FunctionComponent<Props> = (props) => {
  const { account, errors, setAccount, onSubmit } = props;

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.formContainer}>
        <div>
          <label htmlFor="type">Tipo de cuenta:</label>
          <select
            id="type"
            name="type"
            className={classes.select}
            onChange={handleFieldChange}
            value={account.type}
          >
            {selectOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          {errors.type && <p className={classes.error}>{errors.type}</p>}
        </div>
        <div>
          <label htmlFor="name">Alias:</label>
          <input
            id="name"
            name="name"
            className={classes.input}
            autoComplete="off"
            value={account.name}
            onChange={handleFieldChange}
          />
          {errors.name && <p className={classes.error}>{errors.name}</p>}
        </div>
      </div>
      <button type="submit" className={classes.button}>
        GUARDAR
      </button>
    </form>
  );
};
