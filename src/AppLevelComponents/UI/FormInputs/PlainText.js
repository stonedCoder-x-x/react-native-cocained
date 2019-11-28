import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Colors } from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import {
  inputsError,
  labelStyle,
  inputContainerStyle
} from "UIProps/Styles";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";

import InputIcon from "./InputIcon";

export default class PlainText extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    text: ""
  };

  setText(text) {
    this.setState({ text,wantToEdit:true });
    this.props.inputValueGetter(text);
    
  }

  render() {
    let { width,label,value, labelStyleAdditional,caps } = this.props;
    
    return (
      <Input
      label={label}
      labelStyle={labelStyle}
      inputContainerStyle={inputContainerStyle}
      autoCapitalize="characters"
      onChangeText={text => this.setText(text)}
      value={this.state.wantToEdit ? this.state.text : value}
      placeholderTextColor={Colors.inputs_placeholders}
      errorStyle={inputsError}
      errorMessage={this.state.error}
      multiline
      blurOnSubmit={true}
      />
    );
  }
}
