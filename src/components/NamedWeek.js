import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const NamedWeek = ({weekFormat}) => (
    <div className="week">
        {weekFormat.map((num) => {
            return(<div 
                    key={`_namedWeekDayN${num}`}
                    className="day day--named">{moment().weekday(num).format('dd')}</div>)
        })}
    </div>
)

NamedWeek.PropTypes = {
    weekFormat: PropTypes.array
}

export default NamedWeek;