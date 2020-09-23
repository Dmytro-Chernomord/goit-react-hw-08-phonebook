import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './Form.module.css';
import authOperations from '../redux/auth/authOperation';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleOnChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegistration({ ...this.state });

    this.setState({ name: '', email: '', password: '' });
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
            name="email"
            value={this.state.email}
            type="email"
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
// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {};

export default connect(null, { onRegistration: authOperations.registration })(
  RegisterView,
);
