import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Profile picture',
    
    storageOptions: { skipBackup: true, path: 'images', cameraRoll: true, waitUntilSaved: true }
  };


  export const TakePhoto = function(callback){
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          callback(source)
            // return source
          
        }
      });
  }