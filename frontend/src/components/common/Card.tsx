import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headerActions?: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  headerActions,
  hoverEffect = true,
}) => {
  return (
    <div
      className={`bg-white rounded-lg border border-slate-200/80 shadow-sm p-5 transition-all duration-200 ${
        hoverEffect ? 'hover:shadow-md hover:scale-[1.01] hover:border-slate-300/80' : ''
      } ${className}`}
    >
      {(title || subtitle || headerActions) && (
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div>
            {title && <h3 className="font-semibold text-slate-800 text-base leading-none">{title}</h3>}
            {subtitle && <p className="text-xs text-slate-500 mt-1 font-medium">{subtitle}</p>}
          </div>
          {headerActions && <div className="flex items-center gap-2">{headerActions}</div>}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;
