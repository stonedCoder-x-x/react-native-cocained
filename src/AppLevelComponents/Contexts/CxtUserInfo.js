import React, { Component } from "react";
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
import Constants from "Helpers/Constants";

export const UserInfoContext = React.createContext();
export const UserInfoConsumer = UserInfoContext.Consumer;

export class UserInfoProvider extends Component {
  state = {
  data:{},
  };

  componentWillMount() {
    AsyncStorageHandler.get(Constants.userInfoObj,val => {
      this.setUserData(val)
    })
  }

  setUserData = data => {
    this.setState({data})
  }

  render() {
    return (
      <UserInfoContext.Provider
        value={{
          userData:this.state.data,
          setUserData:this.setUserData
        }}>
        {this.props.children}
      </UserInfoContext.Provider>
    );
  }
}
