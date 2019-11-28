import React,{Component} from 'react'
import {View,TouchableWithoutFeedback,NativeModules,Image} from 'react-native'
import HelperMethods from 'Helpers/Methods'
import LoadingIndicator from '../../AppLevelComponents/UI/LoadingIndicator';
const { RNTwitterSignIn } = NativeModules;
export default class LoginTwitter extends Component {


  state ={
    isSignIn : false,
  }
    registerTwitter = () => {
      alert('Twitter login')
        return
        RNTwitterSignIn.init('VyIh2USQgMscLKe7A8JdsFHVa', 'KzNXGztdEAKAbO76RD4ngRHE4Udd1N6KGRf3HyAQXgqm04ZXG3')
        RNTwitterSignIn.logIn()
          .then(loginData => {

          const { authToken ,authTokenSecret  } = loginData
            if (authToken && authTokenSecret) {
              this.props.triggerSocialLoader(true)
              HelperMethods.socialLogin('t',loginData.email,loginData.name,'',2,UserDataHolder.fcmToken,(response)=>{
                this.props.triggerSocialLoader(false)
                if(response.Status == 1){
                  // alert(response.Payload.fullname)
                    let name = response.Payload.fullname
                    let id = response.Payload.user_id
                    let email = response.Payload.email
                    let mobile = response.Payload.mobile
                    let authToken = response.Payload.auth_token
                    let noh = response.Payload.noOfHomestays
                    let nob = response.Payload.noOfBookings
                    let nor = response.Payload.noOfReqHomestays
                    let penaltyStatus =  response.Payload.penaltyStatus
                    let referalCode = response.Payload.referal_code
                    let adhaar = response.Payload.adhaar
                    let profile = response.Payload.profile_image
                    HelperMethods.navigateHome(this.props.navigation,id,name,email,authToken,profile,mobile,'m',noh,nob,nor,penaltyStatus,referalCode,'false',adhaar)
                }
              })
            }
          })
          .catch(error => {
            console.warn(error)
          }
        )
    }


    renderIcon(){
      const {iconType,image,style} = this.props
      switch(iconType){
          case 'image':
            return <Image source={image} style={[{ width: 30, height: 30,...style }]} />
              case 'icon':
              return <FontAwesome name='twitter' style={styles.socialPlatform_icon} />
      }
  }

    render(){
        return(
            <View>
                <TouchableWithoutFeedback onPress={this.registerTwitter.bind(this)}>
                {this.state.isSignIn ? 
                <LoadingIndicator />
                 : 
                this.renderIcon()
                 }
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = {
    container:{
        flex:1,
        alignItems: 'center',
    },

    socialPlatform_icon:{
        color:global.primaryColor,
        fontSize:35
    },

}