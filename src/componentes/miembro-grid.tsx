import React from "react";
import { Miembro } from "../modelo";
import { MiembroFila } from "./miembro-fila";
import { obtenerMiembros } from "../miembro.api";

export const MiembroGrid = () => {
  const [miembros, setMiembros] = React.useState<Miembro[]>([]);

  React.useEffect(() => {
    obtenerMiembros().then(setMiembros);
  }, []);

  return (
    <div className="user-list-container">
      <span className="header">Avatar</span>
      <span className="header">Id</span>
      <span className="header">Nombre</span>
      {miembros.map((miembro) => (
        <MiembroFila key={miembro.id} miembro={miembro} />
      ))}
    </div>
  );
};
