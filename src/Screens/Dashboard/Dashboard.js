import React, { Component } from "react";
import { Text, View } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import Fonts from "UIProps/Fonts";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";
import HelperMethods from "../../Helpers/Methods";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import SideDrawerContainer from 'AppLevelComponents/UI/SideDrawerContainer';

import Constants from 'Helpers/Constants'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isApiCall: false
    };
  }

  getData = () => {};

  onRefresh = () => {};
  
  
  onBackPress = () => {
    HelperMethods.appExitPrompter()
  };

  
  render() {
    return (
      <Container onBackPress={this.onBackPress} isApiCall={this.state.isApiCall} onRefresh={this.onRefresh}>
      <SubHeader title={'App name'} type={Constants.header_back} />
        <View style={{ width: "100%",alignItems:'center',padding:10 }}>
          <CustomText
            text="Dashboard"
            color="#000"
            font={Fonts.medium}
          />
          <NetworkAwareContent
            data={this.state.data}
            apiFunc={this.getData}
            isApiCall={this.state.isApiCall}
          ></NetworkAwareContent>
        </View>
      </Container>
    );
  }
}

export default Dashboard;
