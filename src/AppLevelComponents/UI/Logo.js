import React from "react";
import { View, Text, Image } from "react-native";

import "Helpers/global";
const Logo = ({ width, height,style }) => {
  return (
    <Image
      style={{
        ...style,
        width: width ? width : 70 * global.rem,
        height: height ? height : 70
      }}
      resizeMode="contain"
      source={require("assets/img/logo.png")}
    />
  );
};

export default Logo;
