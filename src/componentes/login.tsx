import React from "react";
import { useNavigate } from "react-router-dom";
import { Credencial, crearCredencialVacia } from "../modelo";
import { iniciarSesion } from "../login.api";
import { MiContexto } from "../contexto";

export const Login: React.FC = () => {
  const [perfilUsuario, setPerfilUsuario] = React.useState<Credencial>(
    crearCredencialVacia()
  );
  const { setNombreUsuario } = React.useContext(MiContexto);
  const navigate = useNavigate();

  const autenticar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    iniciarSesion(perfilUsuario).then((esValido) => {
      if (esValido) {
        setNombreUsuario(perfilUsuario.usuario);
        navigate("/listado-miembros");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  };

  return (
    <div className="contenedor-login">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={autenticar} className="contenedor-formulario">
        <label htmlFor="usuario">Usuario: </label>
        <input
          id="usuario"
          placeholder="Usuario"
          autoComplete="off"
          onChange={(e) =>
            setPerfilUsuario({ ...perfilUsuario, usuario: e.target.value })
          }
        />
        <label htmlFor="password">Contraseña: </label>
        <input
          id="password"
          type="password"
          autoComplete="off"
          placeholder="Contraseña"
          onChange={(e) =>
            setPerfilUsuario({ ...perfilUsuario, password: e.target.value })
          }
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
