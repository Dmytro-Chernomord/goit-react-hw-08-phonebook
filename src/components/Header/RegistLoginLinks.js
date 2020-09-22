import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

export const RegistLoginLinks = () => {
  return (
    <>
      <NavLink to={routes.login}>Sign in</NavLink>
      <NavLink to={routes.register}>Sign up</NavLink>
    </>
  );
};
