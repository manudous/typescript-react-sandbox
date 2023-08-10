import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppLayout } from "../../layouts";
import { Select } from "../../common-app/components";
import { Lookup, createEmptyLookup } from "../../common/models";
import { appRoutes } from "../../core/router";
import {
  mapAccountFromApiToVm,
  mapAccountListFromApiToVm,
  mapTransferFromVmToApi,
} from "./transfer.mappers";
import { validateForm } from "./transfer.validations";
import * as api from "./api";
import * as vm from "./transfer.vm";
import classes from "./transfer.module.css";

export const Transfer: React.FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [transfer, setTransfer] = React.useState<vm.Transfer>(
    vm.createEmptyTransfer()
  );

  const [accounts, setAccounts] = React.useState<Lookup[]>([]);

  const [selectedCurrentAccount, setSelectedCurrentAccount] =
    React.useState<Lookup>(createEmptyLookup());

  const [selectedDestinationAccount, setSelectDestinationAccount] =
    React.useState<Lookup>(createEmptyLookup());

  const [errors, setErrors] = React.useState<vm.Transfer>(
    vm.createEmptyTransfer()
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
        // console.log("es valido el formulario");
        const transferModel = mapTransferFromVmToApi(transfer);
        console.log(transferModel);
        await api.saveTransfer(transferModel);
        navigate(appRoutes.accountList);
      } catch (error) {
        throw new Error("Error al guardar la transferencia");
      }
    }
  };

  const loadAccounts = async () => {
    try {
      const accountList = await api.getAccountList();
      const accountListVm = mapAccountListFromApiToVm(accountList);
      setAccounts(accountListVm);
    } catch (error) {
      throw new Error("Error loading accounts");
    }
  };

  const loadAccountById = async (id: string) => {
    try {
      const account = await api.getAccountById(id);
      const accountVm = mapAccountFromApiToVm(account);
      setSelectedCurrentAccount(accountVm);
    } catch (error) {
      throw new Error("Error loading account");
    }
  };

  React.useEffect(() => {
    loadAccounts();
  }, []);

  React.useEffect(() => {
    if (id) {
      loadAccountById(id);
    }
  }, [id]);

  React.useEffect(() => {
    if (selectedCurrentAccount.id) {
      setTransfer({
        ...transfer,
        accountId: selectedCurrentAccount.id,
      });
    }
  }, [selectedCurrentAccount]);

  React.useEffect(() => {
    if (selectedDestinationAccount.id) {
      setTransfer({
        ...transfer,
        ibanId: selectedDestinationAccount.id,
      });
    }
  }, [selectedDestinationAccount]);

  return (
    <AppLayout>
      <section>
        <div className={classes.container}>
          <h1 className={classes.title}>Transferencias Nacionales</h1>
          <form onSubmit={handleSubmit}>
            <div className={classes.formContainer}>
              <div>
                <label>Selecciones cuenta de origen (IBAN):</label>
                <Select
                  value={selectedCurrentAccount}
                  onChange={setSelectedCurrentAccount}
                  optionList={accounts}
                  defaultValue="Seleccione una cuenta"
                  className={classes.select}
                />
                <p className={classes.error}>{errors.accountId}</p>
              </div>
              <div>
                <label>Ingrese el IBAN de destino:</label>
                <Select
                  value={selectedDestinationAccount}
                  onChange={setSelectDestinationAccount}
                  optionList={accounts}
                  defaultValue="Seleccione una cuenta"
                  className={classes.select}
                />
                <p className={classes.error}>{errors.accountId}</p>
              </div>
              <div>
                <label>Beneficiario:</label>
                <input
                  className={classes.large}
                  onChange={(e) =>
                    setTransfer({ ...transfer, name: e.target.value })
                  }
                />
                <p className={classes.error}>{errors.name}</p>
              </div>
              <div>
                <label>
                  Importe <span className={classes.bold}>(EUR)</span>:
                </label>
                <input
                  className={classes.small}
                  type="number"
                  onChange={(e) =>
                    setTransfer({ ...transfer, amount: e.target.value })
                  }
                />
                <p className={classes.error}>{errors.amount}</p>
              </div>
              <div>
                <label>Concepto:</label>
                <input
                  className={classes.large}
                  type="text"
                  onChange={(e) =>
                    setTransfer({ ...transfer, concept: e.target.value })
                  }
                />
                <p className={classes.error}>{errors.concept}</p>
              </div>
              <div>
                <label>Observaciones:</label>
                <input
                  className={classes.large}
                  type="text"
                  onChange={(e) =>
                    setTransfer({ ...transfer, notes: e.target.value })
                  }
                />
                <p className={classes.error}>{errors.notes}</p>
              </div>
            </div>
            <div className={classes.formContainer}>
              <p>
                Para que la transferencia se realice en otra fecha diferente a
                la de hoy, por favor, indíquenos la fecha de ejecución:
              </p>
              <div className={classes.date}>
                <label>Fecha de ejecución:</label>
                <input
                  className="fecha-input small"
                  type="number"
                  placeholder="dd"
                  onChange={(e) =>
                    setTransfer({ ...transfer, date: e.target.value })
                  }
                />
                <p>/</p>
                <input
                  className="fecha-input small"
                  type="number"
                  placeholder="mm"
                  onChange={(e) =>
                    setTransfer({ ...transfer, month: e.target.value })
                  }
                />
                <p>/</p>
                <input
                  className="fecha-input medium"
                  type="number"
                  placeholder="yyyy"
                  onChange={(e) =>
                    setTransfer({ ...transfer, year: e.target.value })
                  }
                />
                <p className={classes.error}>
                  {errors.date || errors.month || errors.year}
                </p>
              </div>
            </div>
            <div className={classes.formContainer}>
              <p>
                Escriba una dirección de email para dar aviso al beneficiario:
              </p>
              <div>
                <label>Email del beneficiario:</label>
                <input
                  className={classes.large}
                  type="email"
                  onChange={(e) =>
                    setTransfer({ ...transfer, email: e.target.value })
                  }
                />
                <p className={classes.error}>{errors.email}</p>
              </div>
            </div>
            <button type="submit" className="btn_enviar_transferencia">
              REALIZAR LA TRANSFERENCIA
            </button>
          </form>
        </div>
      </section>
    </AppLayout>
  );
};
