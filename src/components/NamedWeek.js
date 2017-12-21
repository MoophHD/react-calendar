import React from 'react';

const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const NamedWeek = () => (
    <div className="week">
        {week.map((day) => {
            return(<div className="day day--named">{day}</div>)
        })}
    </div>
)

export default NamedWeek;