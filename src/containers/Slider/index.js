import React, { Component } from 'react';
import { connect } from 'react-redux';

import Arrow from './Arrow'

class Slider extends Component {
    render() {
        const { month, year } = this.props;

        return(
            <div>
                <Arrow type="left" onClick={() => {alert('1')}}/>
                <span>{month}</span><span>{year}</span>
                <Arrow type="right" onClick={() => {alert('2')}}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        month: state.slider.month,
        year: state.slider.year
    }
  }

export default connect(mapStateToProps, null)(Slider);
