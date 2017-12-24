import moment from 'moment';

import { 
    SWITCH_MONTH_NEXT,
    SWITCH_MONTH_PREVIOUS,
    SHOW_APPOINTMENT,
    SUBMIT_APPOINTMENT,
    CLEAR_APPOINTMENT
} from '../constants/page'

let now = moment();

let initialState = {
    dayByDt: {},
    activeDay: '', // dt: ..., content: ...
    current: {
        day: now.day(),
        month: now.month() + 1, //0..11 > 1..12s
        year: now.year(),
        dt: now.format()
    }
};

let month, year, dt;

export default function page(state=initialState, action) {
    switch (action.type) {
        case (CLEAR_APPOINTMENT): {
            return {...state, dayByDt: {
                    ...state.dayByDt,
                        [state.activeDay]: ''
                        }}
        }
        case (SUBMIT_APPOINTMENT): {
            if (!action.value) return state;
            return {...state, dayByDt: {
                ...state.dayByDt,
                [state.activeDay]: action.value
            }}
        }
        case (SHOW_APPOINTMENT): {
            return {...state, activeDay: action.dt}
        }
        case (SWITCH_MONTH_NEXT): {
            month = state.current.month;
            year = state.current.year;
            dt = state.current.dt;

            month++;

            year = month > 12 ? year + 1 : year;

            month = month > 12 ? 1 : month;
            

            dt = moment(dt).month(month - 1).year(year).format();

            return {...state, 
                    current: {
                        ...state.current,
                        month: month,
                        year: year,
                        dt: dt
                    }
                }
        }
        case (SWITCH_MONTH_PREVIOUS): {
            month = state.current.month;
            year = state.current.year;
            dt = state.current.dt

            month--;

            year = month < 1 ? year - 1 : year;
            
            month = month < 1 ? 12 : month;


            dt = moment(dt).month(month - 1).year(year).format();

            return {...state, 
                    current: {
                        ...state.current,
                        month: month,
                        year: year,
                        dt: dt
                    }
                }
        }
        default:
            return state
    }
}