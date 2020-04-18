import React from "react";
import { IOption } from "../typings";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

interface IRadioOptionsProps {
  label: string;
  options: IOption[];
  onOptionChange: (
    option: IOption
  ) => (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export function RadioOptions(props: IRadioOptionsProps) {
  const selected = props.options.find(option => option.value);
  return (
    <RadioGroup
      value={selected && selected.id}
      aria-label={props.label}
      name={props.label}
    >
      {props.options.map(option => {
        return (
          <FormControlLabel
            key={option.id}
            value={option.id}
            control={<Radio onChange={props.onOptionChange(option)} />}
            label={option.label}
          />
        );
      })}
    </RadioGroup>
  );
}
