import React, { Component } from "react";
import { View, Text } from "react-native";
import { Overlay } from "react-native-elements";
import {PowerTranslator} from 'react-native-power-translator'
export default class OverlayAbstraction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { closer, canClose, visible } = this.props;
    canClose = canClose == undefined && true;
    return (
      <Overlay
        width="auto"
        height="auto"
        onBackdropPress={() => canClose && closer()}
        isVisible={visible}
      >
        <PowerTranslator text="login.welcome" />
      </Overlay>
    );
  }
}
