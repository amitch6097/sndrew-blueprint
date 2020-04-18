import React from "react";
import { Grid } from "@material-ui/core";
import { IQuestion, ITopic, IConclusion, IOption } from "../typings";
import { NodeCard } from "../NodeCard/NodeCard";

interface INodeListProps {
  nodes: Array<IQuestion | ITopic | IConclusion>;
  onOptionChange: (option: IOption) => (event: any) => void;
}

export function NodeList(props: INodeListProps) {
  return (
    <Grid
      container
      xs={9}
      direction="column"
      justify="center"
      alignItems="center"
    >
      {props.nodes.map(node => {
        return (
          <NodeCard
            key={node.id}
            node={node}
            onOptionChange={props.onOptionChange}
          />
        );
      })}
    </Grid>
  );
}
