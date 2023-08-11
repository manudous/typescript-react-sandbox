import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppLayout } from "../../layouts";
import { Lookup } from "../../common/models";
import { appRoutes } from "../../core/router";
import {
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
          <form onSubmit={handleSubmit}>
            <div className={classes.formContainer}>
              <div>
                <label>Selecciones cuenta de origen (IBAN):</label>
                <select
                  className={classes.select}
                  onChange={(e) => {
                    setTransfer({ ...transfer, accountId: e.target.value });
                  }}
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
                  className={classes.large}
                  onChange={(e) =>
                    setTransfer({ ...transfer, iban: e.target.value })
                  }
                />
                <p className={classes.error}>{errors.iban}</p>
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
                  type="date"
                  onChange={(e) =>
                    setTransfer({
                      ...transfer,
                      realDateTransfer: e.target.value,
                    })
                  }
                />
                <p className={classes.error}>{errors.realDateTransfer}</p>
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
