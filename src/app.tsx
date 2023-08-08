import React from "react";
import { Miembro } from "./modelo";

export const App = () => {
  const [miembros, setMiembros] = React.useState<Miembro[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMiembros(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="user-list-container">
      <span className="header">Avatar</span>
      <span className="header">Id</span>
      <span className="header">Nombre</span>
      {miembros.map((miembro) => (
        <React.Fragment key={miembro.id}>
          <img src={miembro.avatar_url} />
          <span>{miembro.id}</span>
          <span>{miembro.login}</span>
        </React.Fragment>
      ))}
    </div>
  );
};
