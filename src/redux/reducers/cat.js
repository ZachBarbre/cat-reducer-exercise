// import action types
// import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from '../actionTypes';
import { ACTION_SET_NAME, ACTION_SET_ACTIVITY } from '../actionTypes';

const initalState = {
    name: 'Nell',
    activity: 'napping'
}

const catReducer = (state = initalState, action) => {
    switch(action.type) {
        case ACTION_SET_NAME: 
            const newName = action.payload;
            return { 
                ...state, 
                name: newName
            }
        case ACTION_SET_ACTIVITY: 
            const newActivity = action.payload;
            return { 
                ...state,
                activity: newActivity
            }
        default:
            return state;

    }
}

export default catReducer;