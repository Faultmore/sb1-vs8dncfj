import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { SITE_NAME, SITE_DESCRIPTION } from '../../config/constants';

export const Hero = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <Container className="h-full">
        <div className="relative h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              {SITE_NAME}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {SITE_DESCRIPTION}
            </p>
            <Button to="/apply">
              Apply Now →
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};