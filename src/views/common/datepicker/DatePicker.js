import { MuiPickersUtilsProvider,KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';

const DatePicker = props => {
    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
                id={props.id ? props.id : "date-picker-dialog"}
                className="date-css"
                disabled={props.disabled}
                value={props.value}
                onChange={props.change}
                clearable={props.clear !== undefined ? false : true}
                minDate={props.minDate !== null && props.minDate}
				        maxDate={props.maxDate !== null && props.maxDate}
                InputProps={{ readOnly: true }}
                disableToolbar={(props.format === 'month') ? true : false}
				        emptyLabel={props.format === "month" || props.format === "year-month"? "Select Month":"Select Date"}
                format={(props.format === 'year') ? 'yyyy' : (props.format === 'month') ? 'MMM' : (props.format === 'year-month')? 'yyyy-MM' : 'yyyy-MM-dd'}
                views={(props.format === 'year') ? ["year"] : (props.format === 'month') ? ["month"] : (props.format === 'year-month')? ["year","month"]:["year", "month", "date"]}
            />
        </MuiPickersUtilsProvider>
    )
}
export default DatePicker

