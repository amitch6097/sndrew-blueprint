import React from "react";
import { IOption } from "../typings";
import { FormControlLabel, Checkbox } from "@material-ui/core";

interface ICheckboxOptionsProps {
  label: string;
  options: IOption[];
  onOptionChange: (
    option: IOption
  ) => (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export function CheckboxOptions(props: ICheckboxOptionsProps) {
  return (
    <>
      {props.options.map(option => {
        return (
          <FormControlLabel
            key={option.id}
            value={option.id}
            control={
              <Checkbox
                checked={option.value as boolean}
                onChange={props.onOptionChange(option)}
              />
            }
            label={option.label}
          />
        );
      })}
    </>
  );
}
