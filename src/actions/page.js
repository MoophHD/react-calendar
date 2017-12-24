import { 
    SWITCH_MONTH_NEXT,
    SWITCH_MONTH_PREVIOUS,
    SHOW_APPOINTMENT,
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

export function showAppointment(dt) {
    return {
        type: SHOW_APPOINTMENT,
        dt: dt
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