import React from 'react';

type BadgeVariant = 'accent' | 'primary' | 'neutral';

const variantMap: Record<BadgeVariant, string> = {
  accent: 'bg-[var(--color-accent)] text-white',
  primary: 'bg-[var(--color-primary)] text-white',
  neutral: 'bg-[var(--color-border-subtle)] text-[var(--color-text-primary)]',
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variantMap[variant]} ${className}`}>
      {children}
    </span>
  );
}
