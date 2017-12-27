import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as actions from '../actions/page'

import Day from '../components/Day'

const cells = 7 * 6; // 7 days per each of 6 rows 

function shift(target) { // 0..30  >> 1..31
    target.shift();
    target.push(target[target.length-1] + 1);
    return target;
}

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
 
        dt = moment(dt);
        let mid = Array.from(Array(dt.daysInMonth()).keys());
        shift(mid);
        let fstDayNum = parseInt(moment(dt.format()).startOf('month').format('d')) + 1; // 0..6 >> 1..7
        let fstDayOrder = weekFormat.indexOf(fstDayNum);


        let lstDayNum = parseInt(moment(dt.format()).endOf('month').format('d')) + 1;
        let lstDayOrder = weekFormat.indexOf(lstDayNum);

        // creates an array of numbers, shifts it (0..30 >> 1..31)
        let fTopInit = shift(Array.from(Array(moment(dt.format()).subtract(1, 'M').daysInMonth()).keys()));

        let fTop = fTopInit.slice(fTopInit.length - fstDayOrder + 1);

        let fBotInit = shift(Array.from(Array(dt.clone().add(1, 'M').daysInMonth()).keys()));

        let fBot = fBotInit.slice(0, 7 - lstDayOrder);

        if ((mid.length + fTop.length + fBot.length) < cells ) {
            //fBot always gets a free row if needed
            if (fBot.length > fTop.length) {
                fTop = fTopInit.slice(fTopInit.length - fTop.length - 7);
            } else {
                fBot = fBotInit.slice(0, fBot.length + 7);
            }
        }

        this.setState(() => {return{
            foldTop: fTop,
            middle: mid,
            foldBottom: fBot
        }})
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.dt != this.props.dt) this.setDays(nextProps.dt, nextProps.weekFormat);
    }

    componentDidMount() {
        this.setDays(this.props.dt, this.props.weekFormat);
    }

    render() {
        const { foldTop, middle, foldBottom } = this.state;
        const { selectDay, switchMonthNext, switchMonthPrevious } = this.props.actions;
        let { dt, dayByDt } = this.props;
        dt = moment(dt);

        let iterDt;

        let loopDt = dt.clone().subtract(1, 'M').format();

        let fTop = foldTop.map( day => {
            iterDt = moment(loopDt).date(day).format();
            return (<Day 
                        appointment={dayByDt.hasOwnProperty(iterDt) && dayByDt[iterDt] !== ''}
                        onClick={switchMonthPrevious}
                        key={`_fTop${day}`}
                        date={iterDt}
                        fold={true}/>)
        })

        loopDt = dt.clone();

        let mid = middle.map( day => {
            iterDt = loopDt.date(day).format();
            console.log(dt);
            console.log(iterDt);
            console.log('//');
            return (<Day   
                        active={iterDt == dt.format()}
                        appointment={dayByDt.hasOwnProperty(iterDt) && dayByDt[iterDt] !== ''}
                        onClick={selectDay}
                        key={`_middle${day}`}
                        date={iterDt}
                        fold={false}/>)
        })

        loopDt = dt.clone().add(1, 'M').format()
        
        let fBot = foldBottom.map( day => {
            iterDt = moment(loopDt).date(day).format();
            return (<Day 
                        appointment={dayByDt.hasOwnProperty(iterDt) && dayByDt[iterDt] !== ''}
                        onClick={switchMonthNext}
                        key={`_fBot${day}`}
                        date={iterDt}
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
      dt: current.dt,
      dayByDt: state.page.dayByDt
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

Month.PropTypes = {
    weekFormat: PropTypes.array,
    dt: PropTypes.dt
}

export default connect(mapStateToProps, mapDispatchToProps)(Month);