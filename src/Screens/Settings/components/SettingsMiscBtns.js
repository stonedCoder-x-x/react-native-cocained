import React, { Component } from "react";
import { Text, View } from "react-native";
import MiscBtnsSettings from "./MiscBtnsSettings";

export class SettingsMiscBtns extends Component {
  renderButtons(buttons) {
    let view = [];
    buttons.map((item, index) => {
      view.push(
        <MiscBtnsSettings
          name={item.name}
          onPressHandler={(navigate, screen, name) =>
            this.onPressHandler(navigate, screen, name)
          }
        />
      );
    });
    return view;
  }

  onPressHandler (navigate,screen,name) {
    if(navigate){
        this.props.navigation.navigate(screen)
    } else {
        //perform function here
        switch(name){
            // case ''
        }
    }
  }

  

  render() {
    const { buttons } = this.props;
    return <>{this.renderButtons(buttons)}</>;
  }
}

export default SettingsMiscBtns;
