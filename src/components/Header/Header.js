import React, { Component } from 'react';
import { ContactsLink } from './ContactsLink';
import { RegistLoginLinks } from './RegistLoginLinks';
import { UserMenu } from './UserMenu';
import s from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={s.header}>
        <ContactsLink />
        <RegistLoginLinks />
        <UserMenu />
      </header>
    );
  }
}
