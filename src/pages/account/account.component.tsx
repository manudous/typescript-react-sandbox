import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../core/router/routes";
import { AppLayout } from "../../layouts";
import { validateForm } from "./account.validation";
import {
  mapAccountFromApiToVm,
  mapAccountFromVmToApi,
} from "./account.mappers";
import * as api from "./api";
import * as vm from "./account.vm";
import classes from "./account.module.css";
import { Select } from "../../common-app/components";
import { selectOptions } from "./account.constants";
import { Lookup, createEmptyLookup } from "../../common/models";

export const Account: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [account, setAccount] = React.useState<vm.Account>(
    vm.createEmptyAccount()
  );
  const [selectedOption, setSelectedOption] = React.useState<Lookup>(
    createEmptyLookup()
  );

  const [errors, setErrors] = React.useState<vm.AccountErrors>(
    vm.createEmptyErrors()
  );

  const loadAccount = async () => {
    try {
      if (!id) {
        throw new Error("No hay id");
      }
      const apiAccount = await api.getAccount(id);
      setAccount(mapAccountFromApiToVm({ ...apiAccount, id }));
    } catch (error) {
      throw new Error("Error al cargar la cuenta");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm(account);
    setErrors(formErrors);
    const isValidForm = Object.values(formErrors).every(
      (error) => error === ""
    );

    if (isValidForm) {
      try {
        const accountModel = mapAccountFromVmToApi(account);
        await api.saveAccount(accountModel);
        navigate(appRoutes.accountList);
      } catch (error) {
        throw new Error("Error al guardar la cuenta");
      }
    }
  };

  React.useEffect(() => {
    if (id) {
      loadAccount();
    }
  }, []);

  React.useEffect(() => {
    if (account) {
      setSelectedOption({
        id: account.type,
        name: account.name,
      });
    }
  }, [account]);

  return (
    <AppLayout>
      <section className={classes.container}>
        <div>
          <h1 className={classes.title}>Cuenta Bancaria</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.formContainer}>
            <label>Tipo de cuenta:</label>
            <div>
              {/* <select
                id="type"
                className={classes.select}
                value={account.type}
                onChange={(e) =>
                  setAccount({ ...account, type: e.target.value })
                }
              >
                <option value=""></option>
                <option value="1">Nómina</option>
                <option value="2">Ahorro</option>
                <option value="3">Normal</option>
              </select> */}
              <Select
                value={selectedOption}
                onChange={setSelectedOption}
                optionList={selectOptions}
                defaultValue=""
                className={classes.select}
              />
              {errors.type && <p className={classes.error}>{errors.type}</p>}
            </div>
            <label htmlFor="alias">Alias:</label>
            <div>
              <input
                id="alias"
                className={classes.input}
                autoComplete="off"
                value={account.name}
                onChange={(e) =>
                  setAccount({ ...account, name: e.target.value })
                }
              />
              {errors.name && <p className={classes.error}>{errors.name}</p>}
            </div>
            <button type="submit" className={classes.button}>
              GUARDAR
            </button>
          </div>
        </form>
      </section>
    </AppLayout>
  );
};
