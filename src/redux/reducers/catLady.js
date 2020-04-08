import { ACTION_ADD_CAT, ACTION_SET_ACTIVITY, ACTION_SET_NAME } from '../actionTypes';

const initialState = {
    cats: {
        666: {
            name: 'Nell',
            activity: 'napping'
    }}
};

const catLadyReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_SET_ACTIVITY:{
            const { id, activity } = action.payload;
            const name = state.cats[id].name;
            return {
                cats: {
                    ...state.cats,
                    [id]: {
                        name,
                        activity
                    }
                }

            };
        }
        case ACTION_SET_NAME: {
            const { name } = action.payload;
            return name;
        }
        case ACTION_ADD_CAT: {
            const { name, activity } = action.payload;
            const id = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
            return {
                cats: {
                    ...state.cats,
                    [id]: { 
                        name, 
                        activity
                    }
                }
            }
        }
        default:
            return state;
    }
}

export default catLadyReducer;