import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icons from "AppLevelComponents/UI/Icons";
import { withNavigation } from "react-navigation";

const goBack = navigation => {
  navigation.pop();
};
const BackBtnTransparent = ({ navigation,btnColor ='#fff' }) => {
  return (
      <View
          style={{
              position: "absolute",
              top: 0,
              left: 0,
              padding: 10,
              width:'100%',
              backgroundColor:'rgba(0,0,0,0.3)',
              justifyContent: "center",
              zIndex: 10
          }}
        >
                      <TouchableOpacity onPress={() => goBack(navigation)}>
          <Icons lib="AntDesign" name="arrowleft" size={24} color={btnColor} />
      </TouchableOpacity>
        </View>
  );
};

export default withNavigation(BackBtnTransparent);
