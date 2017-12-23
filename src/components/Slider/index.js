import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment'

import Arrow from './Arrow'

import * as actions from '../../actions/calendar'

class Slider extends Component {
    render() {
        let { month, year, actions} = this.props;
        const { switchMonthNext, switchMonthPrevious } = actions;

        month = moment(month, 'MM').format('MMMM'); 

        return(
            <div style={{textAlign: 'center'}}>
                <span>
                    <Arrow type="left" onClick={switchMonthPrevious}/>
                    <div  style={{display:'inline-block'}}>
                        <span>{month}</span> <span>{year}</span>
                    </div>
                    <Arrow type="right" onClick={switchMonthNext}/>
                </span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const current = state.page.current;
    return {
        month: current.month,
        year: current.year
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
