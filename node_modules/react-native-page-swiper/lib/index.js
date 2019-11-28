'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import { Animated, Dimensions, PanResponder, View } from 'react-native';

import Dots from './dots';

export default class Swiper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: props.index,
      scrollValue: new Animated.Value(props.index),
      viewWidth: Dimensions.get('window').width
    };
  }

  componentWillMount() {
    const release = (e, gestureState) => {
      const relativeGestureDistance = gestureState.dx / this.state.viewWidth;
      const { vx } = gestureState;

      let newIndex = this.state.index;

      if (relativeGestureDistance < -0.5 || relativeGestureDistance < 0 && vx <= -0.5) {
        newIndex = newIndex + 1;
      } else if (relativeGestureDistance > 0.5 || relativeGestureDistance > 0 && vx >= 0.5) {
        newIndex = newIndex - 1;
      }

      this.goToPage(newIndex);
    };

    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        const { threshold } = this.props;

        // Claim responder if it's a horizontal pan
        if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
          return true;
        }

        // and only if it exceeds the threshold
        if (threshold - Math.abs(gestureState.dx) > 0) {
          return false;
        }
      },

      // Touch is released, scroll to the one that you're closest to
      onPanResponderRelease: release,
      onPanResponderTerminate: release,

      // Dragging, move the view with the touch
      onPanResponderMove: (e, gestureState) => {
        let dx = gestureState.dx;
        let offsetX = -dx / this.state.viewWidth + this.state.index;

        this.state.scrollValue.setValue(offsetX);
      }
    });
  }

  goToPage(pageNumber) {
    // Don't scroll outside the bounds of the screens
    pageNumber = Math.max(0, Math.min(pageNumber, this.props.children.length - 1));
    this.setState({
      index: pageNumber
    });

    Animated.spring(this.state.scrollValue, { toValue: pageNumber, friction: this.props.springFriction, tension: this.props.springTension }).start();

    this.props.onPageChange(pageNumber);
  }

  handleLayout(event) {
    const { width } = event.nativeEvent.layout;

    if (width) {
      this.setState({ viewWidth: width });
    }
  }

  render() {
    const scenes = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { style: [child.props.style, { flex: 1 }] });
    });

    const translateX = this.state.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, -this.state.viewWidth]
    });

    const sceneContainerStyle = {
      width: this.state.viewWidth * this.props.children.length,
      flex: 1,
      flexDirection: 'row'
    };

    return React.createElement(
      View,
      { style: { flex: 1, overflow: 'hidden' }, onLayout: this.handleLayout.bind(this) },
      React.createElement(
        Animated.View,
        _extends({}, this._panResponder.panHandlers, {
          style: [sceneContainerStyle, { transform: [{ translateX }] }]
        }),
        scenes
      ),
      this.props.pager && React.createElement(Dots, {
        active: this.state.index,
        activeColor: this.props.activeDotColor,
        total: this.props.children.length,
        style: { position: 'absolute', bottom: 50, width: this.state.viewWidth }
      })
    );
  }
}
Swiper.propTypes = {
  children: React.PropTypes.node.isRequired,
  index: React.PropTypes.number,
  threshold: React.PropTypes.number,
  pager: React.PropTypes.bool,
  onPageChange: React.PropTypes.func,
  activeDotColor: React.PropTypes.string
};
Swiper.defaultProps = {
  index: 0,
  pager: true,
  threshold: 25,
  onPageChange: () => {},
  activeDotColor: 'blue'
};