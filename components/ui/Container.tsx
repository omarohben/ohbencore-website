import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-screen-xl',
};

export function Container({ children, className = '', as: Tag = 'div', size = 'lg' }: ContainerProps) {
  return (
    <Tag className={`mx-auto ${sizeMap[size]} px-4 md:px-6 ${className}`}>{children}</Tag>
  );
}
