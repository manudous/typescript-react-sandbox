import React from "react";
import { RouterComponent } from "./core/router";
import { ProfileProvider } from "./core/profile";
import { NavbarProvider } from "./common-app/components";

import "./style.css";

export const App: React.FC = () => {
  return (
    <ProfileProvider>
      <NavbarProvider>
        <RouterComponent />
      </NavbarProvider>
    </ProfileProvider>
  );
};
