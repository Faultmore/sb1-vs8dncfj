import React from 'react';
import type { Department } from '../../types';

interface DepartmentCardProps {
  department: Department;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden">
      <img 
        src={department.imageUrl} 
        alt={department.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{department.name}</h3>
        <p className="text-gray-300">{department.description}</p>
      </div>
    </div>
  );
};