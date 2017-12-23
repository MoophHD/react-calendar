import moment from 'moment';

import { 
    SWITCH_MONTH_NEXT,
    SWITCH_MONTH_PREVIOUS
} from '../constants/calendar'

let now = moment();

let initialState = {
    dayIds: {},
    dayById: {},
    current: {
        day: now.day(),
        month: now.month(),
        year: now.year(),
        dt: now.format()
    }
};

let month, year, dt;

export default function page(state=initialState, action) {
    switch (action.type) {
        case (SWITCH_MONTH_NEXT): {
            month = state.current.month;
            year = state.current.year;
            dt = state.current.dt;

            month++;
            month = month > 12 ? 1 : month;

            year = month > 12 ? year + 1 : year;

            dt = moment(dt).month(month).year(year).format();

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
            month = month < 1 ? 12 : month;

            year = month < 1 ? year - 1 : year;

            dt = moment(dt).month(month).year(year).format();

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