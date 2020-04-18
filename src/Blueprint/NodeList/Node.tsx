import React from "react";
import { Question } from "../Question/Question";
import { Topic } from "../Topic/Topic";

import { Conclusion } from "../Conclusion/Conclusion";
import { NodeType } from "../enums";
import { IQuestion, ITopic, IConclusion, IOption } from "../typings";

export interface INodeProps {
  node: IQuestion | ITopic | IConclusion;
  onOptionChange: (option: IOption) => (event: any) => void;
}

export function Node(props: INodeProps) {
  return (
    <>
      {props.node.nodeType === NodeType.QUESTION && (
        <Question question={props.node} onOptionChange={props.onOptionChange} />
      )}
      {props.node.nodeType === NodeType.TOPIC && <Topic topic={props.node} />}
      {props.node.nodeType === NodeType.CONCLUSION && (
        <Conclusion conclusion={props.node} />
      )}
    </>
  );
}
