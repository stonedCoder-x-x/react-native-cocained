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
  labelStyleSignup,
  inputContainerStyle
} from "UIProps/Styles";
import InputIcon from "./InputIcon";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
export default class MobileNumber extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    text: ""
  };

  setText(text) {
    if (this.props.inputValueGetter == undefined) {
      alert("Please provide input value getter function to this component");
      return;
    }

    this.setState({ text,wantToEdit:true });
    InputValidations.validatePhone(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();

      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props.inputValueGetter(text);
      }
    });
  }

  render() {
    let { label,value } = this.props;
    return (
      <Input
        label={label || "Phone Number"}
        placeholder="+With Country code"
        labelStyle={labelStyleSignup}
        containerStyle={inputStylesContainer}
        maxLength={15}
        onChangeText={text => this.setText(text)}
        value={this.state.wantToEdit ? this.state.text : value}
        keyboardType="numeric"
        placeholderTextColor={Colors.inputs_placeholders}
        inputContainerStyle={inputContainerStyle}
        inputStyle={inputStyles}
        errorStyle={inputsError}
        errorMessage={this.state.error}
      />
    );
  }
}
