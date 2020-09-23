import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './Form.module.css';
import authOperations from '../redux/auth/authOperation';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleOnChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login({ ...this.state });

    this.setState({ email: '', password: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Email{' '}
          <input
            className={s.input}
            onChange={this.handleOnChange}
            name="email"
            value={this.state.email}
            type="email"
            required
          />
        </label>
        <label className={s.label}>
          Passwort{' '}
          <input
            className={s.input}
            onChange={this.handleOnChange}
            name="password"
            value={this.state.password}
            type="password"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Sign up
        </button>
      </form>
    );
  }
}

export default connect(null, { login: authOperations.logIn })(LoginView);
