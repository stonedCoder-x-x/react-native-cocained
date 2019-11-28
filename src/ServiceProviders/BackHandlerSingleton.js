import React, { Component } from "react";
import { BackHandler } from "react-native";
import { withNavigation } from "react-navigation";

let isTransitionInProgress = false;
class BackHandlerSingleton extends Component {
  constructor(props) {
    super(props);
    this.attachBackHandler();
    this.willFocusListener = this.props.navigation.addListener(
      "willFocus",
      this.willFocus
    );
    this.didFocusListener = this.props.navigation.addListener(
      "didFocus",
      this.didFocus
    );
    this.blurListener = this.props.navigation.addListener(
      "willBlur",
      this.willBlur
    );
  }

  didFocus = () => {
    isTransitionInProgress = false;
    this.attachBackHandler();
  };

  willFocus = () => {
    this.attachBackHandler();
    isTransitionInProgress = true;
  };

  willBlur = () => {
    this.removeBackHandler();
  };

  componentWillUnmount() {
    this.removeBackHandler();
    this.didFocusListener.remove();
    this.blurListener.remove();
  }

  attachBackHandler() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  removeBackHandler() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    if (isTransitionInProgress ) {
      return true;
    } else {
      if (this.props.onBackPress) {
        this.props.onBackPress();
        return true;
      } else {
        return false;
      }
    }
  };

  render() {
    return null;
  }
}

export default withNavigation(BackHandlerSingleton)
