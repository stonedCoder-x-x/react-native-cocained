import React from 'react'
import { View, Text } from 'react-native'
import CustomText from 'AppLevelComponents/UI/CustomText'
const NoDataView = () => {
    return (
        <View style={{alignItems:'center',width:'100%',marginTop:50}} >
            <CustomText textAlign='center' text='No data' color='#000' />
        </View>
    )
}

export default NoDataView
