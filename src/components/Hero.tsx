import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Coastal State Roleplay
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience authentic Southern California roleplay in our premier FiveM community
          </p>
          <Link
            to="/apply"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </div>
  );
};