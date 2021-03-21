import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './Form.module.css';
import authOperations from '../redux/auth/authOperation';
import { string } from 'yup';

// const validateSchema = object().shape({
//   email: string().required().email(),
//   password: string().required()
// })
class LoginView extends Component {
  state = {
    email: '',
    password: '',
    validateEmail: string().required().email(),
    validatePassword: string().required(),
    errors: {
      email: '',
      password: '',
    },
  };
  capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  handleOnChange = async e => {
    const { name, value } = e.currentTarget;
    await this.setState({ [name]: value });
  };
  handeValidateOnBlur = e => {
    const { name } = e.currentTarget;
    try {
      this.state[`validate${this.capitalize(name)}`].validateSync(
        this.state[name],
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
    this.props.login({ ...this.state });
    this.setState({ email: '', password: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            onChange={this.handleOnChange}
            onBlur={this.handeValidateOnBlur}
            name="email"
            value={this.state.email}
            type="email"
            placeholder="Email"
            required
          />
          {this.state.errors.email && (
            <dir className={s.error}>{this.state.errors.email}</dir>
          )}
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            onChange={this.handleOnChange}
            onBlur={this.handeValidateOnBlur}
            name="password"
            value={this.state.password}
            type="password"
            placeholder="Password"
            required
          />
          {this.state.errors.password && (
            <dir className={s.error}>{this.state.errors.password}</dir>
          )}
        </label>
        <button className={s.button} type="submit">
          Log in
        </button>
      </form>
    );
  }
}

export default connect(null, { login: authOperations.logIn })(LoginView);
