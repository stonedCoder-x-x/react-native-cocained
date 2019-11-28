
import React from "react";
import { View, Text,TouchableWithoutFeedback } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Colors} from "UIProps/Colors";
const InputIcon = ({ icon, color,size,onPress }) => {
  return (
    <TouchableWithoutFeedback hitSlop={30} onPress={()=>onPress ? onPress() : null }>

    <Ionicons
      style={{ paddingRight: 10 }}
      color={color ? color : Colors.inputs_placeholders}
      name={icon}
      size={size ? size : 20}
      />
      </TouchableWithoutFeedback>
  );
};

export default InputIcon;
