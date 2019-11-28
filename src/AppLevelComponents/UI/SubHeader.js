import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { withNavigation } from "react-navigation";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Constants from "Helpers/Constants";
import Fonts from "UIProps/Fonts";
import "Helpers/global";
import * as Animatable from "react-native-animatable";
import {UserInfoConsumer} from 'AppLevelComponents/Contexts/CxtUserInfo';

import ProfilePic from "./ProfilePic";
import Icons from "./Icons";
import HelperMethods from "Helpers/Methods";

let  currentContext
class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSubheader() {
    let { type } = this.props;

    switch (type) {
      case Constants.header_back_middle_right:
        return this.header_back_middle_right();

      case Constants.header_back:
        return this.header_back();
        
      default:
        return this.main();
    }
  }

  navigateProfile() {
    this.props.navigation.navigate("Profile");
  }

  goBack() {
    this.props.navigation.pop();
  }

  main() {
    const { unreadNotifications } = this.props;
    return (
      <UserInfoConsumer>
  {context => {
  currentContext = context
                  return(
                      
                 
      <>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <TouchableWithoutFeedback onPress={() => this.navigateProfile()}>
              <View style={styles.holoCirlce_large}>
                <View style={styles.holoCirlce_small} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <TouchableOpacity onPress={() =>  this.props.navigation.navigate('NotificationsHistory')  }>
            <Animatable.View
              animation="swing"
              iterationCount={1}
              delay={600}
              duration={1000}
            >
              <Icons lib='Feather' name="message-square" size={23} color="#fff" />

              {unreadNotifications && (
                <View style={{ position: "absolute", right: 0, top: 0 }}>
                  <View style={styles.bellCircle} />
                </View>
              )}
            </Animatable.View>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={() => this.navigateProfile()}>
            <View style={styles.absProfilePic}>
              <ProfilePic
                canNavigateToProfile
                size={25}
                pic="https://images.pexels.com/photos/1877913/pexels-photo-1877913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />

              <CustomText
                font="AvenirLTStd-Heavy"
                size={17}
                text={`   Hi, ${context.userData.name}`}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </>
      )
              }}
      </UserInfoConsumer>

    );
  }

  navigateSettings(){
    this.props.navigation.navigate('Settings')
  }
  header_back_middle_right() {
    let { title,leftIcon,rightIcon } = this.props;
    return (
      <>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => this.goBack()}>
            <View>
              <Icons lib='Feather' name={leftIcon || 'chevron-left'} size={24} color="#000" />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <CustomText text={title} font={Fonts.heavy} size={17} color="#000" />
        </View>
        <TouchableOpacity onPress={() => this.navigateSettings()}>
          <View>
            <Icons lib='SimpleLine' name={rightIcon || 'settings'} size={24} color="#000" />
          </View>
        </TouchableOpacity>
      </>
    );
  }

  header_back() {
    let { title,style,leftIcon } = this.props;
    return (
      <>
        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={() => this.goBack()}>
            <View>
            <Icons lib='Feather' name={leftIcon || 'chevron-left'} size={30} color="#000" />
            </View>

            <View>
          <CustomText text={title} style={{paddingLeft:10}} font={Fonts.heavy} size={18} color="#000" />
        </View>

          </TouchableOpacity>

        

        </View>

        
      </>
    );
  }

  render() {
    let { type,style,hideShadow } = this.props;
    return <View style={[styles.container,{elevation:hideShadow ? 0 : 4},style]}>{this.renderSubheader()}</View>;
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,
  $smallCircle: 103,
  $largeCircle: 210,
  $borderRadius: 20,

  container: {
    width: "100%",
    backgroundColor:'#fff',
    height: "50rem",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10rem",
    flexDirection: "row"
  },

  absProfilePic: {
    alignItems: "center",
    top: 0,
    left: 0,
    marginTop: 12,
    marginLeft: 12,
    position: "absolute",
    flexDirection: "row"
  },

  image: {
    width: "30rem",
    height: "30rem",
    borderRadius: "100rem"
  },

  holoCirlce_small: {
    width: "$smallCircle",
    height: "$smallCircle",

    borderRadius: 100,
    alignItems: "flex-end",
    justifyContent: "center",
    borderWidth: 17,
    borderColor: "rgba(109, 193, 254, 0.5)"
  },

  holoCirlce_large: {
    width: "$largeCircle",

    height: "$largeCircle",

    borderRadius: 300,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 26,
    borderColor: "rgba(109, 193, 254, 0.5)",

    marginLeft: -85
  },

  bellCircle: {
    width: 8,
    height: 8,
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#ff8341",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withNavigation(SubHeader);