import React, { Component } from "react";
import { Text, View } from "react-native";
import LanguageButtons from "AppLevelComponents/LanguageSelector/components/LanguageButtons";
import SettingBtn from "./SettingBtn";
import { withNavigation } from "react-navigation";
import HelperMethods from "../../../Helpers/Methods";

class ButtonsRenderer extends Component {
  renderButtons(buttons) {
    let view = [];
    buttons.map((item, index) => {
      view.push(<SettingBtn iconLib={item.iconLib} btnInfo={item.btnInfo} onPressHandler={() => this.onPressHandler(item.name)} text={item.name} icon={item.icon} />);
    });
    return view;
  }

  onPressHandler (name) {
        switch(name){
            case 'Logout':
            HelperMethods.logout(this.props.navigation)
            break
    }
  }

  render() {
    let { buttons } = this.props;
    return <>{this.renderButtons(buttons)}</>;
  }
}

export default withNavigation(ButtonsRenderer)
