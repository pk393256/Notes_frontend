import { legacy_createStore as createStore } from 'redux';
import { taskReducer,authReducer } from './reducer';
import { combineReducers } from 'redux';
const store = createStore(reducer)
export default store;