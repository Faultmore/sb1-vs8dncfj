import React from 'react';
import { NavItem } from './NavItem';
import { Button } from '../../../ui/Button';
import { DISCORD_URL } from '../../../../config/constants';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/staff', label: 'Staff' },
  { to: '/login', label: 'Log In' },
];

export const NavLinks = () => {
  return (
    <div className="flex items-center space-x-6">
      {NAV_ITEMS.map(({ to, label }) => (
        <NavItem key={to} to={to}>
          {label}
        </NavItem>
      ))}
      <Button href={DISCORD_URL}>
        Join our Discord
      </Button>
    </div>
  );
};