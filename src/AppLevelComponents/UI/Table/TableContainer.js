import React, { Component, Fragment } from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import "Helpers/global";
import EStyleSheet from "react-native-extended-stylesheet";
import { Row, Grid, Col } from "react-native-easy-grid";

export default class TableContainer extends Component {
  render() {
    return <Grid style={styles.gridContainer}>{this.props.children}</Grid>;
  }
}


const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  gridContainer: {
    width: "100%",
    flex: null,
    flexDirection: 'column',
  }
});
