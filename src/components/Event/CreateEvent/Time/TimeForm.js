// basic usage
// in some react component
import React from 'react';
import TimePickerWrapper from 'react-times';

// use material theme
import 'react-times/css/material/default.css';
// or you can use classic theme
// import 'react-times/css/classic/default.css';

export default class TimeForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   const { defaultTime } = props;
  //   let hour = '';
  //   let minute = '';
  //   if (!defaultTime) {
  //     [hour, minute] = timeHelper.current().split(/:/);
  //   } else {
  //     [hour, minute] = defaultTime.split(/:/);
  //   }
  //
  //   this.state = {
  //     hour,
  //     minute
  //   };
  // }
  // // do some work
  // onHourChange(hour) {
  //   // do something
  //   console.log(hour);
  //   this.setState({ hour });
  // }
  //
  // onMinuteChange(minute) {
  //   // do something
  //   this.setState({ minute });
  // }
  //
  // onTimeChange(time) {
  //   // do something
  //   const [hour, minute] = time.split(':');
  //   this.setState({ hour, minute });
  // }
  //
  // onFocusChange(focusStatue) {
  //   // do something
  // }
  //
  // onMeridiemChange(meridiem) {
  //   // do something
  // }
  //
  // render() {
  //   const {
  //     hour,
  //     minute
  //   } = this.state;
  //   return(
  //   <TimePicker
  //     onFocusChange={this.onFocusChange.bind(this)}
  //     onHourChange={this.onHourChange.bind(this)}
  //     onMinuteChange={this.onMinuteChange.bind(this)}
  //     onTimeChange={this.onTimeChange.bind(this)}
  //     onMeridiemChange={this.onMeridiemChange.bind(this)}
  //     time={hour && minute ? `${hour}:${minute}` : null}
  //   />);
  // }

  render(){
    return (<TimePickerWrapper />);
  }
}