import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
    text-align: center;
    font-size: 1.5em
    &:hover {
        background-color: #f1f1f1;
    }
`

const Arrow = ({ type, onClick}) => (
    <Container onClick={onClick}>
        <i className={`fa fa-angle-${type}`}></i>
    </Container>
)

Arrow.PropTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}

export default Arrow;