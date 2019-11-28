import React, { Component, Fragment } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import {TakePhoto} from 'ServiceProviders/TakePhoto'

import AntDesign from 'react-native-vector-icons/AntDesign'
import {camera } from "UIProps/Colors";
import { Transition } from "react-navigation-fluid-transitions";

import EStyleSheet from "react-native-extended-stylesheet";
import {Colors} from "UIProps/Colors";
import { withNavigation } from "react-navigation";
import Bottomsheet from "./Bottomsheet";

let valObj = {
  image: ""
};

let currentContext 
class ProfilePic extends Component {
  state = {
    profilePic: undefined
  };

  componentWillReceiveProps(nextProps){
      let {pic} = nextProps
      this.setState({profilePic:pic})
  }

  
  navigateProfile(){
    this.props.navigation.navigate('Profile')
    }

    tapFunc(){
      TakePhoto((resp) => {
        this.setState({profilePic:resp.uri})
      })
    }

  render() {
      let {profilePic} = this.state
      let {size,pic,style,showCameraIcon,canNavigateToProfile} = this.props
    return (
      <TouchableOpacity onPress={ ()=> canNavigateToProfile ? this.navigateProfile() : this.tapFunc() }>

      <View style={[styles.container,{...style},size && {width:size,height:size} ]}>
      <Transition shared='profilePic'>
          <Image style={{width:'100%',height:'100%',borderRadius:100}} resizeMode='cover' source={{uri:profilePic || pic}}  />
          </Transition>
          {showCameraIcon && 

          <View style={styles.circle}>
            <AntDesign name='camera' size={13} color={Colors.accent} />
          </View>
          }
      </View>
          </TouchableOpacity>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,


  container: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: Colors.dark,
    
    alignItems: "center",
    justifyContent: "center"
  },

  circle: {
    width:  20,
    height: 20,
    borderRadius: 100 / 2,
    backgroundColor: Colors.white,
    position:'absolute',
    bottom:5,
    right:0,
    alignItems: "center",
    justifyContent: "center"
  },
  
});
export default  withNavigation(ProfilePic)