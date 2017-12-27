import { 
    SWITCH_MONTH_NEXT,
    SWITCH_MONTH_PREVIOUS,
    SELECT_DAY,
    SUBMIT_APPOINTMENT,
    CLEAR_APPOINTMENT
} from '../constants/page'

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

export function selectDay(day) {
    return {
        type: SELECT_DAY,
        day: day
    }
}

export function submitAppointment(value) {
    return {
        type: SUBMIT_APPOINTMENT,
        value: value
    }
}

export function clearAppointment() {
    return {
        type: CLEAR_APPOINTMENT
    }
}