import React, { Component } from "react";
import { LayoutAnimation, UIManager, Platform } from "react-native";
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
import StorageConstants from "StorageHelpers/StorageConstants";
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';
import Constants from 'Helpers/Constants'


export const LanguageContext = React.createContext();
export const LanguageConsumer = LanguageContext.Consumer;

let languageObj = { name: "", code: "" };
export class LanguageProvider extends Component {
  state = {
    language: undefined,
  selectedLanguage: "English"
  };

  componentWillMount(){
    this.getSetLang();
    TranslatorConfiguration.setConfig(ProviderTypes.Google, Constants.TRANSLATIONAPIKEY,'en');
  }
  componentDidMount() {
    Platform.OS == "android" &&
      UIManager.setLayoutAnimationEnabledExperimental(true);

    
  }

  getSetLang() {
    AsyncStorageHandler.get(StorageConstants.APPLANGUAGE, appLang => {
      if (appLang == undefined || !appLang.hasOwnProperty("name")) {
        const { selectedLanguage, language } = this.state;
        this.storeLang(selectedLanguage, language);
      } else {
        this.setState({language:appLang.code})
        this.changeLanguage(appLang.code, appLang.name);
      }
    });
  }

  changeLanguage = (language, langName) => {
    this.setState({language})
    TranslatorConfiguration.setConfig(ProviderTypes.Google, Constants.TRANSLATIONAPIKEY,language);
    this.storeLang(langName, language);
  };

  storeLang(langName, language) {
    languageObj.name = langName;
    languageObj.code = language;

    AsyncStorageHandler.store(StorageConstants.APPLANGUAGE, languageObj);
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{
          appLanguage: this.state.language,
          selectedLanguage: this.state.selectedLanguage,
          changeLanguage: this.changeLanguage,
          onLanguageChange:this.chan
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
