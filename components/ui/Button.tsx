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

const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] px-6 py-3 rounded-lg shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50',
  secondary: 'bg-green-600 text-white hover:bg-green-700 hover:scale-[1.02] px-6 py-3 rounded-lg shadow-lg shadow-green-900/30 hover:shadow-green-900/50',
  outline: 'border border-gray-700 text-white hover:bg-slate-900 hover:border-blue-600 px-6 py-3 rounded-lg',
  ghost: 'text-gray-300 hover:text-blue-400 px-4 py-2 rounded-md hover:bg-slate-900',
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
