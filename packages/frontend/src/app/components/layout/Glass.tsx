import React from 'react';

/**
 * Glass - A reusable glassmorphism container for cards and sections.
 * Props:
 *   - className: additional Tailwind CSS classes
 *   - children: content to render inside the glass container
 */
const Glass = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-md ${className}`}
        ref={ref}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"></div>
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);
Glass.displayName = 'Glass';
export default Glass; 