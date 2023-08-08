import React from "react";
import { useParams } from "react-router-dom";
import { getMiembroById } from "../miembro.api";
import { Miembro, crearMiembroVacio } from "../modelo";
import { Layout } from "./layout";

export const MiembroDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [miembro, setMiembro] = React.useState<Miembro>(crearMiembroVacio());

  React.useEffect(() => {
    if (id) {
      getMiembroById(id).then(setMiembro);
    }
  }, []);

  return (
    <Layout>
      <div className="contenedor-detalle">
        <h2>Detalle de miembro</h2>
        <img src={miembro.avatar_url} alt={miembro.login} />
        <p>{miembro.login}</p>
      </div>
    </Layout>
  );
};
