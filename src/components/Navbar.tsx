import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-10 w-10" />
          <Link to="/" className="text-xl font-bold">Coastal State Roleplay</Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/gallery" className="hover:text-blue-400">Gallery</Link>
          <Link to="/staff" className="hover:text-blue-400">Staff</Link>
          <Link to="/login" className="hover:text-blue-400">Log In</Link>
          <a 
            href="https://discord.gg/your-server" 
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Discord
          </a>
        </div>
      </div>
    </nav>
  );
};