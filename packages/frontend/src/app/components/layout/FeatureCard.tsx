import React from 'react';
import Glass from './Glass';

/**
 * FeatureCard - Card for protocol highlights on the homepage.
 * Props:
 *   - title: feature title
 *   - desc: feature description
 *   - icon: feature icon (emoji or ReactNode)
 *   - className: additional Tailwind CSS classes (optional)
 */
interface FeatureCardProps {
  title: string;
  desc: string;
  icon: string | React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, icon, className }) => {
  return (
    <Glass className={`p-6 flex flex-col items-center shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-500/30 ${className || ''}`}>
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{title}</h3>
      <p className="text-center text-base text-white/80">{desc}</p>
    </Glass>
  );
};

export default FeatureCard; 