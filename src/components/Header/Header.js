import React, { Component } from 'react';
import { ContactsLink } from './ContactsLink';
import { RegistLoginLinks } from './RegistLoginLinks';
import UserMenu from './UserMenu';
import s from './Header.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/authSelector';

class Header extends Component {
  render() {
    return (
      <header className={s.header}>
        {this.props.name !== null && <ContactsLink />}
        {this.props.name === null && <RegistLoginLinks />}
        {this.props.name !== null && <UserMenu />}
      </header>
    );
  }
}
const mapStateToProps = state => ({
  name: authSelectors.name(state),
});

export default connect(mapStateToProps)(Header);
