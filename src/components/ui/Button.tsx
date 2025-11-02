import type { ButtonHTMLAttributes } from 'react';
import '../../styles/components/ui/Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  return (
    <div>
      <button 
        className={`btn btn--${variant} btn--${size} ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};