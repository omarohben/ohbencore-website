import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  hover?: boolean;
}

export function Card({ children, className = '', as: Tag = 'div', hover = true }: CardProps) {
  return (
    <Tag
      className={`rounded-xl border border-subtle bg-[var(--color-bg-surface)]/60 backdrop-blur-sm p-6 ${hover ? 'transition shadow-sm hover:shadow-lg hover:border-[var(--color-primary)] hover:-translate-y-0.5' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
