import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '../../../config/constants';
import LogoImage from '../../../assets/logo.png';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      <img src={LogoImage} alt="Logo" className="h-10 w-10" />
      <Link to="/" className="text-xl font-bold">
        {SITE_NAME}
      </Link>
    </div>
  );
};