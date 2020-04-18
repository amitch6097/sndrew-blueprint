import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { ITopic } from "../typings";

interface ITopicProps {
  topic: ITopic;
}

export function Topic(props: ITopicProps) {
  return (
    <Card id={props.topic.id} className="question-card">
      <CardContent>
        <Typography
          className="question-card__label"
          gutterBottom
          variant="h5"
          component="h2"
        >
          {props.topic.label}
        </Typography>
        <Typography
          className="question-card__description"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {props.topic.description}
        </Typography>
        <Button variant="contained" color="primary">
          Continue
        </Button>
      </CardContent>
    </Card>
  );
}
