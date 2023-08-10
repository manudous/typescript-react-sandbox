import React from "react";
import classes from "./movements-table.module.css";
import { Movement } from "../movements.vm";

interface Props {
  movements: Movement[];
}

export const MovementsTable: React.FunctionComponent<Props> = (props) => {
  const { movements } = props;
  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridTable}>
        <div className={classes.gridTableRow}>
          <span className={classes.headerCell}>FECHA</span>
          <span className={classes.headerCell}>FECHA VALOR</span>
          <span className={classes.headerCell}>DESCRIPCIÓN</span>
          <span className={classes.headerCell}>IMPORTE</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
        </div>

        {movements.map((movement) => (
          <div className={classes.gridTableRow}>
            <span className={classes.dataCell}>{movement.transaction}</span>
            <span className={classes.dataCell}>{movement.realTransaction}</span>
            <span className={classes.dataCell}>{movement.description}</span>
            <span className={classes.dataCell}>{movement.amount}</span>
            <span className={classes.dataCell}>{movement.balance}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
