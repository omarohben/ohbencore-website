import React from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
};

const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-full whitespace-nowrap text-sm';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-[var(--color-primary)] text-white hover:bg-blue-600 px-6 py-3',
  secondary: 'bg-[var(--color-accent)] text-white hover:bg-green-600 px-6 py-3',
  outline: 'border border-subtle text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)] px-6 py-3',
  ghost: 'text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)] px-4 py-2',
};

export function Button(props: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { variant = 'primary', className = '', children, href, type = 'button', ...rest } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as any)}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
