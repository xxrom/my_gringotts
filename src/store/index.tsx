import { createStore, combineReducers } from 'redux';

import { stepsReducer } from './reducers';

const rootReducer = combineReducers({
  stepsReducer,
});

const store = createStore(rootReducer);
