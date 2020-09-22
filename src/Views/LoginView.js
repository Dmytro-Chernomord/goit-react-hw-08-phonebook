import React, { Component } from 'react';
import s from './Form.module.css';

export default class LoginView extends Component {
  state = {
    mail: '',
    password: '',
  };

  handleOnChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    // this.props.onLogin(this.state);

    this.setState({ mail: '', password: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Email{' '}
          <input
            className={s.input}
            onChange={this.handleOnChange}
            name="mail"
            value={this.state.mail}
            type="mail"
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
