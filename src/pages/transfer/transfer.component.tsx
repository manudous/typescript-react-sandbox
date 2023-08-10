import React from "react";
import { AppLayout } from "../../layouts";

export const Transfer: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <section>
        <div className="container">
          <div>
            <h1 className="titulo_paginas">Transferencias Nacionales</h1>
          </div>
          <form>
            <div className="form_container">
              <div>
                <label>Selecciones cuenta de origen (IBAN):</label>
                <select id="select-account" className="select"></select>
              </div>
              <p id="accountId-error" className="error"></p>

              <div>
                <label>Ingrese el IBAN de destino:</label>
                <input id="iban" className="large" type="text" />
                <p id="iban-error" className="error"></p>
              </div>
              <div>
                <label>Beneficiario:</label>
                <input id="name" className="large" type="text" />
                <p id="name-error" className="error"></p>
              </div>
              <div>
                <label>
                  Importe <span className="bold">(EUR)</span>:
                </label>
                <input id="amount" className="small" type="text" />
                <p id="amount-error" className="error"></p>
              </div>
              <div>
                <label>Concepto:</label>
                <input id="concept" className="large" type="text" />
                <p id="concept-error" className="error"></p>
              </div>
              <div>
                <label>Observaciones:</label>
                <input id="notes" className="large" type="text" />
                <p id="notes-error" className="error"></p>
              </div>
            </div>
            <div className="form_container">
              <p>
                Para que la transferencia se realice en otra fecha diferente a
                la de hoy, por favor, indíquenos la fecha de ejecución:
              </p>
              <div className="fecha">
                <label>Fecha de ejecución:</label>
                <input
                  id="day"
                  className="fecha-input small"
                  type="number"
                  placeholder="dd"
                />
                <p>/</p>
                <input
                  id="month"
                  className="fecha-input small"
                  type="number"
                  placeholder="mm"
                />
                <p>/</p>
                <input
                  id="year"
                  className="fecha-input medium"
                  type="number"
                  placeholder="yyyy"
                />
                <p id="date-error" className="error"></p>
              </div>
            </div>
            <div className="form_container">
              <p>
                Escriba una dirección de email para dar aviso al beneficiario:
              </p>
              <div>
                <label>Email del beneficiario:</label>
                <input id="email" className="large" type="email" />
                <p id="email-error" className="error"></p>
              </div>
            </div>
            <button
              id="transfer-button"
              type="button"
              className="btn_enviar_transferencia"
            >
              REALIZAR LA TRANSFERENCIA
            </button>
          </form>
        </div>
      </section>
    </AppLayout>
  );
};
