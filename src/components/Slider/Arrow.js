import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
    text-align: center;
    font-size: 1.5em;
    background-color: transparent;
    padding: 0px 10px;
    border: none;
    margin-${props => props.type}: 50px;
    
    
`

const Arrow = ({ type, onClick}) => (
    <Container 
        type={type}
        onClick={onClick}>
        <i className={`fa fa-angle-${type}`}></i>
    </Container>
)

Arrow.PropTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}

export default Arrow;