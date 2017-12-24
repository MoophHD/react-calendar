import React from 'react';
import PropTypes from 'prop-types';

const ButtonContainer = ({onSubmit, onClear, value}) => (
    <div
        className="appointment--btnContainer">
        <button 
            className="appointment--button appointment--button-submit"
            onClick={() => onSubmit(value)}>OK</button>
        <button 
            className="appointment--button appointment--button-clear"
            onClick={() => onClear()}>Clear</button>
    </div>
)

ButtonContainer.PropTypes = {
    onSubmit: PropTypes.func,
    onClear: PropTypes.func,
    value: PropTypes.string
}

export default ButtonContainer;