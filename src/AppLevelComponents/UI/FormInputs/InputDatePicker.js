import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Picker } from "react-native";
import { Input } from "react-native-elements";
import { Colors } from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import { labelStyleSignup } from "UIProps/Styles";
import "Helpers/global";
import DateTimePicker from "react-native-modal-datetime-picker";
import EStyleSheet from 'react-native-extended-stylesheet';
 
import HelperMethods from "Helpers/Methods";
import InputIcon from "./InputIcon";
import { PowerTranslator } from "react-native-power-translator";
import CustomText from "../CustomText";
import AntDesign from 'react-native-vector-icons/AntDesign'
export default class InputDatePicker extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    text: "",
    date:'',
    isDateTimePickerVisible:false,
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

  openDatePicker(){
    this.setState({ isDateTimePickerVisible: true });
  }

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleDatePicked = date => {
    let formatedDate = HelperMethods.formatDate_DMY(date)
    this.setState({date:formatedDate})
    this.props.inputValueGetter(formatedDate)    
    this.hideDateTimePicker();
  };

  render() {
    let { label,children,placeHolder,value } = this.props;
    let placeHolderTxt = value || label
    let placeHolderColor = value ? Colors.light : Colors.inputs_placeholders 
    return (
        <TouchableWithoutFeedback onPress={()=>this.openDatePicker()}>
      <View style={styles.container}>
      <View style={styles.labelEstyle}>
        <PowerTranslator padding={0} style={labelStyleSignup} text={label} color={Colors.light} textAlign="left" />
        </View>
        <View style={{borderBottomWidth:1,borderColor:Colors.inputBorder,flexDirection: 'row',alignItems:'center',justifyContent:'space-between'}}>
          <CustomText style={{marginVertical: 11,}} color={this.state.date ? Colors.light : placeHolderColor  }  text={this.state.date || placeHolderTxt} />
          <AntDesign
          style={{ paddingRight: 10 }}
          color={Colors.inputs_placeholders}
          name={'calendar'}
          size={ 20}
          />
        </View>
        
        <DateTimePicker
        
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>
          </TouchableWithoutFeedback>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: '100%',
  $rem : global.rem,

  labelEstyle:{
    marginTop:'10rem',

  },

  container:{

    marginTop:'14.2rem'
  }
})

