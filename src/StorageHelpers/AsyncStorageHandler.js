import store from "react-native-simple-store";

const AsyncStorageHandler = {
  store: function(key, val,callback) {
    try {
      store.update(key, val).then(val => {callback(val)});
    } catch (error) {
      
      return false;
    }
  },

  get: function(key, callback) {
    try {
      store.get(key).then(res => {
        callback(res);
      });
    } catch (error) {
      alert(error);
    }
  },

  delete:function(key,callback){
    store.delete(key).then(()=>{
      callback()
    })
  }
};
export default AsyncStorageHandler;
