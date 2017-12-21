import { 
    SWITCH_MONTH_NEXT,
    SWITCH_MONTH_PREVIOUS
} from '../constants/calendar'

export function switchMonthNext() {
    return {
        type: SWITCH_MONTH_NEXT
    }
}

export function switchMonthPrevious() {
    return {
        type: SWITCH_MONTH_PREVIOUS
    }
}

