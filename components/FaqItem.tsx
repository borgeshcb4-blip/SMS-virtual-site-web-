
import React from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left py-5 px-4"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-slate-800">{question}</h3>
        <span className="text-slate-500">
          <ChevronIcon isOpen={isOpen} />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <p className="pb-5 px-4 text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};
