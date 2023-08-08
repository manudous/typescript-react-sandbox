import { Miembro } from "./modelo";

export const obtenerMiembros = (): Promise<Miembro[]> =>
  fetch(`https://api.github.com/orgs/lemoncode/members`).then((response) =>
    response.json()
  );
