import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Colors } from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import {
  inputStyles,
  inputStylesContainer,
  inputsError,
  labelStyle,
  inputContainerStyle
} from "UIProps/Styles";
import InputIcon from "./InputIcon";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";

export default class Password extends Component {
  state = {
    error: "",
    wantToEdit: undefined,
    text: undefined,
    icon: "ios-eye",
    hidePass: true
  };

  componentDidMount() {
    this.inputRef = null;
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillReceiveProps(nextProps) {
    this.setState({ text: nextProps.value });
  }

  setText(text) {
    let { validate } = this.props;
    let { hidePass } = this.state;
    if (this.props.inputValueGetter == undefined) {
      alert("Please provide input value getter function to this component");
      return;
    }
    this.setState({ text, wantToEdit: true });
    if (!validate) {
      this.props.inputValueGetter(text);
      return;
    }
    InputValidations.validatePassword(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();
      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();
        this.props.inputValueGetter(text, hidePass,false);
      } else {
        this.props.inputValueGetter(undefined, hidePass,true); //set undefined for showing errors alert to user in the parent class
      }
    });
  }

  togglePassText = () => {
    let { text, hidePass } = this.state;

    this.setState(
      {
        hidePass: !this.state.hidePass,
        icon: this.state.hidePass ? "ios-eye-off" : "ios-eye"
      },
      () => {
        this.props.inputValueGetter(text, !hidePass);
      }
    );
  };
  render() {
    let { width, labelStyleAdditional,showLabel,label, value } = this.props;
    return (
      <Input
        label={label || "Your Password" }
        labelStyle={labelStyle}
        ref={input => (this.inputRef = input)}
        secureTextEntry={this.state.hidePass}
        
        rightIcon={
          <InputIcon
            onPress={this.togglePassText}
            size={21}
            color={Colors.accent}
            icon={this.state.icon}
          />
        }
        onChangeText={text => this.setText(text)}
        value={this.state.wantToEdit ? this.state.text : value}
        
        placeholderTextColor={Colors.inputs_placeholders}
        inputContainerStyle={inputContainerStyle}
        errorStyle={inputsError}
        errorMessage={this.state.error}
      />
    );
  }
}
