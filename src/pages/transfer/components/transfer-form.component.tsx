import React from "react";
import { Lookup } from "@/common/models";
import * as vm from "../transfer.vm";
import classes from "./transfer-form.module.css";

interface Props {
  accounts: Lookup[];
  transfer: vm.Transfer;
  errors: vm.Transfer;
  setTransfer: (transfer: vm.Transfer) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const TransferForm: React.FunctionComponent<Props> = (props) => {
  const { accounts, transfer, errors, setTransfer, onSubmit } = props;

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.formContainer}>
        <div>
          <label>Selecciones cuenta de origen (IBAN):</label>
          <select
            name="accountId"
            className={classes.select}
            onChange={handleFieldChange}
            value={transfer.accountId}
          >
            <option value="">Seleccione una cuenta</option>
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>
          <p className={classes.error}>{errors.accountId}</p>
        </div>
        <div>
          <label>Ingrese el IBAN de destino:</label>
          <input
            name="iban"
            className={classes.large}
            onChange={handleFieldChange}
          />
          <p className={classes.error}>{errors.iban}</p>
        </div>
        <div>
          <label>Beneficiario:</label>
          <input
            name="name"
            className={classes.large}
            onChange={handleFieldChange}
          />
          <p className={classes.error}>{errors.name}</p>
        </div>
        <div>
          <label>
            Importe <span className={classes.bold}>(EUR)</span>:
          </label>
          <input
            name="amount"
            type="number"
            className={classes.small}
            onChange={handleFieldChange}
          />
          <p className={classes.error}>{errors.amount}</p>
        </div>
        <div>
          <label>Concepto:</label>
          <input
            name="concept"
            className={classes.large}
            onChange={handleFieldChange}
          />
          <p className={classes.error}>{errors.concept}</p>
        </div>
        <div>
          <label>Observaciones:</label>
          <input
            name="notes"
            className={classes.large}
            onChange={handleFieldChange}
          />
          <p className={classes.error}>{errors.notes}</p>
        </div>
      </div>
      <div className={classes.formContainer}>
        <p>
          Para que la transferencia se realice en otra fecha diferente a la de
          hoy, por favor, indíquenos la fecha de ejecución:
        </p>
        <div className={classes.date}>
          <label>Fecha de ejecución:</label>
          <input
            name="realDateTransfer"
            type="date"
            onChange={handleFieldChange}
          />
          <p className={classes.error}>{errors.realDateTransfer}</p>
        </div>
      </div>
      <div className={classes.formContainer}>
        <p>Escriba una dirección de email para dar aviso al beneficiario:</p>
        <div>
          <label>Email del beneficiario:</label>
          <input
            name="email"
            type="email"
            className={classes.large}
            onChange={handleFieldChange}
          />
          <p className={classes.error}>{errors.email}</p>
        </div>
      </div>
      <button type="submit" className={classes.button}>
        REALIZAR LA TRANSFERENCIA
      </button>
    </form>
  );
};
