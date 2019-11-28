import {Dimensions} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import Constants from 'Helpers/Constants'



const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({
$rem: entireScreenWidth / 380});

global.rem = EStyleSheet.value('$rem')

global.deviceWidth =  Dimensions.get('window').width
global.deviceHeight = Dimensions.get('window').height
global.fontFamily_regular = "proximaNova_regualr"
global.fontFamily_bold = "proximaNova_bold"
global.minPinchScale = 1
global.maxPinchScale = 2



