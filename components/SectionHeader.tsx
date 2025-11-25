import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-4">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;