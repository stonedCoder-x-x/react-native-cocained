import React, {Component} from 'react';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker';
import HelperMethods from 'Helpers/Methods';
import {Colors} from "UIProps/Colors";

export class Datepicker extends Component {
  state = {
    date: undefined,
    currentDate:undefined
  };

  componentWillMount() {
    let date = HelperMethods.formatDate_DMY(new Date());
    this.setState({currentDate:date});
  }

  setDate(date) {
    const {dateGetter} = this.props;
    this.setState({date});
    dateGetter(date);
  }
  render() {
    return (
      <DatePicker
        style={styles.calendarDob}
        date={this.state.date}
        mode="date"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        
        format="DD/MM/YYYY"
        minDate={this.state.currentDate}
        maxDate={'12/12/2030'}
        customStyles={{
          dateText: {
            color: '#000',
          },
          btnTextConfirm:{
            color:Colors.accent
          }
        }}
        onDateChange={date => {
          this.setDate(date);
        }}
      />
    );
  }
}

const styles = {
  calendarDob: {
    borderWidth: 0,
  },
};

export default Datepicker;
