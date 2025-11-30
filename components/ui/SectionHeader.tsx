import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, center = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${center ? 'text-center' : ''} ${className}`}>      
      {eyebrow && (
        <div className={`${center ? 'justify-center' : ''} flex`}>
          <Badge variant="accent" className="uppercase tracking-wide">{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight">{title}</h2>
      {description && (
        <p className={`text-base text-muted max-w-2xl ${center ? 'mx-auto' : ''}`}>{description}</p>
      )}
    </div>
  );
}
