import React from 'react'
import {View} from 'react-native'
import '../Helpers/global'

const Line = (props) => {
        return(
            <View>

            {(props.lineTypeHorizontal == true) ?
                <View style={styles.line} />
                :
                <View style={styles.line_vertical} />
            }
            </View>
        )
}

const styles = {
    line:{
        width:null,
        height:1,
        width:global.deviceWidth,
        backgroundColor:'#eee'
    },
    line_vertical:{
        width:1,
        height:30,
        backgroundColor:'#777777',
        top:-50,
    }

}

export default Line