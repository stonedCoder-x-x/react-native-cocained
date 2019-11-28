import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import {Colors} from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import { inputStyles,inputStylesContainer, inputsError, inputContainerStyle } from "UIProps/Styles";
import 'Helpers/global'
import HelperMethods from 'Helpers/Methods'

import InputIcon from "./InputIcon";

export default class Username extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    text: ""
  };

  setText(text) {
    this.setState({ text,wantToEdit:true });
    InputValidations.validationUserName(text, (valid, error) => {
      if(this.state.error.length == 0 && !valid)
      HelperMethods.animateLayout()

        this.setState({ error });
      if (valid) {
        if(this.state.error.length > 0)
        HelperMethods.animateLayout()

        this.props.inputValueGetter(text);
      }
    });
  }

  render() {
    let {width,labelStyleAdditional,value} = this.props
    let label = {...labelStyle,...labelStyleAdditional}
    return (
      <Input
      label='Your Password'
        labelStyle={label}
        containerStyle={inputStylesContainer}
        leftIcon={<InputIcon icon='mail' />}
        onChangeText={text => this.setText(text)}
        value={this.state.wantToEdit ? this.state.text : value}
        placeholderTextColor={Colors.inputs_placeholders}
        inputContainerStyle={inputContainerStyle}
        inputStyle={inputStyles}
        placeholder="Name"
        errorStyle={inputsError}
        errorMessage={this.state.error}
      />
    );
  }
}
