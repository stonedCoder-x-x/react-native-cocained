import React, { Component } from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EvilIcons from "react-native-vector-icons/EvilIcons";

let iconSize = 23;
class Icons extends Component {
  returnIcon() {
    const { lib, name, color, size, style } = this.props;
    switch (lib) {
      case "AntDesign":
        return (
          <AntDesign
            name={name}
            size={size || iconSize}
            color={color || "#000"}
            style={style}
          />
        );

      case "FontAwesome":
        return (
          <FontAwesome
            name={name}
            size={size || iconSize}
            color={color || "#000"}
            style={style}
          />
        );

      case "Entypo":
        return (
          <Entypo
            style={style}
            name={name}
            size={size || iconSize}
            color={color || "#000"}
            style={style}
          />
        );

      case "Ionicons":
        return (
          <Ionicons
            name={name}
            size={size || iconSize}
            color={color || "#000"}
            style={style}
          />
        );

      case "Fontisto":
        return (
          <Fontisto
            name={name}
            size={size || iconSize}
            color={color || "#000"}
            style={style}
          />
        );

      case "Material":
        return (
          <MaterialCommunityIcons
            name={name}
            size={size || iconSize}
            color={color || "#000"}
            style={style}
          />
        );

      case "SimpleLine":
        return (
          <SimpleLineIcons
            name={name}
            size={size || iconSize}
            color={color || "#000"}
            style={style}
          />
        );

      case "FontAwesome5":
        return (
          <FontAwesome5
            name={name}
            size={size || iconSize}
            color={color || "#000"}
            style={style}
          />
        );

      case "EvilIcons":
        return (
          <EvilIcons
            name={name}
            size={size || iconSize}
            color={color || "#000"}
            style={style}
          />
        );

      case "Feather":
        return (
          <Feather
            name={name}
            size={size || iconSize}
            color={color || "#000"}
            style={style}
          />
        );

      default:
        alert(`No library found for lib - ${lib}`);
        break;
    }
  }

  render() {
    return <>{this.returnIcon()}</>;
  }
}

export default withNavigation(Icons);
