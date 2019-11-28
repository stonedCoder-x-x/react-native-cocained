import React,{Component} from 'react'
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native'
import CustomText from 'AppLevelComponents/UI/CustomText'
import Fonts from "UIProps/Fonts";
import {Colors} from "UIProps/Colors";
import Container from 'AppLevelComponents/UI/Container'
import HelperMethods from 'Helpers/Methods'
import { withNavigation } from 'react-navigation';
import { UserInfoConsumer } from "AppLevelComponents/Contexts/CxtUserInfo";

let btns = ['Settings','Logout']
let font = Fonts.medium
let btnViews = []
class SideDrawerContainer extends Component {

    state = {
    }

    navigate = screen => {
        this.props.closeSideBar()
        switch (screen){
            case 'Logout':
                HelperMethods.logout(this.props.navigation)
                break

                default:
                    this.props.navigation.navigate(screen)
                break
        }
    }

    renderBtns(){
        if(btnViews.length == 0){
            btns.map((item,index) => {
                btnViews.push(<CustomText text={item} color={Colors.lightBlack} font={font} onPress={this.navigate.bind(this,item)} style={{padding:14}} paddingHorizontal={10} />)
            })
            
        } 
        return btnViews
    }

    render(){
        return(
            <UserInfoConsumer>
                {context => {
                                return(
                                    
                              
            <Container padding={0}>
            
            <View style={styles.container}>
            <CustomText text={`Welcome, ${ context.userData.name || ''} `} style={{padding:14,backgroundColor:Colors.accent}} paddingHorizontal={10} color='#fff' />
            {this.renderBtns()}
                
            </View>
            </Container>
            )
                            }}
            </UserInfoConsumer>
        )
    }
}

const styles = {
    container:{
        flex:1,
        backgroundColor:'#fff',
        width:'100%'
    },
}

export default withNavigation(SideDrawerContainer)