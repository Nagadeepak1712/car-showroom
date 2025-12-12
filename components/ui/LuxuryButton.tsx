import React from 'react';
import { motion } from 'framer-motion';

interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  [key: string]: any;
}

export const LuxuryButton: React.FC<LuxuryButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-all duration-300 ease-out border backdrop-blur-sm";
  
  const variants = {
    primary: "bg-gold-600 border-gold-600 text-black hover:bg-gold-500 hover:border-gold-500 shadow-[0_0_15px_rgba(212,165,35,0.3)] hover:shadow-[0_0_25px_rgba(212,165,35,0.5)]",
    outline: "bg-transparent border-white/30 text-white hover:border-white hover:bg-white/5",
    ghost: "bg-transparent border-transparent text-gold-400 hover:text-gold-300"
  };

  const MotionButton = motion.button as any;

  return (
    <MotionButton
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </MotionButton>
  );
};