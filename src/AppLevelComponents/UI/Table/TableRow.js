import React, { Component } from "react";
import { View, Text } from "react-native";
import { Row, Grid, Col } from "react-native-easy-grid";
import CustomText from 'AppLevelComponents/UI/CustomText'
import TableColumnTitle from "./TableColumnTitle";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import EStyleSheet from "react-native-extended-stylesheet";

let borderColor = '#cfcfcf'
export default class TableRow extends Component {
  renderColumns(columnCounts, columns,) {
   
    let {showActivate} = this.props
    let columnViews = [];
    for (let i = 0, len = columnCounts; i < len; i++) {
      let view = (
        <Col style={{ borderColor: borderColor, borderWidth: 0.4 }}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: 7,
              
            }}
          >
          <CustomText
              style={{fontFamily: Fonts.medium,}}
              text={columns[i]}
              size={14}
              textAlign='center'
              singleLine={true}
              color={Colors.dark}
              font={Fonts.Regular}
            />
          </View>
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
