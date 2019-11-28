import React, { Component } from "react";
import { Text, View } from "react-native";
import { withNavigation } from "react-navigation";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import EStyleSheet from "react-native-extended-stylesheet";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "UIProps/Colors";
export class Header extends Component {
  render() {
    const headerColorsMain = Colors.headerMain;
    const headerColorsNavigational = Colors.headerNavigational;
    const { headerType } = this.props;
    let gradientPropsMain = {
      start: { x: -2.4, y: 5 },
      end: { x: 1.25, y: 1 },
      locations: [0.6, 1],
      colors: headerColorsMain
    };

    let gradientPropsNavigational = { colors: headerColorsNavigational, locations: [0.45, 1], };

    let gradientSettings =
      headerType == "main" ? gradientPropsMain : gradientPropsNavigational;
    return (
      <View style={styles.headerBG}>
        <LinearGradient {...gradientSettings} style={styles.header}>
          {this.props.children}
        </LinearGradient>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,
  $borderRadius: 20,

  headerBG: {
    flex: 0,
    width: "100%",
    backgroundColor: Colors.contentCard
  },

  header: {
    // height: "200rem",
    flex: 0,
    width: "100%",
    borderBottomLeftRadius: "$borderRadius",
    borderBottomRightRadius: "$borderRadius"
  }
});

export default withNavigation(Header);
