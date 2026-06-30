import React from 'react';
import Card from './Card';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headerActions?: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  children,
  className = '',
  headerActions,
}) => {
  return (
    <Card
      title={title}
      subtitle={subtitle}
      headerActions={headerActions}
      className={className}
      hoverEffect={false}
    >
      <div className="w-full h-80 flex items-center justify-center">
        {children}
      </div>
    </Card>
  );
};

export default ChartCard;
