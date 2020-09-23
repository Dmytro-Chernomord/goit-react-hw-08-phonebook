import contactsReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/authReducer';
const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...defaultMiddleware],
});
export default store;
