import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import Day from '../components/Day'

const cells = 7 * 6; // 7 days per each of 6 rows 

class Month extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            foldTop: [],
            middle: [],
            foldBottom: []
        }
    }

    setDays(dt, weekFormat) {
        function shift(target) { // 0..30  >> 1..31
            target.pop();
            target.push(target[target.length-1] + 1);
        }
        
        dt = moment(dt);
        let mid = Array.from(Array(dt.daysInMonth()).keys());

        let fstDayNum = parseInt(dt.startOf('month').format('d')) + 1; // 0..6 >> 1..7
        let fstDayOrder = weekFormat.indexOf(fstDayNum) + 1;
        console.log(fstDayNum)
        console.log(fstDayOrder);

        let lstDayNum = parseInt(dt.endOf('month').format('d')) + 1;
        let lstDayOrder = weekFormat.indexOf(lstDayNum) + 1;
        // console.log(lstDayNum)
        // console.log(lstDayOrder)

        // |                                          |  
        let fTopInit = Array.from(Array(dt.clone().subtract(1, 'M').daysInMonth()).keys());
        shift(fTopInit);
        let fTop = fTopInit.slice(fTopInit.length - lstDayOrder);

                                    // |                                     |  
        let fBotInit = Array.from(Array(dt.clone().add(1, 'M').daysInMonth()).keys());
        shift(fBotInit);
        let fBot = fBotInit.slice(lstDayOrder, 7);
        
        if ((mid.length + fTop.length + fBot.length) < cells ) {
            if (fTop.length > fBot.length) { //then add a week to bottom
                fBot = [fBotInit.slice(8, 14), ...fBot];
            } else {
                fTop = [...fTop, fTopInit.slice(-fTop.length, -fTop.length-7)];
            }
        }

        shift(mid);

        fTop.sort((a, b) => a - b);
        mid.sort((a, b) => a - b);
        fBot.sort((a, b) => b - a);

        this.setState(() => {return{
            foldTop: fTop,
            middle: mid,
            foldBottom: fBot
        }})
    }

    componentWillReceiveProps(nextProps) {
        this.setDays(nextProps.dt, nextProps.weekFormat);
    }

    componentDidMount() {
        this.setDays(this.props.dt, this.props.weekFormat);
    }

    render() {
        const { foldTop, middle, foldBottom } = this.state;
        let { dt } = this.props;

        dt = moment(dt);

        let loopDt = dt.clone().subtract(1, 'M').format();

        let fTop = foldTop.map( day => {
            return (<Day 
                        key={`_fTop${day}`}
                        date={moment(loopDt).date(day).format()}
                        fold={true}/>)
        })

        loopDt = dt.clone();
        let mid = middle.map( day => {
            return (<Day 
                        key={`_middle${day}`}
                        date={loopDt.date(day).format()}
                        fold={false}/>)
        })

        loopDt = dt.clone().add(1, 'M').format();
        
        let fBot = foldBottom.map( day => {
            return (<Day 
                        key={`_fBot${day}`}
                        date={moment(loopDt).date(day).format()}
                        fold={true}/>)
        })
        return(
            <div className="month">
                {fTop}
                {mid}
                {fBot}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const current = state.page.current;
    return {
      dt: current.dt
    }
  }

Month.PropTypes = {
    weekFormat: PropTypes.array,
    dt: PropTypes.dt
}

export default connect(mapStateToProps, null)(Month);