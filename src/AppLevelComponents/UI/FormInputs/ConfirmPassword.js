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
  labelStyleSignup
} from "UIProps/Styles";
import InputIcon from "./InputIcon";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";

export default class ConfirmPassword extends Component {
  state = {
    error: "",
    wantToEdit: undefined,
    text: "",
    icon: "ios-eye",
    hidePass: true
  };

  componentDidMount() {
    this.inputRef = null;
  }

  componentWillReceiveProps(nextProps) {
    let { passwordInput, hidePass, value } = nextProps;
    this.setState({ hidePass, text: value }, () => {
      if (
        passwordInput != undefined &&
        value.length >= 0 &&
        passwordInput != this.state.text
      ) {
        this.setError();
      } else {
        this.unsetError();
      }
    });
  }

  setText(text) {
    let { passwordInput } = this.props;
    if (this.props.inputValueGetter == undefined) {
      alert("Please provide input value getter function to this component");
      return;
    }

    this.setState({ text, wantToEdit: true });
    this.props.inputValueGetter(text);
    if (text != passwordInput) {
      this.setError();
    } else {
      this.unsetError();
    }
  }

  unsetError() {
    HelperMethods.animateLayout();
    this.setState({ error: "" });
    this.props.isPasswordMatching(true);
  }

  setError() {
    HelperMethods.animateLayout();
    this.setState({ error: "Passwords doesn't match" });
    this.props.isPasswordMatching(false);
  }

  render() {
    let { width, labelStyleAdditional, value } = this.props;
    let label = { ...labelStyle, ...labelStyleAdditional };
    return (
      <Input
        label="Confirm Password"
        placeholder="Enter Confirm Password"
        labelStyle={label}
        ref={input => (this.inputRef = input)}
        secureTextEntry={this.state.hidePass}
        containerStyle={inputStylesContainer}
        onChangeText={text => this.setText(text)}
        value={this.state.text}
        placeholderTextColor={Colors.inputs_placeholders}
        containerStyle={[
          inputStylesContainer,
          { width: width * global.rem || undefined }
        ]}
        inputStyle={inputStyles}
        errorStyle={inputsError}
        errorMessage={this.state.error}
      />
    );
  }
}
