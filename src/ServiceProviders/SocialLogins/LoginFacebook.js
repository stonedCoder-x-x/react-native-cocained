import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken,
} from 'react-native-fbsdk';
import Icons from 'AppLevelComponents/UI/Icons';
import {Colors} from 'UIProps/Colors';
import HelperMethods from 'Helpers/Methods'
import { withNavigation } from 'react-navigation';
import { UserInfoConsumer } from "AppLevelComponents/Contexts/CxtUserInfo";
import {storeUserInfo} from 'DataManagers/UserDataManager'
import {login} from 'ServiceProviders/ApiCaller'
import Loader from 'AppLevelComponents/UI/Loader'

let isApiCall = false
class LoginFacebook extends Component {

  state = {
    isApiCall:false,
  }
    constructor(props) {
      super(props)
    this.responseInfoCallback = this.responseInfoCallback.bind(this)
    };
    

  registerFB = () => {
      if(isApiCall){
            HelperMethods.snackbar('Previous call is in progress','OK',()=>{})
          return
      }

    // LoginManager.logOut();
    isApiCall = true
    this.setState({isApiCall:true})
    LoginManager.setLoginBehavior('WEB_ONLY');
    LoginManager.logInWithPermissions(['public_profile','email']).then(
      result => {
        
        if (result.isCancelled) {
            isApiCall = false
            this.setState({isApiCall:false})
        } else {
          this.getUserData();
        }
      },
      function(error) {
        isApiCall = false
        this.setState({isApiCall:false})

        HelperMethods.snackbar('Key hash error, Cannot signin')
        console.log('Login fail with error: ' + error);
      },
    );
  };

  getUserData() {
    AccessToken.getCurrentAccessToken().then(data => {
      let token = data.accessToken.toString();
      let obj = {
        accessToken: token,
        parameters: {
          fields: {
            string: 'email,name,picture.type(large)',
          },
        },
      };
      const infoRequest = new GraphRequest('/me',obj,this.responseInfoCallback);
      new GraphRequestManager().addRequest(infoRequest).start();
    });
  }

  responseInfoCallback(error, result) {
    isApiCall = false
    if (error) {
      console.warn('Facebook login error ' + error);
      return;
    } else {
      const {name, email, id} = result;
      const {pic} = result.picture.data.url;
      let data = {...result,...result.picture.data.url}
      this.loginApi(data)
    }
  }

  loginApi (data) {
        login(data.email,'','fb').then(resp => {
        this.setState({isApiCall:false})
          
          if(resp.response_code == 'INCORRECT_SIGNIN'){
            alert("Failed, User doesn't exist")
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
            name="facebook"
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
      <TouchableWithoutFeedback onPress={this.registerFB.bind(this)}>
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
export default withNavigation(LoginFacebook)