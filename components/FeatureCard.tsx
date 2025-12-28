import React from 'react';
import type { Feature } from '../types';

export const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors duration-300 h-full flex flex-col shadow-sm">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};