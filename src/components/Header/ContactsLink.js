import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

export const ContactsLink = () => {
  return <NavLink to={routes.contacts}>Contacts</NavLink>;
};
