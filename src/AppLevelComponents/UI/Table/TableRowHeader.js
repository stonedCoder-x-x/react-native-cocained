import React, { Component } from "react";
import { View, Text } from "react-native";
import { Row, Grid, Col } from "react-native-easy-grid";

import TableColumnTitle from "./TableColumnTitle";
import { Colors } from "UIProps/Colors";

import EStyleSheet from "react-native-extended-stylesheet";

export default class TableRowHeader extends Component {
  renderColumns(columnCounts, columns) {
    let {showActivate} = this.props
    if(showActivate){
      columnCounts +=1
    }
    columns.push('Active')
    let columnViews = [];
    for (let i = 0, len = columnCounts; i < len; i++) {
      let view = (
        <Col style={{borderColor:'#cfcfcf',borderWidth:0.4}}>
          <TableColumnTitle fontSize={this.props.fontSize} title={columns[i]} />
          
        </Col>
      );
      columnViews.push(view);
    }

    return columnViews;
  }

  render() {
    let { columnCounts, columns } = this.props;

    return (
      <Row style={styles.gridRow}>
        {this.renderColumns(columnCounts, columns)}
      </Row>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  gridRow: {
    width: "100%",
    alignItems: "flex-start",
    flex: 0
  }
});
