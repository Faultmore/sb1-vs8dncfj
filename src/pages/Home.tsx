import React from 'react';
import { Hero } from '../components/home/Hero';
import { Story } from '../components/home/Story';
import { Departments } from '../components/home/Departments';

export const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <Departments />
    </>
  );
};