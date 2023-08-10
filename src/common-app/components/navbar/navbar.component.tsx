import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../core/router";
import { useNavbarContext } from "./navbar.context";
import classes from "./navbar.module.css";

export const Navbar: React.FunctionComponent = () => {
  const { updateSelectedOption, currentSelectedOption } = useNavbarContext();

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li className={currentSelectedOption === "accounts" ? "selected" : ""}>
          <Link
            to={appRoutes.accountList}
            onClick={() => updateSelectedOption("accounts")}
          >
            Mis Cuentas
          </Link>
        </li>
        <li className={currentSelectedOption === "movements" ? "selected" : ""}>
          Movimientos
        </li>
        <li className={currentSelectedOption === "transfers" ? "selected" : ""}>
          <Link
            to={appRoutes.transfer}
            onClick={() => updateSelectedOption("transfers")}
          >
            Transferencias
          </Link>
        </li>
      </ul>
    </nav>
  );
};
