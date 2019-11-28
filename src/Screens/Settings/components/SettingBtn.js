import React, { Component } from "react";
import "Helpers/global";
import { TouchableWithoutFeedback, View, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import {Colors} from "UIProps/Colors";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Icons from 'AppLevelComponents/UI/Icons'
import Fonts from "UIProps/Fonts";
export default class SettingBtn extends Component {

  renderCheckIcon() {
    return(
      <View style={{position:'absolute',right:0}}>

      <Icons lib='EvilIcons' name='chevron-right' size={40} color={'#12244d'} />
      </View>
    )
  }

  render() {
    const { text,btnInfo,iconLib, width,selected, icon,onPressHandler } = this.props;
    return (
      <TouchableWithoutFeedback onPress={()=>onPressHandler()}>

        <View style={styles.button}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={styles.circle}>

            <Icons lib={iconLib} name={icon}  size={18} color={Colors.accent} />
            </View>
            <View>

            <CustomText paddingHorizontal={12} font={Fonts.medium} color={'#12244d'} size={16} text={text} />
            {btnInfo && 
            <CustomText paddingHorizontal={12} font={Fonts.medium} color={'#12244d'} size={14}  text={btnInfo} />
            }
            </View>
          </View>
          {text != 'Logout' && 
          this.renderCheckIcon()
        }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  button: {
    width:'100%',
    height: "54rem",
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  circle: {
      width:  35,
      height: 35,
      borderRadius: 100 / 2,
      backgroundColor: 'rgba(70,176,253,0.4)',
      alignItems: "center",
      justifyContent: "center"
    },

  image: {
    width: "30rem",
    height: "20rem"
  }
});
