import React from "react";
import { Miembro } from "../modelo";

interface Props {
  miembro: Miembro;
}

export const MiembroFila: React.FC<Props> = (props) => {
  const { miembro } = props;

  return (
    <React.Fragment>
      <img src={miembro.avatar_url} />
      <span>{miembro.id}</span>
      <span>{miembro.login}</span>
    </React.Fragment>
  );
};
