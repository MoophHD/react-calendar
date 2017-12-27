/* eslint-disable */
 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/page';
import './_appointment.scss';

import ButtonContainer from './ButtonContainer'
import Input from './Input'

class Appointment extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.dayByDt[props.dt] ? props.dayByDt[props.dt] : ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState(() => {return{value}});
    }

    componentWillReceiveProps(nextProps) {
        let nextVal = nextProps.dayByDt[nextProps.dt] ? nextProps.dayByDt[nextProps.dt] : '';
        if (nextVal == this.state.value) return;

        this.setState(() => ({value: nextVal}));
    }

    render() {
        const { submitAppointment, clearAppointment } = this.props.actions;
        return(
            <div className="appointment">
                <Input 
                    onBlur={submitAppointment}
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <ButtonContainer 
                    value={this.state.value}
                    onSubmit={submitAppointment}
                    onClear={clearAppointment} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      dt: state.page.current.dt,
      dayByDt: state.page.dayByDt
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


Appointment.PropTypes = {
    dt: PropTypes.string,
    dayByDt: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);