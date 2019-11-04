import { createStore, combineReducers, applyMiddleware } from 'redux';

import reportAction from './middleware/report-action';
import doTheThingsReducer from './reducers.js';

let reducers = combineReducers({
  someStuff: doTheThingsReducer,
});

export default () => createStore(reducers, applyMiddleware(reportAction));