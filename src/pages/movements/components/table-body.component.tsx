import React from "react";
import { isExpense } from "../movements.helpers";
import * as vm from "../movements.vm";
import classes from "./table-body.module.css";

interface Props {
  movement: vm.Movement;
}

export const TableBody: React.FunctionComponent<Props> = (props) => {
  const { movement } = props;

  return (
    <div className={classes.bodyTable}>
      <span className={classes.dataCell}>{movement.transaction}</span>
      <span className={classes.dataCell}>{movement.realTransaction}</span>
      <span className={classes.dataCell}>{movement.description}</span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} ${
          isExpense(movement.amount) ? classes.expense : ""
        }`}
      >
        {movement.amount}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movement.balance}
      </span>
    </div>
  );
};
