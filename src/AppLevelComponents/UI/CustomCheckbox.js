import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import {Colors} from "UIProps/Colors";
import CustomText from "./CustomText";
import "Helpers/global";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {PowerTranslator} from 'react-native-power-translator'
export default class CustomCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  updateCheck() {
    this.setState({ checked: !this.state.checked }, () => {
      this.props.checkedStatusGetter(this.state.checked);
    });
  }
  renderCheckbox(text) {
    let {checked} = this.state
    let {textSize} = this.props
    if (text) {
      return (
        <TouchableOpacity onPress={() => this.updateCheck()}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={this.state.checked ? styles.checked : styles.unchecked}
            >
              {checked && 
              <Ionicons name='md-checkmark' size={20} color={Colors.white} />
              }
            </View>
            <PowerTranslator paddingHorizontal={11} size={textSize} text={text} />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this.updateCheck()}>
          <View
            style={this.state.checked ? styles.checked : styles.unchecked}
          >
            {checked && 
              <Ionicons name='md-checkmark' size={18} color={Colors.white} />
              }
          </View>
        </TouchableOpacity>
      );
    }
  }

  render() {
    let { text } = this.props;
    return <>{this.renderCheckbox(text)}</>;
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  checked: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100 / 2,
    backgroundColor: Colors.accent
  },

  unchecked: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100 / 2,
    backgroundColor: Colors.dark
  }
});
