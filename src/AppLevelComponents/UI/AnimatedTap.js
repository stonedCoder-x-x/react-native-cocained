import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { thisExpression } from "@babel/types";

let negativeScale = 0.9;
let defaultScale = 1;
let animDuration = 100;
export default class AnimatedTap extends Component {
  state = {
    animatePress: new Animated.Value(1)
  };

  scaleInHold() {
    Animated.spring(this.state.animatePress, {
      toValue: negativeScale - 0.1,
      duration: animDuration,
      useNativeDriver: true
    }).start(() => {
      this.cutInAnimation();
    });
  }

  animateIn(isBtnToggled) {
    Animated.timing(this.state.animatePress, {
      toValue: isBtnToggled ?  negativeScale + 0.3 : negativeScale,
      duration: animDuration,
      useNativeDriver: true
    }).start(() => {});
    this.cutInAnimation();
  }

  cutInAnimation() {
    setTimeout(() => {
      
      
      this.animateOut();
    }, 100);
  }
  animateOut() {
    // this.props.pressHandler()
    const { onPress } = this.props;
    setTimeout(()=>{

      onPress();
    },5)
    Animated.timing(this.state.animatePress, {
      toValue: defaultScale,
      friction: 2,
      tension: 0,
      useNativeDriver: true,
      duration: animDuration
    }).start(() => {});
  }

  render() {
      const {isSelected} = this.props
    return (
      <TouchableWithoutFeedback
        onLongPress={() => this.scaleInHold()}
        onPress={() => this.animateIn(isSelected)}
      >
        <Animated.View
          style={{
            transform: [
              {
                scale: this.state.animatePress
              }
            ]
          }}
        >
          {this.props.children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  container: {
    borderWidth: 1,
    borderColor: global.primaryColor,
    margin: 5,
    borderRadius: 5
  }
};
