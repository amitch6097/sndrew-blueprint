import React from "react";
import { IOption } from "../typings";
import { Input } from "@material-ui/core";

interface IInputOptionProps {
  option: IOption;
  onOptionChange: (
    option: IOption
  ) => (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

interface IInputOptionState {
  value: string;
}

export class InputOption extends React.Component<
  IInputOptionProps,
  IInputOptionState
> {
  timeoutId: number | undefined = undefined;
  debounceTimout: number = 2000;

  constructor(props: IInputOptionProps) {
    super(props);
    this.state = {
      value: props.option.value as string
    };
  }

  componentDidUpdate(prevProps: IInputOptionProps) {
    if (prevProps.option.value !== this.props.option.value) {
      this.setState({
        value: this.props.option.value as string
      });
    }
  }

  setValue = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    this.setState({
      value: event.target.value
    });
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this.props.onOptionChange(this.props.option);
      clearTimeout(this.timeoutId);
    }, this.debounceTimout);
  };

  onBlur = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.props.onOptionChange(this.props.option);
  };

  // use local state and then on blur update state
  render() {
    return (
      <Input
        placeholder={this.props.option.label}
        id={this.props.option.id}
        value={this.state.value}
        onChange={this.setValue}
        onBlur={this.onBlur}
      />
    );
  }
}
