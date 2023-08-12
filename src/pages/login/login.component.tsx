import React from "react";
import { useNavigate } from "react-router-dom";
import { useProfileContext } from "@/core/profile";
import { appRoutes } from "@/core/router";
import * as api from "./api";
import { LoginForm } from "./components";
import { mapCredentialFromVmToApi } from "./login.mappers";
import { validateForm } from "./login.validation";
import * as viewModel from "./login.vm";
import classes from "./login.module.css";

export const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { setUserProfile } = useProfileContext();

  const [userCredential, setUserCredential] = React.useState<viewModel.Credential>(
    viewModel.createEmptyCredential()
  );

  const [errors, setErrors] = React.useState<viewModel.Credential>(
    viewModel.createEmptyCredential()
  );

  const handleLogin = async (credential: viewModel.Credential): Promise<boolean> => {
    try {
      const userLoginModel = mapCredentialFromVmToApi(credential);
      return await api.isValidLogin(userLoginModel);
    } catch (error) {
      throw new Error("Error in login");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validateForm(userCredential);
    setErrors(formErrors);

    const isValidForm = Object.values(formErrors).every(
      (error) => error === ""
    );

    if (isValidForm) {
      const isValidLogin = await handleLogin(userCredential);

      if (!isValidLogin) {
        alert("Usuario o contraseña incorrectos");
      } else {
        setUserProfile(userCredential.user);
        navigate(appRoutes.accountList);
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
        <LoginForm
          userCredential={userCredential}
          errors={errors}
          setUserCredential={setUserCredential}
          onSubmit={handleSubmit}
        />
        <h4 className={classes.inputFooter}>
          Está Usted en un <strong>sitio seguro</strong>
        </h4>
      </div>
    </>
  );
};
