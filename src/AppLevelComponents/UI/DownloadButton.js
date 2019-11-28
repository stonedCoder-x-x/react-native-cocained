import React, {Component} from 'react';
import {Keyboard, View, PermissionsAndroid} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import 'Helpers/global';
import CustomButton from 'AppLevelComponents/UI/CustomButton';
import FileDownloader from 'ServiceProviders/FileDownloader';

export default class DownloadButton extends Component {

  state = {
    animation: '',
  };

  componentWillMount() {
    this.getPermission();
  }
  getPermission() {
    PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ],
      {
        title: 'Storage Permission',
        message: 'App needs access to memory to download the file ',
      },
    ).then(result => {
      if (result.fromArray().every((item, index) => item == 'granted')) {
        alert('all granted');
      } else {
        this.getPermission();
      }
    });
  }
  download = () => {
    const {url, } = this.props;
    FileDownloader(url)
  };

  render() {
    const {text} = this.props;
    return (
      <CustomButton
        onPress={this.download}
        text={text || 'DOWNLOAD ATTACHMENT'}
        containerStyle={{marginBottom: 60}}
      />
    );
  }
}
