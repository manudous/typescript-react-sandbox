import React from "react";
import { Lookup } from "../../../common/models";
import classes from "./select.module.css";

interface Props {
  value: Lookup;
  onChange: (value: Lookup) => void;
  optionList: Lookup[];
  defaultValue?: string;
  className?: string;
}

export const Select: React.FunctionComponent<Props> = (props) => {
  const { value, onChange, optionList, defaultValue, className } = props;
  return (
    <select
      className={`${classes.select} ${className}`}
      onChange={(e) =>
        onChange({
          // id: value.id,
          id: e.target.value,
          name: e.target.value,
        })
      }
      value={value.id}
    >
      <option value="">{defaultValue}</option>
      {optionList.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
