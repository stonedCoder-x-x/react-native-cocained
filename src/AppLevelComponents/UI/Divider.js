import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Colors} from "UIProps/Colors";
class Divider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      let {width,color,style} = this.props
    return (
      <View style={{flex:1 ,height:1,backgroundColor:color ||  Colors.dividerColor,...style}} />
        
      
    );
  }
}

export default withNavigation(Divider);
