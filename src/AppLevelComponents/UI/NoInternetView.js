import React, { Component } from "react";
import { View, Text } from "react-native";
import CustomText from 'AppLevelComponents/UI/CustomText'
import CustomButton from "AppLevelComponents/UI/CustomButton";
export default class NoInternetView extends Component {
  state = {
    showOverlay:false,
  };

  render() {
    const {apiFunc,isApiCall,marginTop} = this.props
    return (
      <View style={{flex:1,marginTop:marginTop, justifyContent: "center",width:'100%',alignItems:'center' }}>
        {!isApiCall && 
        <CustomText color='#000' size={15} text="No internet connection" />
        }
        <CustomButton
                            onPress={apiFunc}
                            text="no connection - Retry"
                            containerStyle={{marginTop:10}}
                            isApiCall={false}
                          />
      </View>
    );
  }
}
