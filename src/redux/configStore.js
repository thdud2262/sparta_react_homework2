import { createStore , combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import dic from './modules/dic'; 

// middleware모음
const middlewares = [ thunk ];
const enhancer = applyMiddleware(...middlewares);

// reducer모음
const rootReducer = combineReducers({dic});

const store = createStore(rootReducer , enhancer);

export default store;
