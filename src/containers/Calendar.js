import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from '../components/Slider'
import NamedWeek from '../components/NamedWeek'
import Month from './Month'

class Calendar extends Component {
    render() {
        const { weekFormat } = this.props;
        return(
            <div className="calendar">
                <Slider />
                <NamedWeek 
                    weekFormat={weekFormat}/>
                <Month 
                    weekFormat={weekFormat}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    weekFormat: state.settings.week
  }
}


export default connect(mapStateToProps, null)(Calendar);