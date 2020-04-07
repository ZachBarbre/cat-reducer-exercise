import { ACTION_SET_NAME, ACTION_SET_ACTIVITY, ACTION_ADD_CAT } from './actionTypes';

export const setName = name => {
    return {
        type: ACTION_SET_NAME,
        payload: { name }
    }
}

export const setActivity = (activity, id) => {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: { id, activity } 
    }
}

export const addCat = name => {
    const id = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
    return {
        type: ACTION_ADD_CAT,
        payload: { 
            id,
            name
        }
    }
}