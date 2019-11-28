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

class ProfileLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {label} = this.props
    return (
      <View style={styles.container}>
        <CustomText text={label} size={16} color='#000' font={Fonts.medium} />
        
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: '100%',
  $rem : global.rem,

  container:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    backgroundColor:'#ffa921',
    paddingHorizontal: 17,
    paddingVertical: 1,
    marginBottom: 10,
  }
})

export default withNavigation(ProfileLabel);
