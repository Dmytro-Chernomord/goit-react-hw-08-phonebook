import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Header.module.css';

export const RegistLoginLinks = () => {
  return (
    <div className={s.navigation}>
      <NavLink exact activeClassName={s.active} to={routes.login}>
        Log in
      </NavLink>
      <span className={s.span}>/</span>
      <NavLink exact activeClassName={s.active} to={routes.register}>
        Sign up
      </NavLink>
    </div>
  );
};
