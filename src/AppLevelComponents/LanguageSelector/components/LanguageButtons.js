import React, { Component } from "react";
import "Helpers/global";
import { TouchableWithoutFeedback, View, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import {Colors} from "UIProps/Colors";
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class LanguageButtons extends Component {

  renderCheckIcon() {
    return(
      <Ionicons name='md-checkmark' size={27} color={Colors.accent} />
    )
  }

  render() {
    const { text, width,selected, image } = this.props;
    
    return (
      
        <View style={styles.button}>
          <View style={{flexDirection:'row',alignItems:'center'}}>

          <Image source={image} style={styles.image} />
          <CustomText padding={1} paddingHorizontal={12} text={text} />
          </View>
          {/* {this.renderCheckIcon()}÷ */}
          {selected && this.renderCheckIcon()}
        </View>
      
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  button: {
    width:'100%',
    height: "54rem",
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: "20rem",
    alignItems: 'center',
    backgroundColor: Colors.darker,
    borderRadius: '6rem'
  },

  image: {
    width: "30rem",
    height: "20rem"
  }
});
