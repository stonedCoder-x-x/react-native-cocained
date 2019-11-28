import {
  Alert,
  AsyncStorage,
  BackHandler,
  Platform,
  Linking,
  LayoutAnimation,
  ToastAndroid
} from "react-native";
import Snackbar from 'react-native-snackbar'
import NetInfo from "@react-native-community/netinfo";
import axios from "axios";
import axiosCancel from 'axios-cancel';
import NavigationService from "ServiceProviders/NavigationService";
import { NavigationActions, StackActions } from "react-navigation";
import moment from "moment";
import "Helpers/global";
import { Colors } from "UIProps/Colors";
import Constants from 'Helpers/Constants'
import { storeToken, getToken } from 'DataManagers/UserDataManager'
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";

let timer;
// let baseUrl = 'http://192.168.29.212:80/'
let baseUrl = 'http://18.232.71.15/'
let counter = 2;

var CancelToken = axios.CancelToken;
var cancel;
const reqTimeout = 15000

const HelperMethods = {
  showAlert: function(
    message,
    btnPositive,
    btnNegative,
    onPress_btnNegative,
    onPress_btnPositive,
    buttonNeutral,
    onPressNeutral
  ) {
    Alert.alert(
      "Alert",
      message,
      [
        buttonNeutral != undefined && {
          text: buttonNeutral,
          onPress: () => onPressNeutral()
        },

        {
          text: btnNegative,
          onPress:
            onPress_btnNegative == "" ? () => {} : () => onPress_btnNegative(),
          style: "cancel"
        },
        { text: btnPositive, onPress: () => onPress_btnPositive() }
      ],
      { cancelable: false }
    );
  },

  animateLayout: function() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  },

  isPlatformAndroid: function() {
    return Platform.OS == "android";
  },

  isPlatformIos: function() {
    return Platform.OS == "ios";
  },

  isConnected:function(){
    return new Promise((resolve,reject) => {
      NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        resolve(state.isConnected)
      });
    })
    
  },

  makeNetworkCall: function(apiName, formData, callBack,method = 'GET',skipToken = false) {
    this.isConnected().then(connected => {
      if(!connected){
        callBack(false,true)
        this.snackbar('No internet connection')
      } else {
        if(skipToken){
          this.makeApiCall(apiName,formData,formData,callBack,method)
        } else {
          getToken().then((val) => {
            console.log(val)
          const Headers = { 'Authorization': `Bearer ${val}` }
          this.makeApiCall(apiName,Headers,formData,callBack,method)
        })
        }
      }
    })
  },

  promiseTimeout : function (msec,callBack) {
    if(timer){
      clearTimeout(timer)
    }

    return promise => {
      const timeout = new Promise((yea, nah) => {
       timer = setTimeout(() => {
        callBack(false,true)
        cancel();
      },msec)
    })
      return Promise.race([promise, timeout])
    }
  },

  makeApiCall:function(apiName,headers,formData,callBack,method){
    axios.interceptors.request.use(request => {
      console.log('Starting Request', request)
      return request
    })
  // axios.interceptors.response.use(response => console.log('reponse', response))
    this.promiseTimeout(reqTimeout,callBack)(axios({
      url: baseUrl+apiName,
      data:method == 'POST' ? formData : null ,
      headers,
      cancelToken: new CancelToken(
        function executor(c) {
            cancel = c;
         }),
      method,
    })
    .then((response) => {
      console.log(response)
      clearTimeout(timer)
      callBack(response.data, false);
    })
    .catch(error => {
      
      if(axios.isCancel(error)){
        this.snackbar(`Request timeout, please retry`,'OK',()=>{})
      } else {
        callBack(false, true);
        this.snackbar(`Api ${error}`,'OK',()=>{})
      }
    }))
  },

  logout: function(navigation) {
    AsyncStorageHandler.delete(Constants.userInfoObj,() => {
      navigation.navigate('LoginStack')
    })
  },

  navigateHome: function(){
  },

  snackbar: function(message, actionFuncTitle = 'OK', actionFunc = ()=>{}, length) {
    let snackLen = length == "short" ? Snackbar.LENGTH_SHORT : Snackbar.LENGTH_LONG;
    Snackbar.show({
      backgroundColor: Colors.accent,
      title: message,
      duration: snackLen,
      action: {
        title: actionFuncTitle,
        color: '#fff',
        onPress: () => {
          actionFunc();
        }
      }
    });
  },

  capitailizeFirst: (String.prototype = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }),

  openGMaps: function(lat, lng, label) {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    });
    const latLng = `${lat},${lng}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });
    Linking.openURL(url);
  },

  formatAMPM: function(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  },

  makeCall: function(mob) {
    Linking.openURL(`tel:${mob}`);
  },

  openAppinPS: function(packageName) {
    Linking.openURL("market://details?id=" + packageName + "&hl=en");
  },

  appExitPrompter: function() {
    if (counter == 2) {
      setTimeout(() => {
        counter = 2;
      }, 2000);
      ToastAndroid.show("Press again to Quit", 1000);
    }
    counter -= 1;
    if (counter == 0) BackHandler.exitApp();
  },

  switchToLangSelector: function() {
    NavigationService.navigate("langSelectorStack", {
      isForLanguageChange: true
    });
  },

  formatDate_DMY: function(date) { //requires date in format 2-2-2 or 2/2/2 with time or without time
    return moment(date).format("DD/MM/YYYY");
  },

  formatDate_Month_Date: function(date) { //requires date in format 2-2-2 or 2/2/2 with time or without time
    let month =  moment(date).format("mmmm");
    let dateNumber =  moment(date).format("d");
    return `${month} ${dateNumber}`
  }
};

export default HelperMethods;
