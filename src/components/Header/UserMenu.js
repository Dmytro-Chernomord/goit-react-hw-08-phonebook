import React from 'react';
import { connect } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import s from './Header.module.css';

const UserMenu = props => {
  let userName;
  if (props.name) {
    userName = props.name.split('');
  }
  return (
    <div className={s.loginMenu}>
      {userName && <span className={s.logo}>{userName[0]} </span>}
      <span className={s.userName}>Welcome, {props.name}</span>
      <button className={s.button} onClick={props.logout} type="button">
        Log out
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.auth.user.name,
});

export default connect(mapStateToProps, { logout: authOperation.logOut })(
  UserMenu,
);
