import React, { Component } from 'react';
import { RegistLoginLinks } from './RegistLoginLinks';
import UserMenu from './UserMenu';
import s from './Header.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelector';
import authSelector from '../../redux/auth/authSelector';

class Header extends Component {
  render() {
    return (
      <header className={s.header}>
        {/* {this.props.isAuth && <ContactsLink />} */}
        {/* {this.props.isAuth && <RegistLoginLinks />} */}
        {this.props.isAuth ? <UserMenu /> : <RegistLoginLinks />}
        {/* <h2>It's your contacts, {this.props.name}</h2> */}
      </header>
    );
  }
}
const mapStateToProps = state => ({
  isAuth: authSelectors.isAuth(state),
  name: authSelector.name(state),
});

export default connect(mapStateToProps)(Header);
