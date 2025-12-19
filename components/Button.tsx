import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue rounded-full";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-700 shadow-sm hover:shadow-md",
    secondary: "bg-white text-brand-blue border border-brand-blue hover:bg-blue-50",
    outline: "bg-transparent border border-brand-slate-border text-brand-slate-dark hover:border-brand-slate-medium",
    ghost: "bg-transparent text-brand-slate-medium hover:text-brand-blue hover:bg-blue-50/50",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-8 py-3.5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;