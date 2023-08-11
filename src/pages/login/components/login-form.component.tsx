import React from "react";
import * as vm from "../login.vm";
import classes from "./login-form.module.css";

interface Props {
  userCredential: vm.Credential;
  errors: vm.Credential;
  setUserCredential: (credential: vm.Credential) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm: React.FunctionComponent<Props> = (props) => {
  const { errors, userCredential, setUserCredential, onSubmit } = props;

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredential({
      ...userCredential,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit} className={classes.form}>
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
          onChange={handleFieldChange}
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
          onChange={handleFieldChange}
        />
        {errors.password && <p className={classes.error}>{errors.password}</p>}
      </div>
      <button type="submit" className={classes.btnEnviar}>
        ENVIAR
      </button>
    </form>
  );
};
