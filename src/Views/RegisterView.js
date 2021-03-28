import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './Form.module.css';
import authOperations from '../redux/auth/authOperation';
import { string } from 'yup';

class RegisterView extends Component {
  state = {
    values: {
      name: '',
      email: '',
      password: '',
    },
    // name: '',
    // email: '',
    // password: '',
    validateName: string().required(),
    validateEmail: string().required().email(),
    validatePassword: string().required(),
    errors: {
      name: '',
      email: '',
      password: '',
    },
  };
  capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  handleOnChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(state => ({ values: { ...state.values, [name]: value } }));
  };
  handeValidateOnBlur = e => {
    const { name } = e.currentTarget;
    try {
      this.state[`validate${this.capitalize(name)}`].validateSync(
        this.state.values[name],
      );
      this.setState(state => ({ errors: { ...state.errors, [name]: '' } }));
    } catch (error) {
      if (error.errors[0]) {
        this.setState(state => ({
          errors: { ...state.errors, [name]: error.errors[0] },
        }));
      }
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegistration(this.state.values);

    this.setState({ values: {} });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name{' '}
          <input
            className={s.input}
            onChange={this.handleOnChange}
            onBlur={this.handeValidateOnBlur}
            name="name"
            value={this.state.values.name}
            type="text"
            placeholder="Name"
            required
          />
          {this.state.errors.name && (
            <dir className={s.error}>{this.state.errors.name}</dir>
          )}
        </label>
        <label className={s.label}>
          Email{' '}
          <input
            className={s.input}
            onChange={this.handleOnChange}
            onBlur={this.handeValidateOnBlur}
            name="email"
            value={this.state.values.email}
            type="email"
            placeholder="Email"
            required
          />
          {this.state.errors.email && (
            <dir className={s.error}>{this.state.errors.email}</dir>
          )}
        </label>
        <label className={s.label}>
          Password{' '}
          <input
            className={s.input}
            onChange={this.handleOnChange}
            onBlur={this.handeValidateOnBlur}
            name="password"
            value={this.state.values.password}
            type="password"
            placeholder="Password"
            required
          />
          {this.state.errors.password && (
            <dir className={s.error}>{this.state.errors.password}</dir>
          )}
        </label>
        <button className={s.button} type="submit">
          Sign up
        </button>
      </form>
    );
  }
}
export default connect(null, { onRegistration: authOperations.registration })(
  RegisterView,
);
