import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import {Colors} from "UIProps/Colors";
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
export default class InputIDNumber extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    
    text: "",
  };

  setText(text) {
    this.setState({wantToEdit:true})

    if(this.props.inputValueGetter == undefined){
      alert('Please provide input value getter function to this component')
      return
    }
    
    this.setState({ text,wantToEdit:true });
    InputValidations.validateOnlyNumerics(text, (valid, error) => {
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
    let {label,value} = this.props
    return (
      <Input
      label={label || "ID Number"}
      placeholder={label || "ID Number"}
      labelStyle={labelStyleSignup}
        containerStyle={inputStylesContainer}
        
        onChangeText={text => this.setText(text)}
        value={this.state.wantToEdit ? this.state.text : value}
        keyboardType='numeric'
        placeholderTextColor={Colors.inputs_placeholders}
        inputContainerStyle={inputContainerStyle}
        inputStyle={inputStyles}
        errorStyle={inputsError}
        errorMessage={this.state.error}
      />
    );
  }
}
