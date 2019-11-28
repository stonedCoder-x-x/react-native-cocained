import React, { Component } from "react";
import { SafeAreaView, ScrollView, StatusBar} from "react-native";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import EStyleSheet from "react-native-extended-stylesheet";
import {Colors} from "UIProps/Colors";
import BackHandlerSingleton from "ServiceProviders/BackHandlerSingleton";
import { withNavigation } from "react-navigation";
 export default class Container extends Component {

  renderForIOS() {
    let {padding,style,contentPadding,scroll} = this.props
    return (
      <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors.accent,color:'#fff' }} />
      <SafeAreaView style={{ flex: 1,backgroundColor:Colors.contentCard, }}>
      <StatusBar translucent={true} barStyle="light-content" />
        <ScrollView
        scrollEnabled={scroll}
          style={[styles.container]}
          contentContainerStyle={{alignItems: "center",...style,padding:padding == 0 ? 0 : 15*global.rem,flex:1 }}
          keyboardShouldPersistTaps="always"
        >
          {this.props.children}
        </ScrollView>
      </SafeAreaView>
      </>
    );
  }

  renderForAndroid() {
    return (
      <>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />
      <ScrollView
      style={styles.container}
      contentContainerStyle={{flexGrow:1,alignItems: "center",}}
      keyboardShouldPersistTaps="always"
      >
        {this.props.children}
      </ScrollView>
      </>
    );
  }

  render() {
    
    return (
      <>
      {<BackHandlerSingleton  onBackPress={this.props.onBackPress} />}
        {HelperMethods.isPlatformAndroid()
          ? this.renderForAndroid()
          : this.renderForIOS()}
      </>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  container: {
    flex: 1,
    width:'100%',
    backgroundColor: Colors.pageBackground
  },

  contentContainerStyle:{
    alignItems: "center",flexGrow:1, paddingBottom:'10rem',
    
    
  }
});
