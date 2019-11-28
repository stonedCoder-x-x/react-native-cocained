import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Container from "AppLevelComponents/UI/Container";
import Logo from "AppLevelComponents/UI/Logo";
import { Colors } from "UIProps/Colors";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import Divider from "AppLevelComponents/UI/Divider";
import Header from "AppLevelComponents/UI/Header";

import Fonts from "UIProps/Fonts";
import Email from "AppLevelComponents/UI/FormInputs/Email";
import Password from "AppLevelComponents/UI/FormInputs/Password";
import ProfilePic from "AppLevelComponents/UI/ProfilePic";
import Constants from 'Helpers/Constants'


class InfoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      let {title,info} = this.props
    return (
      <View style={{alignSelf:'flex-start',marginVertical:10,}}>
        <CustomText textAlign="left" style={{marginTop:5}} text={title} size={14} color='#707071' font={Fonts.heavy}  />
        <CustomText textAlign="left" style={{marginTop:5}} text={info} size= {15} color='#000'  font={Fonts.heavy}  />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: '100%',
  $rem : global.rem,

  
})
export default withNavigation(InfoItem);
