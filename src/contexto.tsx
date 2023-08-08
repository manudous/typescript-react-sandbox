import React from "react";

interface ContextoUsuario {
  nombreUsuario: string;
  setNombreUsuario: (valor: string) => void;
}

export const MiContexto = React.createContext<ContextoUsuario>({
  nombreUsuario: "",
  setNombreUsuario: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const MiContextoProvider: React.FunctionComponent<Props> = ({
  children,
}) => {
  const [nombreUsuario, setNombreUsuario] = React.useState<string>("Braulio");

  return (
    <MiContexto.Provider value={{ nombreUsuario, setNombreUsuario }}>
      {children}
    </MiContexto.Provider>
  );
};
