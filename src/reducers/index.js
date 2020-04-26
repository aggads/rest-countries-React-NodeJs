import { combineReducers } from 'redux';
import incrementReducer from './increment';

const counterApp = combineReducers({
    incrementReducer
})

export default counterApp