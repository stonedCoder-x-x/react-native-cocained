import React, { Component } from "react";
import { Text, View, Picker } from "react-native";
import { Input } from "react-native-elements";
import { Colors } from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import { labelStyleSignup } from "UIProps/Styles";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import InputIcon from "./InputIcon";
import EStyleSheet from 'react-native-extended-stylesheet';
import { PowerTranslator } from "react-native-power-translator";
export default class InputPicker extends Component {
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
    InputValidations.validateEmail(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();

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
    let { label,value,children } = this.props;
    
    return (
      <View style={styles.container}>
        <View style={styles.labelEstyle}>
        <PowerTranslator padding={0} style={[labelStyleSignup,]} text={label} color={Colors.light} textAlign="left" />
        </View>
          
        <View style={{borderBottomWidth:1,borderColor:'#86939e'}}>
          {children}
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: '100%',
  $rem : global.rem,

  labelEstyle:{
    marginTop:'10rem',
    marginBottom: '-6rem',
    marginTop: '0rem',
  },

  container:{
    marginTop:'14.2rem'
  }
})
