import React from "react";
import { RouterComponent } from "./core/router";
import { ProfileProvider } from "./core/profile";

import "./style.css";

export const App: React.FC = () => {
  return (
    <ProfileProvider>
      <RouterComponent />
    </ProfileProvider>
  );
};
