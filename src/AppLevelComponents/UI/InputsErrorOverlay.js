import React, { Component } from "react";
import { Text, View, } from "react-native";
import { Overlay, } from "react-native-elements";
import {Colors} from "UIProps/Colors";
import PowerTranslator from "react-native-power-translator";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import * as Animatable from "react-native-animatable";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import CustomText from 'AppLevelComponents/UI/CustomText'
export default class InputsErrorOverlay extends Component {
  state = {
    isVisible: false,
    
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.text.length > 0) {
      this.setHideTimeout();
    }
  }

  setHideTimeout() {
    
    this.setState({ isVisible: true });
    
  }

  render() {
    let { text } = this.props;
    return (
      <Animatable.View style={{alignItems:'center'}} animation="fadeIn" duration={2000}>
        <Overlay
          onBackdropPress={() => this.setState({ isVisible: false })}
          isVisible={this.state.isVisible}
          windowBackgroundColor="rgba(60, 7, 1, 0.5)"
          overlayBackgroundColor={Colors.lighter}
          width="auto"
          containerStyle={{alignItems:'center'}}
          height="auto"
        >
          <CustomText size={16} color="#B52B00" text={`${text}`} />
          <CustomText size={16} style={{padding:10}} color="#000" text={'CLOSE'} onPress={()=>this.setState({isVisible:false})} />
            
        </Overlay>
      </Animatable.View>
    );
  }
}
