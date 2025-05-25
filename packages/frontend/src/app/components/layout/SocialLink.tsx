import React from 'react';

/**
 * SocialLink - Social media link button for the footer.
 * Props:
 *   - icon: ReactNode icon
 *   - href: link URL
 *   - label: accessible label
 */
interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default SocialLink; 