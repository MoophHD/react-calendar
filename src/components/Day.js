import React from 'react';
import PropTypes from 'prop-types';

const Day = ({ date, appointment, fold }) => (
    <div className={`day ${fold ? 'day--fold' : ''}`}>
        <span>
            {date}
        </span>
    </div>
)


Day.PropTypes = {
    date: PropTypes.number
}
export default Day;