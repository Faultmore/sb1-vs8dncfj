import React from 'react';
import { SOCIAL_LINKS } from '../../../config/constants';

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      {SOCIAL_LINKS.map(({ id, name, url, icon: Icon }) => (
        <a 
          key={id}
          href={url} 
          className="text-2xl hover:text-blue-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};