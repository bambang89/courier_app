import { combineReducers } from 'redux';
import * as generalReducer from './General';
//insert another reducers here to be combined

const reducers = combineReducers(
    Object.assign(
        generalReducer
    )
);

export default reducers;
