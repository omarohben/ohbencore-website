import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1280px]',
};

export function Container({ children, className = '', as: Tag = 'div', size = 'lg' }: ContainerProps) {
  return (
    <Tag className={`mx-auto ${sizeMap[size]} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
