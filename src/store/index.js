import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { omit, curry, pipe } from 'ramda';

import { loadState, saveState } from './localStorage.js';
import reducers from '../reducers';

const key = 'state';
const stateToOmit = ['form', 'errors', 'player'];

const persistedState = loadState(key);

const store = createStore(reducers, persistedState, applyMiddleware(reduxThunk));

const save = curry((key, stateToSave) => {
  saveState(stateToSave, key);
});

const omitState = curry((stateToOmit, currentState) => omit(stateToOmit, currentState));

const getCurrentState = (store) => store.getState();

const initSavedState = pipe(getCurrentState, omitState(stateToOmit), save(key));

store.subscribe(() => {
  initSavedState(store);
});

export default store;
