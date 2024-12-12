import React from 'react';
import { FaDiscord, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-4">Visit us on:</p>
          <div className="flex justify-center space-x-6">
            <a href="https://discord.gg/your-server" className="text-2xl hover:text-blue-400">
              <FaDiscord />
            </a>
            <a href="https://tiktok.com/@your-account" className="text-2xl hover:text-blue-400">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};