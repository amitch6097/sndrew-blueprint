import * as React from "react";
import "./styles.css";
import { Blueprint } from "./Blueprint/Blueprint";
import { IQuestion, IOption, Nodes } from "./Blueprint/typings";
import { QuestionType, NodeType } from "./Blueprint/enums";

const questions: Nodes[] = [
  {
    id: "1",
    label: "My Question",
    subLabel: "My Question",
    nodeType: NodeType.QUESTION,
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    questionType: QuestionType.INPUT,
    options: [
      {
        id: "name",
        label: "Your Name",
        value: ""
      }
    ]
  },
  {
    id: "2",
    label: "My Radio",
    subLabel: "My Radio",
    nodeType: NodeType.QUESTION,
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    questionType: QuestionType.RADIO,
    options: [
      {
        label: "Female",
        id: "female",
        value: true
      },
      {
        label: "Male",
        id: "male",
        value: false
      },
      {
        label: "Other",
        id: "other",
        value: false
      }
    ]
  },
  {
    id: "3",
    label: "My Checkbox",
    subLabel: "My Checkbox",
    nodeType: NodeType.QUESTION,
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    questionType: QuestionType.CHECKBOX,
    options: [
      {
        label: "Female",
        id: "female",
        value: true
      },
      {
        label: "Male",
        id: "male",
        value: false
      },
      {
        label: "Other",
        id: "other",
        value: false
      }
    ]
  },
  {
    id: "4",
    label: "My Topic",
    subLabel: "My Topic",
    nodeType: NodeType.TOPIC,
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
  },
  {
    id: "5",
    label: "My Conclusion",
    subLabel: "My Conclusion",
    nodeType: NodeType.CONCLUSION,
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
  }
];

const onOptionChange = (option: any) => (...args: any) => {
  console.log(option, args);
};

export default function App() {
  return (
    <div className="App">
      <Blueprint nodes={questions} onOptionChange={onOptionChange} />
    </div>
  );
}
