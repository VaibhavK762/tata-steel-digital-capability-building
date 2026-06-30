import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  trendType?: 'up' | 'down' | 'neutral';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  trendType = 'neutral',
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-lg border border-slate-200/80 shadow-sm p-5 flex items-center justify-between transition-all duration-200 hover:shadow-md hover:scale-[1.01] ${className}`}
    >
      <div className="flex-1">
        <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">{title}</span>
        <div className="text-2xl font-bold text-slate-800 mt-1 leading-none">{value}</div>
        {trend && (
          <div className="flex items-center gap-1 mt-2">
            <span
              className={`text-xs font-semibold ${
                trendType === 'up'
                  ? 'text-success'
                  : trendType === 'down'
                  ? 'text-danger'
                  : 'text-neutral'
              }`}
            >
              {trend}
            </span>
          </div>
        )}
      </div>
      <div className="p-3 bg-slate-50 rounded-lg text-primary-light border border-slate-100 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
