'use strict';

var React = require('react-native');
import '../global'

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

buttonRounded: {
    backgroundColor:global.primaryColor,
    borderRadius:7,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
},

buttonText:{
    color:'#fff',
    fontFamily: global.fontFamily_regular,
    fontSize: 16,
    padding:3,
    paddingLeft:5,
    paddingRight:5
  },
  
});