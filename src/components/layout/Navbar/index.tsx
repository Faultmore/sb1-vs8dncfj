import React from 'react';
import { Container } from '../../ui/Container';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <NavLinks />
        </div>
      </Container>
    </nav>
  );
};