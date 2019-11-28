import React from 'react'
import {View,Text} from 'react-native'
 import {Button} from 'native-base'
 import Modal from 'react-native-modalbox';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import '../Helpers/global'

const ComfirmationBox = (props) => {
        return(
            <Modal 
            isOpen={props.showConfirmModal}
            backButtonClose={true} 
            swipeToClose={true}
            onClosed={props.closeConfirmationModalHandler}
            style={[styles.modal]} 
            position={"center"}
            backdropPressToClose={true}
            backdrop={true}>

                <Text style={styles.modal_title}>Confirm?</Text>

                <Text style={styles.modal_body}>
                    Before we start, remember that you have uploaded clear images and correct information of homestay
                </Text>

                <View style={{alignSelf:'flex-end',flexDirection:'row'}}>
                    <Button style={styles.button_cancel} onPress={props.cancelHandler}>
                        <FontAwesome active name='close' style={styles.btn_icons} />
                    </Button>

                    <Button style={styles.buttonComfirm} onPress={props.confirmHandler}>
                        <FontAwesome active name='check' style={styles.btn_icons} />
                    </Button>
                </View>
            </Modal>
        )
}

const styles = {
    modal: {
        padding: 20,
        borderRadius:10,
        height:undefined,
        width:global.deviceWidth-30,
        elevation:10,
      },

      modal_title:{
        fontSize:21,
        color:global.text_color_dark,
        fontFamily: global.fontFamily_regular,
      },

      modal_body:{
        fontSize:17,
        color:global.text_color_light,
        fontFamily:global.fontFamily_regular,
        marginTop: 20,
        marginBottom: 10,
      },

    buttonComfirm:{
        width: 50,
        height: 50,
        borderRadius: 100/2,
        backgroundColor: global.primaryColor,
        justifyContent: 'center',
        alignItems:'center'
    },

    button_cancel:{
        width: 50,
        height: 50,
        borderRadius: 100/2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems:'center',
        right:10
    },

    btn_icons:{
        fontSize:20,
        color:'#fff'
    },


}

export default ComfirmationBox