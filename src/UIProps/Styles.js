import 'Helpers/global'
import EStyleSheet from "react-native-extended-stylesheet";
import {Colors} from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
EStyleSheet.build({
  $rem: global.rem
});

export const inputStyles = EStyleSheet.create({
  fontSize:17*global.rem,
  color: Colors.black,
  backgroundColor:'#fff'
});

export let labelStyle = EStyleSheet.create({
  top:11,left:20,zIndex:1,
  fontFamily:Fonts.regular,
  color:'#000',
  alignSelf:'flex-start',
  width:null,
  backgroundColor:'rgba(255,255,255,0.8)',
  fontSize:14,
  fontWeight: "300",
});

export const inputStylesContainer = EStyleSheet.create({
  
  // padding: global.rem * 5,

  color: "#fff",
  alignSelf:'flex-start',
  
  marginTop:  20
});

export const inputErrors = {
  color: "red",
  fontSize: 24*global.rem,
  alignSelf: 'flex-start',
  textAlign:'left',
};

export const inputContainerStyle = {
  borderRadius: 4,
  borderWidth:1,
  borderColor: Colors.inputBorderColor,
  backgroundColor:'#fff',
  height:43,
};

export const cardStyle = {
  backgroundColor:Colors.noticeMsgBox,
      alignItems: "flex-start",
      margin:0,
      borderRadius: 5,
      marginVertical: 10,
}
export const personaContainer = {
    
    flex:1,
    width: "100%",
    backgroundColor: '#f7f7f9',
}

export const containerStyle = {
  flex: 1,
  padding:15*global.rem,
    backgroundColor: "#000"
  
}

export const containerContentStyle = {
 
alignItems: "center",flexGrow:1, paddingBottom:10,

  
}

