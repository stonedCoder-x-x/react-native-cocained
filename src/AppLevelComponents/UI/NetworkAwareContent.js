import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CustomText from 'AppLevelComponents/UI/CustomText';
import CustomButton from 'AppLevelComponents/UI/CustomButton';
import HelperMethods from 'Helpers/Methods';
import Loader from './Loader';
import NoInternetView from './NoInternetView';
import NoDataView from './NoDataView';

let marginTop = 50;
class NetworkAwareContent extends Component {
  constructor(props) {
    super(props);
    this.state = {view: undefined};
  }

  componentWillMount() {
    this.setInitalLoad();
  }

  setInitalLoad() {
    const {isApiCall, children, apiFunc} = this.props;

    HelperMethods.isConnected().then(connected => {
      if (connected) {
        this.drawView(true);
      } else {
        this.setState({
          view: (
            <NoInternetView
              isApiCall={isApiCall}
              apiFunc={apiFunc}
              marginTop={marginTop}
            />
          ),
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const {isApiCall, children} = nextProps;
    if (isApiCall) {
      HelperMethods.isConnected().then(connected => {
        if (connected) {
          this.drawView(isApiCall);
        } else {
          this.setState({
            view: (
              <NoInternetView
                isApiCall={false}
                apiFunc={apiFunc}
                marginTop={marginTop}
              />
            ),
          });
        }
      });
    } else {
      this.drawView(isApiCall, children);
    }
  }

  renderView() {
    const {isApiCall, apiFunc} = this.props;
  }

  drawView(isApiCall, children) {
    const {apiFunc} = this.props;
    let view;

    switch (isApiCall) {
      case true:
        view = <Loader style={{marginTop: marginTop}} />;
        break;
      case 'failed':
        view = (
          <CustomButton
            containerStyle={{
              width: '70%',
              marginTop: marginTop-30,
              alignSelf: 'center',
            }}
            onPress={apiFunc}
            text="failed - retry"
          />
        );
        break;

      default:
        view = children;
        break;
    }
    this.setState({view});
  }

  render() {
    const {isApiCall,data} = this.props
    return <View style={{flex:1}}>
    {!isApiCall && data.length == 0 ? 
    <NoDataView />
    :
    this.state.view
    }
    </View>;
  }
}

export default NetworkAwareContent;
