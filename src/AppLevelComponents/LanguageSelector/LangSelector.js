import React, { Component } from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  ToastAndroid
} from "react-native";
import { LanguageConsumer } from "AppLevelComponents/LanguageSelector/LanguageContext";
import EStyleSheet from "react-native-extended-stylesheet";
import "Helpers/global";

import HelperMethods from "Helpers/Methods";
import ConnectionStatus from "AppLevelComponents/HOC/ConnectionListener";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import Container from "AppLevelComponents/UI/Container";
import Logo from "AppLevelComponents/UI/Logo";
import { Colors } from "UIProps/Colors";
import Constants from "Helpers/Constants";
import LanguageButtons from "./components/LanguageButtons";
import { PowerTranslator } from "react-native-power-translator";
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
import StorageConstants from "StorageHelpers/StorageConstants";
import NavigationService from "ServiceProviders/NavigationService";
import ScreenMemory from "AppLevelComponents/UI/ScreenMemory";

let languageContext;
let routeParams = {};
let counter = 2;
const ConnectionWrapper = ConnectionStatus(View);

export default class LangSelector extends Component {
  state = {
    languages: [
      { English: "en", image: require("assets/img/flags/english.png") },
      { Español: "es", image: require("assets/img/flags/spanish.png") },
      { Italiana: "it", image: require("assets/img/flags/italian.png") },
      { عربى: "ar", image: require("assets/img/flags/arabic.png") },
      { Française: "fr", image: require("assets/img/flags/french.png") }
    ],
    isApiCall: false,
    selectedLanguage: ""
  };

  static navigationOptions = ({ navigation }) => {
    const parent = navigation.dangerouslyGetParent();

    routeParams = parent.state.params;
  };

  componentWillMount() {
    this.getCurrentLanguage();

    let { isForLanguageChange } = routeParams ? routeParams : {};
  }

  translateLanguage(language, code) {
    this.setState({ selectedLanguage: language });
    HelperMethods.animateLayout();
    languageContext.changeLanguage(code, language);
    this.setState({});
  }

  getCurrentLanguage() {
    AsyncStorageHandler.get(StorageConstants.APPLANGUAGE, val => {
      let { name, code } = val;
      this.setState({ selectedLanguage: name || "English" });
    });
  }

  renderButtons = ({ item, index }) => {
    let langName = Object.keys(item)[0];
    return (
      <TouchableWithoutFeedback
        onPress={() => this.translateLanguage(langName, item[langName])}
      >
        <View>
          <LanguageButtons
            selected={this.state.selectedLanguage == langName}
            text={langName}
            image={item.image}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  proceed = () => {
    if (this.state.selectedLanguage) {
      AsyncStorageHandler.store(Constants.LANGUAGE_SELECTED, true);
      NavigationService.navigate("login", {});
    } else {
      HelperMethods.snackbar("Please select language", "", () => {}, "short");
    }
  };

  onBackPress = () => {
   HelperMethods.appExitPrompter()
  };

  render() {
    const { isApiCall } = this.state;
    return (
      <LanguageConsumer>
        {context => {
          languageContext = context;

          return (
            <ConnectionWrapper
              isApiCallCrashed={isApiCall}
              retryCall={this.translate}
            >
              <Container
                onBackPress={this.onBackPress}
              >
                {/* <Translation /> */}
                <ScreenMemory
                  screenParams={routeParams}
                  screen={Constants.screenSource_langSelector}
                >
                  <View
                    style={{
                     
                      width: "100%"
                    }}
                  >
                    <Logo
                      style={{ marginVertical: 14 * global.rem }}
                      width={200 * global.rem}
                      height={80 * global.rem}
                    />

                    <PowerTranslator
                      paddingHorizontal={-4}
                      size={20}
                      screenSource={Constants.screenSource_langSelector}
                      font="Swiss721 BT Bold"
                      style={{ textAlign: "left" }}
                      text="Choose Your Preferred Language"
                    />

                    <PowerTranslator
                      paddingHorizontal={-4}
                      size={17}
                      screenSource={Constants.screenSource_langSelector}
                      style={{ marginBottom: 10, textAlign: "left" }}
                      text="Please select your Language"
                    />

                    <FlatList
                      data={this.state.languages}
                      renderItem={this.renderButtons}
                      keyExtractor={(item, index) => index + ""}
                      extraData={this.state}
                    />

                    <CustomButton
                      onPress={this.proceed}
                      text="NEXT"
                      screenSource={Constants.screenSource_langSelector}
                      type={Constants.RIGHTARROWBTN}
                      containerStyle={{ marginVertical: 12 * global.rem }}
                      isApiCall={this.state.isApiCall}
                    />
                  </View>
                </ScreenMemory>
              </Container>
            </ConnectionWrapper>
          );
        }}
      </LanguageConsumer>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  container: {
    width: "$columnWidth"
  },
  picker: {
    width: "$columnWidth"
  },

  pickerItem: {
    color: "#fff"
  }
});
