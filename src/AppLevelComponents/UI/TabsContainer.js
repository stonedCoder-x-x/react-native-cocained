import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import {TabView, SceneMap,TabBar} from 'react-native-tab-view';
import {Colors} from "UIProps/Colors";
import 'Helpers/global'
class TabsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'first', title: 'Upcoming shifts'},
        {key: 'second', title: 'Second'},
      ],
    };
  }

  render() {
    const {sceneMap,indexSetter} = this.props
    return (
      <TabView
      swipeEnabled={false}
          renderTabBar={props => (
            <TabBar
              {...props}
              labelStyle={{ color: '#000',  }}
              indicatorStyle={{backgroundColor: Colors.accent}}
              style={{backgroundColor: Colors.bluish }}
            />
          )}
          navigationState={this.props.state}
          renderScene={sceneMap}
          onIndexChange={index => indexSetter(index) }
          initialLayout={{width: global.deviceWidth}}
        />
    );
  }
}

export default TabsContainer;
