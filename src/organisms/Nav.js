import React from 'react';
import { NavLink } from  'react-router-dom';

import AppLink from '../atoms/AppLink';
import Brand from '../atoms/Brand';
import Navigation from '../molecules/Navigation';
import NavWrapper from '../molecules/NavWrapper';

export default function Nav() {
  return (
    <NavWrapper>
      <NavLink to="/"><Brand>Swish</Brand></NavLink>
      <Navigation>
        <NavLink to="/">
          <AppLink active>Jobs</AppLink>
        </NavLink>
        <AppLink>About</AppLink>
        <AppLink>Profile</AppLink>
      </Navigation>
    </NavWrapper>
  )
}
