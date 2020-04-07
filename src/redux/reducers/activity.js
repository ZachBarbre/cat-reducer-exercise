import { ACTION_SET_ACTIVITY } from '../actionTypes';

const initalState = 'napping'

const activityReducer = (state = initalState, actions) => {
    switch(actions.type) {
        case ACTION_SET_ACTIVITY:
            const { activity } = actions.payload;
            return activity;
        default:
            return state;

    }
}

export default activityReducer;