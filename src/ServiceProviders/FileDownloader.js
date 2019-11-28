import RNFetchBlob from 'react-native-fetch-blob';

import {ToastAndroid} from 'react-native'
export default FileDownloader = function(url){
  ToastAndroid.show("Downloading, Check notifications for progress", 1000);
    RNFetchBlob.config({
        addAndroidDownloads : {
          useDownloadManager : true,
          notification : true,
        },
        IOSBackgroundTask: true,
        overwrite: true,
        trusty:true,
        indicator: true,
        fileCache:true,
      })
        .fetch('GET', url, {
          //some headers ..
        })
}