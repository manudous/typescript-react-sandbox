import React from "react";
import { Link, useLocation } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { isActiveRoute } from "./navbar.helpers";
import classes from "./navbar.module.css";

export const Navbar: React.FunctionComponent = () => {
  const { pathname } = useLocation();

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={isActiveRoute(pathname, "account") ? classes.selected : ""}
        >
          <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>
        {isActiveRoute(pathname, "movements") && (
          <li className={classes.selected}>Movimientos</li>
        )}
        <li
          className={
            isActiveRoute(pathname, "transfer") ? classes.selected : ""
          }
        >
          <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
      </ul>
    </nav>
  );
};
