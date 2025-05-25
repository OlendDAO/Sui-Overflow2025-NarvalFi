import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * PrimaryButton - Main call-to-action button with gradient and hover effect.
 * Props:
 *   - children: button content
 *   - href: link URL
 *   - className: additional Tailwind CSS classes (optional)
 */
interface PrimaryButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 ${className || ''}`}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </a>
  );
};

export default PrimaryButton; 