import { ACTION_ADD_CAT, ACTION_SET_ACTIVITY } from '../actionTypes';

const initialState = {
    catIds: ['abc'], 
    cats: {abc: {
        name: 'Nell',
        activity: 'napping'
    }}
};

const catLadyReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_ADD_CAT: {
            const { id, name } = action.payload;
            return {
                ...state,
                catIds: [...state.catIds, id],
                cats: {
                    ...state.cats,
                    [id]: {
                        name: name,
                        activity: 'napping'
                    }
                }
            }
        }
        case ACTION_SET_ACTIVITY: {
            const { id, activity} = action.payload
            return {
                ...state,
                catIds: [...state.catIds],
                [id]: {
                    ...state.cats[id],
                    activity: activity
                }
            }
        }
        default:
            return state;
    }
}

export default catLadyReducer;