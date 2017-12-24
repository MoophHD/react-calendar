import React from 'react';
import PropTypes from 'prop-types';

const Input = ({value, onChange, onBlur}) => (
    <textarea 
        className="appointment--input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => onBlur(value)}>
    </textarea>
)

Input.PropTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Input;