import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MiembroDetalle } from "./componentes/miembro-detalle";
import { MiembroGrid } from "./componentes/miembro-grid";

export const Rutas: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MiembroGrid />} />
        <Route path="/detalle/:id" element={<MiembroDetalle />} />
      </Routes>
    </Router>
  );
};
