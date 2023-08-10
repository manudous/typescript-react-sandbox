import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { appRoutes } from "./routes";
import { Login } from "../../pages/login/login.component";
import { AccountList } from "../../pages/account-list";
import { Account } from "../../pages/account";
import { Movements } from "../../pages/movements";
import { Transfer } from "../../pages/transfer";

export const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.login} element={<Login />} />
        <Route path={appRoutes.accountList} element={<AccountList />} />
        <Route path={appRoutes.createAccount} element={<Account />} />
        <Route path={appRoutes.editAccount} element={<Account />} />
        <Route path={appRoutes.movements} element={<Movements />} />
        <Route path={appRoutes.transfer} element={<Transfer />} />
        <Route path={appRoutes.trasnferWithId} element={<Transfer />} />

        <Route path="/*" element={<Navigate to="./login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
