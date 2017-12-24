import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

const Day = ({ date, appointment, fold, onClick }) => (
    <div 
        onClick={() => onClick(date)}
        className={`day ${fold ? 'day--fold' : ''} 
        ${appointment ? 'day--appointment' : ''}`}>
        <span>
            {moment(date).date()}
        </span>
    </div>
)

Day.PropTypes = {
    date: PropTypes.string.isRequired,
    fold: PropTypes.bool,
    onClick: PropTypes.func
}

export default Day;