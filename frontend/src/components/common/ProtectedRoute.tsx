import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../services/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, user, isLoading, initialize } = useAuthStore();
  const location = useLocation();

  // Try to initialize the auth state from localStorage on mount
  useEffect(() => {
    if (!isAuthenticated) {
      initialize();
    }
  }, [isAuthenticated, initialize]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <span className="text-xs font-semibold text-slate-500 mt-3 tracking-wider">Syncing user profile...</span>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Handle redirect from generic /dashboard to role-specific dashboard
  if (location.pathname === '/dashboard') {
    const role = user.user_type;
    if (role === 'New Joiner') {
      return <Navigate to="/dashboard/new-joiner" replace />;
    } else if (role === 'Employee') {
      return <Navigate to="/dashboard/employee" replace />;
    } else if (role === 'Manager') {
      return <Navigate to="/dashboard/manager" replace />;
    } else if (role === 'Executive') {
      return <Navigate to="/dashboard/executive" replace />;
    } else if (role === 'L&D Team') {
      return <Navigate to="/dashboard/lnd" replace />;
    }
  }

  // Check if role is authorized to view this route
  if (allowedRoles && !allowedRoles.includes(user.user_type)) {
    // Redirect to their default dashboard if unauthorized
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
