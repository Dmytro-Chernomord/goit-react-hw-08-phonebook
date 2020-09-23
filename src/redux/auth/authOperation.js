import axios from 'axios';
import authAction from './authAction';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');

const registration = userData => dispatch => {
  dispatch(authAction.registrationRequest());

  axios
    .post('/users/signup', userData)
    .then(response => {
      dispatch(authAction.registrationSuccess(response.data));
      setToken(response.data.token);
    })
    .catch(error => dispatch(authAction.registrationError(error)));
};

const logIn = userData => dispatch => {
  dispatch(authAction.loginRequest());

  axios.post('/users/login', userData).then(response => {
    setToken(response.data.token);
    dispatch(authAction.loginSuccess(response.data));
  });
};

const logOut = () => dispatch => {
  dispatch(authAction.logoutRequest());

  axios
    .post('/users/logout')
    .then(response => {
      clearToken();
      dispatch(authAction.logoutSuccess());
    })
    .catch(error => dispatch(authAction.logoutError(error)));
};

export default { registration, logIn, logOut };
