import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import {Colors} from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import {
  inputStylesContainer,
  labelStyle,
  inputsError,
  inputContainerStyle
} from "UIProps/Styles";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import InputIcon from "./InputIcon";

export default class Email extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    text: ""
  };

  setText(text) {
    if(this.props.inputValueGetter == undefined){
      alert('Please provide input value getter function to this component')
      return
    }
    this.setState({ text,wantToEdit:true });
    InputValidations.validateEmail(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();
HelperMethods.animateLayout()
      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props.inputValueGetter(text);
      } else {
        this.props.inputValueGetter(undefined); //set undefined for showing errors alert to user in this class parent
      }
    });
  }

  render() {
    let {width,value,textLabel,marginBottom,labelStyleAdditional} = this.props
    let label = {...labelStyle,...labelStyleAdditional}
    return (
      <Input
        label={textLabel || "Email Address"}
        labelStyle={labelStyle}
        inputContainerStyle={{...inputContainerStyle,marginBottom: marginBottom,}}
        onChangeText={text => this.setText(text)}
        value={this.state.wantToEdit ? this.state.text : value}
        placeholderTextColor={Colors.inputs_placeholders}
        errorStyle={inputsError}
        errorMessage={this.state.error}
      />
    );
  }
}
