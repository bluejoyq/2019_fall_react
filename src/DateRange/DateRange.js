import React from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './DateRange.css';


export default class DateRange extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div className= 'pick'>
              <div className='start'>
              <div className='end'>대여 시작 일자</div>
              <DatePicker
                selected={this.props.startDate}
                onChange={date => this.props.setStartDate(date)}
                selectsStart
                startDate={this.props.startDate}
                endDate={this.props.endDate}
                minDate={new Date()}
                dateFormat="yyyy/MM/dd"
              />
              </div>
              <div className='start'>
              <div className='end'>대여 종료 일자</div>
              <DatePicker
                selected={this.props.endDate}
                onChange={date => this.props.setEndDate(date)}
                selectsEnd
                endDate={this.props.endDate}
                startDate={this.props.startDate}
                minDate={this.props.startDate}
                dateFormat="yyyy/MM/dd"
              />
              </div>
            </div>
          );
    }
    
}