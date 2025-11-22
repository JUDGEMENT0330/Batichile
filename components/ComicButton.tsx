import React from 'react';

interface ComicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

export const ComicButton: React.FC<ComicButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-8 py-3 font-bold text-xl uppercase transform transition-all active:scale-95 active:shadow-none border-4 border-black comic-font skew-x-[-6deg]";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-bat-yellow text-bat-black hover:bg-yellow-300 shadow-comic";
      break;
    case 'secondary':
      variantStyles = "bg-bat-white text-bat-black hover:bg-gray-100 shadow-comic";
      break;
    case 'danger':
      variantStyles = "bg-bat-red text-white hover:bg-red-700 shadow-comic";
      break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      <span className="block skew-x-[6deg]">{children}</span>
    </button>
  );
};