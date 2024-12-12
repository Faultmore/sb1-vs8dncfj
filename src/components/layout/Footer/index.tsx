import React from 'react';
import { Container } from '../../ui/Container';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        <div className="text-center">
          <p className="mb-4">Visit us on:</p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
};