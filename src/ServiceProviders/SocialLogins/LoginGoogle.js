import React, {Component} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import HelperMethods from 'Helpers/Methods';
import {
  GoogleSignin,
} from 'react-native-google-signin';
import Icons from 'AppLevelComponents/UI/Icons';
import {Colors} from 'UIProps/Colors';
import firebase from 'react-native-firebase';
import { withNavigation } from 'react-navigation';
import { UserInfoConsumer } from "AppLevelComponents/Contexts/CxtUserInfo";
import {storeUserInfo} from 'DataManagers/UserDataManager'
import {login} from 'ServiceProviders/ApiCaller'
import Loader from 'AppLevelComponents/UI/Loader'

let currentContext

 class LoginGoogle extends Component {

  state = {
    isApiCall:false,
  }

  componentWillMount() {
    GoogleSignin.configure({
      webClientId:'382196809635-07alljnkbmlvr3vmf97qi96eianccsrd.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
    });
  }

  revokeAccess = async () => {
    this.setState({isApiCall:true})
    try {
      await GoogleSignin.signOut();
      GoogleSignin.signIn()
        .then(data => {
          const {photo,email,name,id} = data.user
          this.loginApi(data.user)
        })
        .catch(error => {
          this.setState({isApiCall:false})
          const {code, message} = error;
          // alert(JSON.stringify(message ))
        });
    } catch (error) {}
  };

  signIn = () => {
    this.revokeAccess();
  };


  loginApi (data) {
    login(data.email,'','google').then(resp => {
      this.setState({isApiCall:false})
      if(resp.response_code == 'INCORRECT_SIGNIN'){
        alert("Failed, User doesn't exist in database")
        return
      }
      currentContext.setUserData(resp.data)
          storeUserInfo(resp.data).then(()=>{
            this.props.navigation.navigate('DashboardStack')
          })
    }).catch(err => {
    })
}


  renderIcon() {
    const {iconType, image, style, size} = this.props;
    switch (iconType) {
      case 'image':
        return (
          <Image source={image} style={[{width: 30, height: 30}, style]} />
        );
      case 'icon':
        return (
          <Icons
            lib="FontAwesome"
            size={size || 20}
            color={Colors.accent}
            name="google"
            style={[styles.socialPlatform_icon, {left: -30}]}
          />
        );
    }
  }

  render() {
    const {backgroundViewStyle} = this.props;
    return (
      <UserInfoConsumer>
        {context => {
        currentContext = context
                        return(
      <TouchableWithoutFeedback onPress={this.signIn.bind(this)}>
        <View style={backgroundViewStyle}>{this.state.isApiCall ? <Loader size='small' />   : this.renderIcon()}</View>
      </TouchableWithoutFeedback>
                        )
        }}
        </UserInfoConsumer>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },

  socialPlatform_icon: {
    color: global.primaryColor,
    fontSize: 35,
  },
};

export default withNavigation(LoginGoogle)