import { ACTION_SET_NAME, ACTION_SET_ACTIVITY } from './actionTypes';

export const setName = name => {
    return {
        type: ACTION_SET_NAME,
        payload: name
    }
}

export const setActivity = activity => {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: activity 
    }
}
