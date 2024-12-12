import React from 'react';
import { Container } from '../ui/Container';
import { DepartmentCard } from './DepartmentCard';
import { DEPARTMENTS } from '../../config/constants';

export const Departments = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <Container>
        <h2 className="text-3xl font-bold mb-8">Our Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEPARTMENTS.map(department => (
            <DepartmentCard 
              key={department.id} 
              department={department} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
};