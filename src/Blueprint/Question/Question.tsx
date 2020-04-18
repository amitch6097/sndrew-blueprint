import React from "react";
import "./Question.scss";

import {
  Card,
  CardContent,
  Typography,
  FormControl,
  Divider
} from "@material-ui/core";

import { RadioOptions } from "./RadioOptions";
import { CheckboxOptions } from "./CheckboxOptions";
import { InputOption } from "./InputOption";
import { IQuestion, IOption } from "../typings";

interface IQuestionProps {
  question: IQuestion;
  onOptionChange: (option: IOption) => (event: any) => void;
}

export enum QuestionType {
  RADIO = "RADIO",
  CHECKBOX = "CHECKBOX",
  INPUT = "INPUT"
}

interface IOption {
  id: string;
  label: string;
  value: boolean | string;
}

export function Question(props: IQuestionProps) {
  return (
    <Card id={props.question.id} className="question-card">
      <CardContent>
        <Typography
          className="question-card__label"
          gutterBottom
          variant="h5"
          component="h2"
        >
          {props.question.label}
        </Typography>
        <Typography
          className="question-card__description"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {props.question.description}
        </Typography>
        <Divider />
        <FormControl className="question-card__form" component="fieldset">
          {props.question.questionType === QuestionType.RADIO && (
            <RadioOptions
              onOptionChange={props.onOptionChange}
              label={props.question.label}
              options={props.question.options}
            />
          )}
          {props.question.questionType === QuestionType.CHECKBOX && (
            <CheckboxOptions
              onOptionChange={props.onOptionChange}
              label={props.question.label}
              options={props.question.options}
            />
          )}
          {props.question.questionType === QuestionType.INPUT && (
            <InputOption
              onOptionChange={props.onOptionChange}
              option={props.question.options[0]}
            />
          )}
        </FormControl>
      </CardContent>
    </Card>
  );
}
