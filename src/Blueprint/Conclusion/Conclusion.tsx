import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { IConclusion } from "../typings";

interface IConclusionProps {
  conclusion: IConclusion;
}

export function Conclusion(props: IConclusionProps) {
  return (
    <Card id={props.conclusion.id} className="question-card">
      <CardContent>
        <Typography
          className="question-card__label"
          gutterBottom
          variant="h5"
          component="h2"
        >
          {props.conclusion.label}
        </Typography>
        <Typography
          className="question-card__description"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {props.conclusion.description}
        </Typography>
        <Button variant="contained" color="primary">
          Continue
        </Button>
      </CardContent>
    </Card>
  );
}
