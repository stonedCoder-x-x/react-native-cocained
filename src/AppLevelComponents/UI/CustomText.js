import React, { Component } from "react";
import { Text, Image } from "react-native";
import "Helpers/global";
import "Helpers/Methods";
import EStyleSheet from "react-native-extended-stylesheet";
import { LanguageConsumer } from "AppLevelComponents/LanguageSelector/LanguageContext";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import HelperMethods from "Helpers/Methods";
import Constants from "Helpers/Constants";


export default class CustomText extends Component {
  render() {
    let {
      size,
      onPress,
      textAlign,
      type,
      color,
      font,
      padding,
      singleLine,
      paddingHorizontal,
      text,
      style
    } = this.props;
    let rem = global.rem;
    switch (type) {
      case "title":
        font = Fonts.heavy;
        size = !size ? 21 : size;
        break;

      default:
          
        break;
    }

    padding = padding == undefined && 1

    let fontType 
    if(HelperMethods.isPlatformAndroid()){
      fontType = font || Fonts.medium
    } else {
      fontType = null
    }
    
    return (
      <LanguageConsumer>
        {context => {
          
          return (
            <Text
              numberOfLines={singleLine ? 1 : undefined}
              allowFontScaling={false}
              onPress={onPress ? () => onPress() : onPress}
              style={[
                styles.text,
                {
                  fontSize:size,
                  color: color || Colors.white,
                  fontFamily: fontType,
                  textAlign: textAlign ,
                  ...style
                }
              ]}
            >
              {text}
            </Text>
          );
        }}
      </LanguageConsumer>
    );
  }
}

const styles = EStyleSheet.create({
  text: {
    textAlign: "center"
  }
});
