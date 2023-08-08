import { Rutas } from "./rutas";
import { MiContextoProvider } from "./contexto";

export const App = () => {
  return (
    <MiContextoProvider>
      <Rutas />
    </MiContextoProvider>
  );
};
