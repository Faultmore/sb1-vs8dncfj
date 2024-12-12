import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick
}) => {
  const baseStyles = 'inline-block px-6 py-3 rounded-md text-lg font-semibold transition-colors';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700'
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href}
        className={combinedStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};