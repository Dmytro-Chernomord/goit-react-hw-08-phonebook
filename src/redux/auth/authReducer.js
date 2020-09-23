import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './authAction';

const dataInitialState = {
  name: null,
  email: null,
};

const userDataReducer = createReducer(dataInitialState, {
  [actions.registrationSuccess]: (_, actions) => ({
    ...actions.payload.user,
  }),
  [actions.loginSuccess]: (_, actions) => ({
    ...actions.payload.user,
  }),
  [actions.logoutSuccess]: (_, __) => ({
    name: null,
    email: null,
  }),
});

const tokenReducer = createReducer('', {
  [actions.registrationSuccess]: (_, action) => action.payload.token,
  [actions.loginSuccess]: (_, action) => action.payload.token,
  [actions.logoutSuccess]: (_, __) => '',
});

export default combineReducers({
  user: userDataReducer,
  token: tokenReducer,
});
