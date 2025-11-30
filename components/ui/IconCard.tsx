import React from 'react';
import { Card } from './Card';

interface IconCardProps {
  icon?: React.ReactNode; // Replace with LucideIcon when library installed
  title: string;
  description?: string;
  bullets?: string[];
  className?: string;
  href?: string;
}

export function IconCard({ icon, title, description, bullets = [], className = '', href }: IconCardProps) {
  const content = (
    <div>
      {icon && (
        <div className="mb-4 text-[var(--color-primary)]">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-sm text-muted mb-4">{description}</p>}
      {bullets.length > 0 && (
        <ul className="space-y-1 text-sm text-[var(--color-text-primary)]/90 list-disc list-inside">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
  return (
    <Card className={`h-full ${className}`}>{content}</Card>
  );
}
