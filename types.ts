
import type React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface App {
  name: string;
  color: string;
}

export interface Testimonial {
  name: string;
  avatar: string;
  comment: string;
  stars: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export interface Toast {
  id: number;
  user: string;
  service: string;
  timeAgo: string;
  location?: string;
}
