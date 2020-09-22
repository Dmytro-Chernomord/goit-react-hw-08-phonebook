import React, { Component } from 'react';
import s from './Form.module.css';

export default class RegisterView extends Component {
  state = {
    name: '',
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

    this.setState({ name: '', mail: '', password: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name{' '}
          <input
            className={s.input}
            onChange={this.handleOnChange}
            name="name"
            value={this.state.name}
            type="text"
          />
        </label>
        <label className={s.label}>
          Email{' '}
          <input
            className={s.input}
            onChange={this.handleOnChange}
            name="mail"
            value={this.state.mail}
            type="mail"
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
          />
        </label>
        <button className={s.button} type="submit">
          Sign up
        </button>
      </form>
    );
  }
}
