import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "../../layouts";
import { mapMovementListApiToVm, mapAccountApiToVm } from "./movements.mappers";
import * as api from "./api";
import * as vm from "./movements.vm";

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
      <section>
        <div className="container">
          <div>
            <h1 className="titulo_paginas">
              Saldos y Últimos movimientos
              <div className="resumen_destacado">
                <div className="saldo_disponible align-right">
                  <p className="label">SALDO DISPONIBLE</p>
                  <p id="balance" className="importe">
                    {account.balance}
                  </p>
                </div>
              </div>
            </h1>
            <h3 className="subtitulo_paginas">
              Alias: <span id="alias">{account.name}</span>
              <span className="iban">
                IBAN: <span id="iban">{account.iban}</span>
              </span>
            </h3>
          </div>
          <table
            cellSpacing="1"
            cellPadding="0"
            align="center"
            className="full"
          >
            <thead>
              <tr>
                <td>FECHA</td>
                <td>FECHA VALOR</td>
                <td>DESCRIPCIÓN</td>
                <td>IMPORTE</td>
                <td>SALDO DISPONIBLE</td>
              </tr>
            </thead>
            <tbody id="movement-list">
              {movements.map((movement) => (
                <tr key={movement.id}>
                  <td>{movement.transaction}</td>
                  <td>{movement.realTransaction}</td>
                  <td>{movement.description}</td>
                  <td
                    className={
                      parseInt(movement.amount) < 0
                        ? "gasto align-right"
                        : "align-right"
                    }
                  >
                    {movement.amount}
                  </td>
                  <td className="align-right">{movement.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppLayout>
  );
};
