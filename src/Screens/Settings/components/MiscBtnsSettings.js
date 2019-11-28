import React from "react";
import { View, Text } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Fonts from "UIProps/Fonts";
const MiscBtnsSettings = ({ name }) => {
  return (
    <CustomText
      font={Fonts.medium}
      text={name}
      size={15.5}
      color={"#12244d"}
      style={{ opacity: 0.6, marginVertical: 10 }}
    />
  );
};

export default MiscBtnsSettings;
