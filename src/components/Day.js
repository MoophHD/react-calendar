import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

const Day = ({ active, date, appointment, fold, onClick }) => (
    <div 
        onClick={() => onClick(moment(date).date())}
        className={`day ${fold ? 'day--fold' : ''} 
        ${active ? 'day--active' : ''}
        ${appointment ? 'day--appointment' : ''}`}>
        <span>
            {moment(date).date()}
        </span>
    </div>
)

Day.PropTypes = {
    date: PropTypes.string.isRequired,
    fold: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func
}

export default Day;