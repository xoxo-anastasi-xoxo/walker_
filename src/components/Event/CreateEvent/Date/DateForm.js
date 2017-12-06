import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import './Date.css'
import 'react-dates/initialize';
import SingleDatePickerWrapper  from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import {connect} from 'react-redux'


class DateForm extends React.Component {
render() {
  return (
    <div>
      <p className="date__title">Дата</p>
      <DayPickerInput onDayChange={day => {
        console.log("ДАААТАААА");
        this.props.update(day);
      }}
                      formatDate={formatDate}
                      parseDate={parseDate}
                      placeholder={`${formatDate(new Date())}`}
      />
    </div>

  );
}
}

const mapStateToProps = state => ({
  ourEvent: state.page
});

const mapDispatchToProps = dispatch => ({
  update: (data) => dispatch({
    type: 'UPDATE_DATE',
    data: data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(DateForm);