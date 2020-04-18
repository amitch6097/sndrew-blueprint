import React from "react";
import "./Navigation.scss";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { Nodes } from "../typings";

interface INavigationProps {
  nodes: Array<Nodes>;
  onNodeClicked: (
    node: Nodes
  ) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function Navigation(props: INavigationProps) {
  return (
    <Card className="navigation-card">
      <CardContent className="navigation-card__content">
        <List component="nav" aria-label="main mailbox folders">
          {props.nodes.map(node => {
            return (
              <ListItem onClick={props.onNodeClicked(node)} button>
                <ListItemText primary={node.label} />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}
