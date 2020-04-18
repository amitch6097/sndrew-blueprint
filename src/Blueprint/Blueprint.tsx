import React from "react";
import { Grid } from "@material-ui/core";
import { QuestionType } from "./enums";
import { IQuestion, IOption, Nodes } from "./typings";
import { Navigation } from "./Navigation/Navigation";
import { NodeList } from "./NodeList/NodeList";
import "./Blueprint.scss";

interface IBlueprintProps {
  nodes: Nodes[];
  onOptionChange: (option: IOption) => (event: any) => void;
}

const scrollToNode = ({id}: Nodes) => (event: any) => window.scrollTo({top: document.getElementById(id)?.offsetTop || 0,   behavior: 'smooth',
});

export function Blueprint(props: IBlueprintProps) {
  return (
    <Grid className="blueprint" container wrap={"nowrap"} direction="row">
      <Grid className="blueprint__navigation" container item xs={3}>
        <Navigation nodes={props.nodes} onNodeClicked={scrollToNode}/>
      </Grid>
      <Grid
        className="blueprint__nodes"
        container
        xs={9}
        item
        direction="column"
        justify="center"
        alignItems="center"
      >
        <NodeList nodes={props.nodes} onOptionChange={props.onOptionChange} />
      </Grid>
    </Grid>
  );
}
