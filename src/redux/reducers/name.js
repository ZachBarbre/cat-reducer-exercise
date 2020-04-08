import { ACTION_SET_NAME } from '../actionTypes';

const initalState = 'Nell'

const activityReducer = (state = initalState, actions) => {
    switch(actions.type) {
        case ACTION_SET_NAME:
            const { name } = actions.payload;
            return name;
        default:
            return state;

    }
}

export default activityReducer;