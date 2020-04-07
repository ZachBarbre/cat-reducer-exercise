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
            const { name } = action.payload;
            return { 
                ...state, 
                name: name
            }
        case ACTION_SET_ACTIVITY: 
            const { activity } = action.payload;
            return { 
                ...state,
                activity: activity
            }
        default:
            return state;

    }
}

export default catReducer;