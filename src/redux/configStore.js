import { createStore , combineReducers } from 'redux';
import dic from './modules/dic'; 

const rootReducer = combineReducers({dic});
const store = createStore(rootReducer);

export default store;
