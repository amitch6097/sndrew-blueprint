import { QuestionType, NodeType } from "./enums";

export interface IOption {
  id: string;
  label: string; // for input this will be placeholder
  value: boolean | string;
}

export interface IQuestion {
  id: string;
  label: string;
  subLabel: string;
  description: string;
  questionType: QuestionType;
  options: IOption[];
  nodeType: NodeType.QUESTION;
}

export interface IConclusion {
  id: string;
  label: string;
  description: string;
  nodeType: NodeType.CONCLUSION;
  subLabel: string;
}

export interface ITopic {
  id: string;
  label: string;
  description: string;
  nodeType: NodeType.TOPIC;
  subLabel: string;
}

export type Nodes = ITopic | IConclusion | IQuestion;
