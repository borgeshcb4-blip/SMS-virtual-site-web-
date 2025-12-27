
import React from 'react';
import type { App } from '../types.ts';

export const AppBadge: React.FC<App> = ({ name, color }) => {
  const badgeStyle = {
    '--brand-color': color,
  } as React.CSSProperties;

  return (
    <div style={badgeStyle} className="flex items-center gap-2.5 bg-slate-100 text-slate-700 font-medium py-2 px-4 rounded-full transition-colors duration-300 hover:bg-slate-200">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ backgroundColor: `var(--brand-color)` }}
        ></span>
        <span
          className="relative inline-flex rounded-full h-2.5 w-2.5"
          style={{ backgroundColor: `var(--brand-color)` }}
        ></span>
      </span>
      <span className="text-sm">{name}</span>
    </div>
  );
};
