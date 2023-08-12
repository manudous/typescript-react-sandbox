import React from "react";
import { Link } from "react-router-dom";
import { useProfileContext } from "@/core/profile";
import { appRoutes } from "@/core/router";
import logoHeader from "/assets/logo_header_white.svg";
import classes from "./header.module.css";

export const Header: React.FunctionComponent = () => {
  const { userName } = useProfileContext();
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to={appRoutes.login}>
          <img className={classes.headerLogo} src={logoHeader} />
        </Link>
        <div className={classes.usuario}>
          <p>Bienvenido {userName}</p>
        </div>
      </div>
    </header>
  );
};
