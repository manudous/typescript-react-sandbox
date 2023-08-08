import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MiembroDetalle } from "./componentes/miembro-detalle";
import { MiembroGrid } from "./componentes/miembro-grid";
import { Login } from "./componentes/login";

export const Rutas: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado-miembros" element={<MiembroGrid />} />
        <Route path="/detalle/:id" element={<MiembroDetalle />} />
      </Routes>
    </Router>
  );
};
