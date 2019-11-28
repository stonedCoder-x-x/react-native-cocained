import React, { Component } from 'react';
import { View,TouchableOpacity } from 'react-native';
import Bottomsheet from 'AppLevelComponents/UI/Bottomsheet';
import Fonts from "UIProps/Fonts";
import Icons from 'AppLevelComponents/UI/Icons'
import {Colors} from "UIProps/Colors";
import CustomText from 'AppLevelComponents/UI/CustomText'
import {TakePhoto} from '../../../ServiceProviders/TakePhoto'
import EStyleSheet from 'react-native-extended-stylesheet';
let iconsSize= 25
class BS_ImageSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  openCamera(){
   
  }

  openGallery(){

  }

  render() {
    return (
      <Bottomsheet>
        <View style={{alignItems:'center'}}>

          <View style={{height:100,flexDirection: 'row',alignItems: 'center'}}>

            <TouchableOpacity onPress={()=>this.openCamera()}>

            <View style={styles.iconContainer}>
              <Icons lib='AntDesign' color={Colors.accent}  name='camera' size={iconsSize} />  
              <CustomText text="Camera" size={16} color='#000' font={Fonts.medium} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.openGallery()}>
            <View style={styles.iconContainer}>
              <Icons lib='Material' color='#ffa921' name='google-photos' size={iconsSize} />  
              <CustomText text="Gallery" size={16} color='#000' font={Fonts.medium} />
            </View>
            </TouchableOpacity>

          </View>
        </View>
      </Bottomsheet>
    );
  }
}

const styles = EStyleSheet.create({
  iconContainer:{
    alignItems:'center',
    marginHorizontal: 40,
  }
})
export default BS_ImageSelection;
