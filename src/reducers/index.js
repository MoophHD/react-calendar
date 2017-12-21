import { 
    SWITCH_MONTH_NEXT,
    SWITCH_MONTH_PREVIOUS
} from '../constants/calendar'

let initialState = {
    dayIds: {},
    dayById: {},
    current: {
        day: 1,
        month: 1,
        year: 2007
    }
};

let month;

export default function index(state=initialState, action) {
    switch (action.type) {
        case (SWITCH_MONTH_NEXT): {
            month = state.current.month;
            month++;
            return {...state, 
                    current: {
                        ...state.current,
                        month: month%12,
                        year: month > 12 ? state.current.year + 1 : state.current.year
                    }
                }
        }
        case (SWITCH_MONTH_PREVIOUS): {
            month = state.current.month;
            month--;
            return {...state, 
                    current: {
                        ...state.current,
                        month: month < 1 ? 12 : month,
                        year: month < 1 ? state.current.year - 1 : state.current.year
                    }
                }
        }
        default:
            return state
    }
}