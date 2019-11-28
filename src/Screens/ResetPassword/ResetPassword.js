import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Container from "AppLevelComponents/UI/Container";
import Header from "AppLevelComponents/UI/Header";
import SubHeader from 'AppLevelComponents/UI/SubHeader';

import Logo from "AppLevelComponents/UI/Logo";
import HelperMethods from 'Helpers/Methods'
import { Colors } from "UIProps/Colors";
import { personaContainer } from "UIProps/Styles";
import CustomText from "AppLevelComponents/UI/CustomText";
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomButton from "AppLevelComponents/UI/CustomButton";
import Divider from "AppLevelComponents/UI/Divider";
import Fonts from "UIProps/Fonts";
import Email from "AppLevelComponents/UI/FormInputs/Email";
import Password from "AppLevelComponents/UI/FormInputs/Password";
import {resetPass,login} from 'ServiceProviders/ApiCaller'
import Icons from "../../AppLevelComponents/UI/Icons";
import AsyncStorageHandler from "../../StorageHelpers/AsyncStorageHandler";
import Constants from "../../Helpers/Constants";

let valObj = {
    email: "samyak@yopmail.com",
    password:'123456'
  };

 class ResetPassword extends Component {

    state = {
        isApiCall:undefined,
        passSent:false,
    }

    reset = () => {
        this.setState({isApiCall:true})
        resetPass(valObj.email,valObj.password).then((resp,failed) => {
          HelperMethods.snackbar('Reset successfull, Logging in','OK',()=>{})
          AsyncStorageHandler.delete(Constants.canResetPass)
          login(valObj.email,valObj.password).then(resp => {
            this.setState({isApiCall: false })
            this.props.navigation.navigate('AppStudent')
          })
        }).catch(err => {
        this.setState({isApiCall: 'failed' })
        })
    }

    skip = () => {
        this.props.navigation.navigate('AppStudent')
    }
    
    render() {
        return (
            <Container  padding={0} scroll={true}>
            <Header>
          <View>
            <SubHeader title="Reset password" type={Constants.header_back} />
          </View>
        </Header>
        <View style={[personaContainer, { padding: 15, }]}>
            <View style={{ marginTop: 15,marginBottom:13, }}>
              <CustomText
                text="Set a new password"
                color={Colors.black}
                size={20}
                font={Fonts.heavy}
              />

            </View>
            <Email value={valObj.email}  marginBottom={7} inputValueGetter={text => (valObj.email = text)} />
            <Password label='New Password' value={valObj.password} inputValueGetter={text => (valObj.password = text)} />

            <View style={styles.buttonContainer} >

            
                
            <CustomButton
              onPress={this.reset}
              text="Reset"
              containerStyle={{ marginVertical: 20,flex:1,width:'95%' }}
              isApiCall={this.state.isApiCall}
            />

<CustomButton
              onPress={this.skip}
              text="skip >"
              textStyle={{color:'#fff'}}
              buttonStyle={{backgroundColor:'#B1B1B1'}}
              containerStyle={{ marginVertical: 20,width:'90%',flex:0.4 }}
            />


            </View>

          </View>
      </Container>
        )
    }
}

const styles = EStyleSheet.create({
    $columnWidth: "100%",
    $rem: global.rem,
  
    subContainer: {
      alignItems: "center"
    },

    buttonContainer:{
        flexDirection: 'row',
        width:'100%',
        alignItems:'center',
    }
  
  });
  
export default withNavigation(ResetPassword)
