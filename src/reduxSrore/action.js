export const TOGGLE_TASK = "TOGGLE_TASK";
export const TOGGLE_AUTH = 'TOGGLE_AUTH';

export function toggleTask(){
    return {
        type:TOGGLE_TASK
    }
}

export function toggleAuth(){
    return {
        type:TOGGLE_AUTH
    }
}