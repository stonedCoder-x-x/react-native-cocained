import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import Container from 'AppLevelComponents/UI/Container';
import Logo from 'AppLevelComponents/UI/Logo';
import Header from "AppLevelComponents/UI/Header";
import {Colors} from 'UIProps/Colors';
import Constants from 'Helpers/Constants'
import {personaContainer} from 'UIProps/Styles';
import HelperMethods from 'Helpers/Methods'
import CustomText from 'AppLevelComponents/UI/CustomText';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomButton from 'AppLevelComponents/UI/CustomButton';
import Divider from 'AppLevelComponents/UI/Divider';
import Fonts from 'UIProps/Fonts';
import Email from 'AppLevelComponents/UI/FormInputs/Email';
import {forgotPassSendMail} from 'ServiceProviders/ApiCaller';
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
import SubHeader from '../../AppLevelComponents/UI/SubHeader';
let valObj = {
  email: '',
};

class ForgotPassword extends Component {
  state = {
    isApiCall: undefined,
  };

  sendMail = () => {
    this.setState({isApiCall: true});
    forgotPassSendMail(valObj.email)
      .then((resp, failed) => {
        // HelperMethods.animateLayout()
        HelperMethods.snackbar(`Please login with recovery password sent to your mail ${valObj.email}`,'OK',()=>{})
        AsyncStorageHandler.store(Constants.canResetPass,'true')
        this.props.navigation.goBack()
        this.setState({isApiCall: false,});
      })
      .catch(err => {
        this.setState({isApiCall: 'failed'});
      });
  };

  renderView() {
    let view;
      view = (
        <View style={[personaContainer, {padding: 15}]}>
        
          <View style={styles.containerInputs}>
            <View style={{marginTop: 15, marginBottom: 13}}>
              <CustomText
                text="Please enter your email address"
                color={Colors.black}
                size={20}
                font={Fonts.heavy}
              />

              <CustomText
                text="Temporary credentials will be sent to your mail, you can reset your password once your login with them."
                color={Colors.black}
                size={14}
                font={Fonts.light}
              />
            </View>
            <Email
              value={valObj.email}
              marginBottom={7}
              inputValueGetter={text => (valObj.email = text)}
            />
            <CustomButton
              onPress={this.sendMail}
              text="Send credentials"
              containerStyle={{marginVertical: 20}}
              isApiCall={this.state.isApiCall}
            />
          </View>
        </View>
      );
    return view;
  }

  render() {
    return (
      <Container padding={0} contentPadding={0} scroll={true}>
            <SubHeader title="Forgot password" type={Constants.header_back} />
        {this.renderView()}
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: '100%',
  $rem: global.rem,

  subContainer: {
    alignItems: 'center',
  },
});

export default withNavigation(ForgotPassword);
