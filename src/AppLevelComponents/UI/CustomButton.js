import React, { Component } from "react";
import { Keyboard, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import * as Animatable from 'react-native-animatable';
import { Button } from "react-native-elements";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import Constants from "Helpers/Constants";

import AntDesign from "react-native-vector-icons/AntDesign";

export default class CustomButton extends Component {

  state ={
    animation:''
  }
  onPress() {
    let { onPress } = this.props;
    if (!onPress) {
      alert("Provide onpress prop");
      return;
    }
    onPress();
    Keyboard.dismiss();
  }

  componentWillReceiveProps(nextProps){
    const {isApiCall} = nextProps
      this.setState({animation:isApiCall == 'failed' ? 'shake' : '' } )
  }

  render() {
    let { text, isApiCall,font,buttonStyle,textStyle, width,isRightIcon,icon,borderRadius, containerStyle, textColor } = this.props;

    let title = text+` ${isApiCall == 'failed' ? '- Retry' : '' } `
    let fontType 
    if(HelperMethods.isPlatformAndroid()){
      fontType = font || Fonts.medium
    } else {
      fontType = null
    }
    return (
      <Animatable.View animation={this.state.animation} useNativeDriver={true} duration={600} style={{flex:1,...containerStyle}} >

      <Button
        disabled={isApiCall && isApiCall != 'failed' }
        onPress={() => this.onPress()}
        title={title.toUpperCase()}
        titleStyle={{fontFamily: fontType || Fonts.medium ,fontSize:13,...textStyle}}
        icon={
          isRightIcon && (
            <AntDesign
              name={icon}
              size={30}
              color="white"
              // style={{ paddingHorizontal: 8 }}
            />
          )
        }
        textColor={textColor || Colors.white}
        containerStyle={{
          width: width || "100%",
          borderRadius: borderRadius || 60,
          ...containerStyle
        }}
        buttonStyle={[
          styles.button,
          { borderRadius: borderRadius || 60,...buttonStyle }
        ]}
        loading={isApiCall && isApiCall != 'failed'}
      />
      </Animatable.View>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  button: {
    
    height: "44rem",
    justifyContent: 'center',
    backgroundColor: Colors.accent,
    borderRadius: 4
  }
});
