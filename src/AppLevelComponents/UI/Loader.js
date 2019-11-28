import React from 'react'
import { View, Text,ActivityIndicator } from 'react-native'
import {Colors} from "UIProps/Colors";
const Loader = ({size,color,style}) => {
    return (
        <ActivityIndicator style={style} size={size || 'large' } color={color || Colors.accent} />
    )
}

export default Loader
