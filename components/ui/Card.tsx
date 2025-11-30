import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  hover?: boolean;
  variant?: 'default' | 'highlight';
}

export function Card({ 
  children, 
  className = '', 
  as: Tag = 'div', 
  hover = true,
  variant = 'default'
}: CardProps) {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  
  const variantStyles = {
    default: 'bg-card border border-card',
    highlight: 'bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-900/30',
  };
  
  const hoverStyles = hover 
    ? 'hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 hover:border-blue-600/50 cursor-pointer' 
    : '';

  return (
    <Tag className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {children}
    </Tag>
  );
}
