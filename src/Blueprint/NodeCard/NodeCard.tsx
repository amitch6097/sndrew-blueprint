import React from "react";
import "./NodeCard.scss";

import {
  Card,
  CardContent,
  Typography,
  FormControl,
  Button
} from "@material-ui/core";

import { RadioOptions } from "./RadioOptions";
import { CheckboxOptions } from "./CheckboxOptions";
import { InputOption } from "./InputOption";
import { IOption, Nodes } from "../typings";
import { QuestionType, NodeType } from "../enums";

interface INodeCardProps {
  node: Nodes;
  onOptionChange: (option: IOption) => (event: any) => void;
}

interface IOption {
  id: string;
  label: string;
  value: boolean | string;
}

export function NodeCard(props: INodeCardProps) {
  return (
    <Card id={props.node.id} className="node-card">
      <CardContent>
        <Typography
          className="node-card__label"
          gutterBottom
          variant="h5"
          component="h2"
        >
          {props.node.label}
        </Typography>
        <Typography
          className="node-card__description"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {props.node.description}
        </Typography>
        {/* <Divider /> */}
        <FormControl className="node-card__form">
          {props.node.nodeType === NodeType.QUESTION &&
            props.node.questionType === QuestionType.RADIO && (
              <RadioOptions
                onOptionChange={props.onOptionChange}
                label={props.node.label}
                options={props.node.options}
              />
            )}
          {props.node.nodeType === NodeType.QUESTION &&
            props.node.questionType === QuestionType.CHECKBOX && (
              <CheckboxOptions
                onOptionChange={props.onOptionChange}
                label={props.node.label}
                options={props.node.options}
              />
            )}
          {props.node.nodeType === NodeType.QUESTION &&
            props.node.questionType === QuestionType.INPUT && (
              <InputOption
                onOptionChange={props.onOptionChange}
                option={props.node.options[0]}
              />
            )}
        </FormControl>
        {(props.node.nodeType === NodeType.TOPIC ||
          props.node.nodeType === NodeType.CONCLUSION) && (
          <Button
            className="node-card__button"
            variant="contained"
            color="primary"
          >
            Continue
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
