import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "../../layouts";
import { MovementsTable } from "./components";
import { mapMovementListApiToVm, mapAccountApiToVm } from "./movements.mappers";
import * as api from "./api";
import * as vm from "./movements.vm";
import classes from "./movements.module.css";

export const Movements: React.FunctionComponent = () => {
  const { id } = useParams();
  const [movements, setMovements] = React.useState<vm.Movement[]>([]);
  const [account, setAccount] = React.useState<vm.Account>(
    vm.createEmptyAccount()
  );

  const loadMovements = async () => {
    try {
      if (!id) {
        throw new Error("No hay id");
      }
      const apiMovements = await api.getMovements(id);
      setMovements(mapMovementListApiToVm(apiMovements));
    } catch (error) {
      throw new Error("Error al cargar los movimientos");
    }
  };

  const loadAccount = async () => {
    try {
      if (!id) {
        throw new Error("No hay id");
      }
      const apiAccount = await api.getAccount(id);
      setAccount(mapAccountApiToVm(apiAccount));
    } catch (error) {
      throw new Error("Error al cargar la cuenta");
    }
  };

  React.useEffect(() => {
    if (id) {
      loadMovements();
      loadAccount();
    }
  }, []);

  return (
    <AppLayout>
      <section className={classes.container}>
        <div className={classes.containerMovements}>
          <div className={`${classes.containerRow} ${classes.borderBottom}`}>
            <h1>Saldos y Últimos movimientos</h1>
            <div>
              <p className={classes.balanceLabel}>SALDO DISPONIBLE</p>
              <p className={classes.balance}>{account.balance}</p>
            </div>
          </div>
          <div className={classes.containerRow}>
            <h3 className="subtitulo_paginas">
              Alias: <span id="alias">{account.name}</span>
            </h3>
            <span className="iban">IBAN: {account.iban}</span>
          </div>
          <MovementsTable movements={movements} />
        </div>
      </section>
    </AppLayout>
  );
};
