import React from "react";
import { TableBody } from "./table-body.component";
import { Movement } from "../movements.vm";
import classes from "./movements-table.module.css";

interface Props {
  movements: Movement[];
}

export const MovementsTable: React.FunctionComponent<Props> = (props) => {
  const { movements } = props;

  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridTable}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>FECHA</span>
          <span className={classes.headerCell}>FECHA VALOR</span>
          <span className={classes.headerCell}>DESCRIPCIÓN</span>
          <span className={classes.headerCell}>IMPORTE</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
        </div>

        {movements.map((movement) => (
          <TableBody movement={movement} key={movement.id} />
        ))}
      </div>
    </div>
  );
};
