import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `hover:text-blue-400 transition-colors ${isActive ? 'text-blue-400' : ''}`
      }
    >
      {children}
    </NavLink>
  );
};