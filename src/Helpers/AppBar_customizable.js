import React from 'react'
import './global'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header,Right,Button,Body,Left,Title} from 'native-base'
import PropTypes from 'prop-types'

const AppBar_customizable = ({showRightButton,title,backBtnFunc,headerColor}) => {
        return(
            <Header 
            androidStatusBarColor={headerColor == '#fff' ? 'rgb(160,160,160)' : global.primaryColor}
            style={{backgroundColor:headerColor}}>

                <Left style={{flex:1}}>
                    <Button transparent >
                        <AntDesign name='arrowleft' style={styles.headerIcons} />
                    </Button>
                </Left>
                
                <Body style={{alignItems:'center'}}>
                    <Title style={{color:headerColor =='#fff' ? '#000' : '#fff',fontFamily:global.fontFamily_regular}}>{title}</Title>
                </Body>

                <Right style={{flex:1}}>
                    {showRightButton &&
                        <Button transparent>
                            <MaterialCommunityIcons name='filter-variant' style={styles.headerIcons} />
                        </Button>
                    }
                </Right>
        </Header>
        )
}

const styles = {
    container:{
        width:global.deviceWidth,
        backgroundColor:"#eee",
        height:60,
        alignItems: 'center',
        marginBottom: 30,
        flexDirection: 'row',
    },

    appTitle:{
        color:global.primaryColor,
        fontSize: 19,
    },

    headerIcons:{
        fontSize:25,
        color:global.text_color_normal
    },
}

AppBar_customizable.propTypes = {
    showRightButton:PropTypes.bool.isRequired
}

export default AppBar_customizable