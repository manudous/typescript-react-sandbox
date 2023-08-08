import * as React from "react";
import { MiContexto } from "../contexto";
import logo from "../../public/logo_lemoncode.png";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<Props> = (props) => {
  const { children } = props;
  const { nombreUsuario } = React.useContext(MiContexto);

  return (
    <div className="contenedor-layout">
      <header className="layout-header">
        <h1>Lista de miembros de Lemoncode</h1>
        <p>Bienvenido Sr. {nombreUsuario}</p>
      </header>
      {children}
      <footer className="layout-footer">
        <img src={logo} alt="Logo Lemonode" />
      </footer>
    </div>
  );
};
