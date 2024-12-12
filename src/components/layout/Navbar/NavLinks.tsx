import React from 'react';
import { NavLink } from './NavLink';
import { Button } from '../../ui/Button';

export const NavLinks = () => {
  return (
    <div className="flex items-center space-x-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/staff">Staff</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <Button href="https://discord.gg/your-server">
        Join our Discord
      </Button>
    </div>
  );
};