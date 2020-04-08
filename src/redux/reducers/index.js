import { combineReducers } from 'redux';
import catLadyReducer from './catLady';

export default combineReducers({ cats: catLadyReducer });