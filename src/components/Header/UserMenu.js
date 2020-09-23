import React from 'react';
import { connect } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';

const UserMenu = props => {
  return (
    <>
      <p>Welcome, {props.name}</p>
      <button onClick={props.logout} type="button">
        Log out
      </button>
    </>
  );
};

const mapStateToProps = state => ({
  name: state.auth.user.name,
});

export default connect(mapStateToProps, { logout: authOperation.logOut })(
  UserMenu,
);
