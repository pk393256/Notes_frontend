import { TOGGLE_TASK, TOGGLE_AUTH } from './action';

let initialTask = {
    title: '',
    status: false,

}
export function taskReducer(state = initialTask, action) {
    switch (action.type) {
        case TOGGLE_TASK:
            return { ...state, status: !status }
        default:
            return state;
    }
}

let initialAuth = {
    status: false
}

export function authReducer(state = initialAuth, action) {
    switch (action.type) {
        case TOGGLE_AUTH:
            return { status: !status };
        default:
            return state;
    }
}