import HelperMethods from 'Helpers/Methods';
import {AsyncStorage,Platform} from 'react-native'
import {storeToken,storeUserInfo} from 'DataManagers/UserDataManager'
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
let client_id = 1;
let client_secret = '76AAuoQVpLujL1CYCRGFGhKaPuW0FzySxBXxWmam';

export const login = function(username, password) {
  return new Promise(function(resolve, reject) {
    const formData = new FormData();
    formData.append('client_id', client_id);
    formData.append('client_secret', client_secret);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('grant_type', 'password');

    HelperMethods.makeNetworkCall('oauth/token',formData,(resp, isError) => {
        if (resp) {
          const {access_token} = resp
            if(access_token){
              storeToken(access_token).then(()=>{
                getUser(resolve)
              })
            }

        } else {
          reject(isError);
        }
      },
      'POST',true,
    );
  });
};


export const getUser = function(promise) {
  return new Promise(function(resolve, reject) {
    HelperMethods.makeNetworkCall(`api/user`,{},(resp, isError) => {
        if (!isError) {
          const {id,email} = resp
          getStudentInfo(id,promise,email)
        } else {
          reject(true);
        }
      },
      'GET'
    );
  });
};



export const getStudentInfo = function(id,promise,email) {
  return new Promise(function(resolve, reject) {
    HelperMethods.makeNetworkCall(`api/studentinfo/${id}`,{},(resp, isError) => {
        if (!isError) {
          storeUserInfo(resp).then(()=>{
            AsyncStorage.getItem("fcmToken").then(val=>{
              registerDevice(id,email,val)
              promise(resp);
           })

          })
        } else {
          reject(true);
        }
      },
      'GET'
    );
  });
};



export const forgotPassSendMail = function(email) {
    return new Promise(function(resolve, reject) {
      HelperMethods.makeNetworkCall(`api/forgotPassword/${email}`,{},(resp, isError) => {
          if (!isError) {
            resolve(resp);
          } else {
            reject(true);
          }
        },
        'GET',true
      );
    });
  };


  export const resetPass = function(email,pass) {
    return new Promise(function(resolve, reject) {
      HelperMethods.makeNetworkCall(`api/resetpassword/${email}/${pass}`,{},(resp, isError) => {
          if (!isError) {
            resolve(resp);
          } else {
            reject(true);
          }
        },
        'GET'
      );
    });
  };

  

  export const getEvents = function(id) {
    return new Promise(function(resolve, reject) {
      HelperMethods.makeNetworkCall(`api/academics/schoolevent`,{},(resp, isError) => {
          if (!isError) {
            resolve(resp);
          } else {
            reject(true);
          }
        },
        'GET'
      );
    });
  };

  export const getCurriculam = function(classId,session,date = 0) {
    return new Promise(function(resolve, reject) {
      HelperMethods.makeNetworkCall(`api/academics/curriculam/${date}/${classId}/${session}`,{},(resp, isError) => {
          if (!isError) {
            resolve(resp);
          } else {
            reject(true);
          }
        },
        'GET'
      );
    });
  };


  export const getChildPhotos = function(classId,sectionId,session,date = 0) {
    return new Promise(function(resolve, reject) {
      HelperMethods.makeNetworkCall(`api/academics/photograph/${date}/${classId}/${sectionId}/${session}`,{},(resp, isError) => {
          if (!isError) {
            resolve(resp);
          } else {
            reject(true);
          }
        },
        'GET'
      );
    });
  };


  export const getHolidays = function() {
    return new Promise(function(resolve, reject) {
      HelperMethods.makeNetworkCall(`api/holidaylist`,{},(resp, isError) => {
          if (!isError) {
            resolve(resp);
          } else {
            reject(true);
          }
        },
        'GET'
      );
    });
  };


  export const getMessages = function(userId) {
    return new Promise(function(resolve, reject) {
      HelperMethods.makeNetworkCall(`api/academics/message/${userId}`,{},(resp, isError) => {
          if (!isError) {
            resolve(resp);
          } else {
            reject(true);
          }
        },
        'GET'
      );
    });
  };


  export const getCircular = function(classId,sectionId,session,date = 0) {
    return new Promise(function(resolve, reject) {
      HelperMethods.makeNetworkCall(`api/academics/circular/${date}/${classId}/${sectionId}/${session}`,{},(resp, isError) => {
          if (!isError) {
            resolve(resp);
          } else {
            reject(true);
          }
        },
        'GET'
      );
    });
  };



  export const registerDevice = function(id,email,token) {
    return new Promise(function(resolve, reject) {
      const formData = new FormData();
      formData.append('user_id',id)
      formData.append('fcm_token',token)
      formData.append('email_address',email)
      formData.append('device_type',Platform.OS)
      
      HelperMethods.makeNetworkCall('api/registerDevice',formData,(resp, isError) => {
          if (resp) {
            // HelperMethods.snackbar('Device registered.')
            resolve(true)
          } else {
            reject(isError);
          }
        },
        'POST',
      );
    });
  };



