import React from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../core/router";
import { useProfileContext } from "../../core/profile";
import { mapCredentialFromVmToApi } from "./login.mappers";
import { validateForm } from "./login.validation";
import * as api from "./api";
import * as vm from "./login.vm";
import classes from "./login.module.css";

export const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { setUserProfile } = useProfileContext();
  const [userLogin, setUserLogin] = React.useState<vm.Credential>(
    vm.createEmptyCredential()
  );

  const [errors, setErrors] = React.useState<vm.Credential>(
    vm.createEmptyCredential()
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm(userLogin);
    setErrors(formErrors);
    const isValidForm = Object.values(formErrors).every(
      (error) => error === ""
    );

    if (isValidForm) {
      try {
        const userLoginModel = mapCredentialFromVmToApi(userLogin);
        const isValidLogin = await api.isValidLogin(userLoginModel);
        if (!isValidLogin) {
          alert("Usuario o contraseña incorrectos");
        } else {
          setUserProfile(userLogin.user);
          navigate(appRoutes.accountList);
        }
      } catch (error) {
        throw new Error("Error en el login");
      }
    }
  };

  return (
    <>
      <header className={classes.header}>
        <img className={classes.logo} src="assets/logo_header.svg" />
      </header>
      <div className={classes.bgImg}></div>
      <div className={classes.box}>
        <h1>Acceso</h1>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div>
            <input
              name="user"
              placeholder="Usuario"
              autoComplete="off"
              className={
                errors.user
                  ? `${classes.inputError} ${classes.input}`
                  : classes.input
              }
              onChange={(e) =>
                setUserLogin({ ...userLogin, user: e.target.value })
              }
            />
            {errors.user && <p className={classes.error}>{errors.user}</p>}
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              className={
                errors.user
                  ? `${classes.input} ${classes.inputError}`
                  : classes.input
              }
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
            />
            {errors.password && (
              <p className={classes.error}>{errors.password}</p>
            )}
          </div>
          <button type="submit" className={classes.btnEnviar}>
            ENVIAR
          </button>
        </form>
        <h4 className={classes.inputFooter}>
          Está Usted en un <strong>sitio seguro</strong>
        </h4>
      </div>
    </>
  );
};
