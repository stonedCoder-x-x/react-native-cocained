import React from "react";
import { View, Text } from "react-native";
import { Row, Grid, Col } from "react-native-easy-grid";

import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import CustomText from 'AppLevelComponents/UI/CustomText'
import EStyleSheet from "react-native-extended-stylesheet";

const TableColumnTitle = ({ title,fontSize }) => {
  return (
    <View style={{width:'100%',alignItems:'center',justifyContent:'center',padding:10,backgroundColor:Colors.accent}}>
      <CustomText text={title} size={fontSize || 17} color='#fff' font={Fonts.bold}  singleLine />
    </View>
  );
};

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  gridRow: {
    width: "100%",
    borderColor: "#404040",
    borderBottomWidth: 1,
    padding: 5,
    alignItems: "flex-start",
    flex: 0
  }
});

export default TableColumnTitle;
