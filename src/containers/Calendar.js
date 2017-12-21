import React, { Component } from 'react';
import Slider from '../components/Slider'
import NamedWeek from '../components/NamedWeek'
import Month from './Month'

export default class Calendar extends Component {
    render() {
        return(
            <div className="calendar">
                <Slider />
                <NamedWeek />
                <Month />
            </div>
        )
    }
}