import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './authAction';

const dataReducer = createReducer('', {
  [actions.loginSuccess]: (state, actions) => [...state, ...actions],
});

const tokenReducer = createReducer('', {
  [actions.loginSuccess]: (_, action) => action,
});

export default combineReducers({
  data: dataReducer,
  token: tokenReducer,
});
