import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import NewJoinerDashboard from './pages/dashboards/NewJoinerDashboard';
import EmployeeDashboard from './pages/dashboards/EmployeeDashboard';
import ManagerDashboard from './pages/dashboards/ManagerDashboard';
import ExecutiveDashboard from './pages/dashboards/ExecutiveDashboard';
import LndDashboard from './pages/dashboards/LndDashboard';
import Documents from './pages/Documents';
import Announcements from './pages/Announcements';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Programs from './pages/Programs';
import Reports from './pages/Reports';
import Sidebar from './components/common/Sidebar';
import Topbar from './components/common/Topbar';
import AIChatbot from './components/common/AIChatbot';
import ProtectedRoute from './components/common/ProtectedRoute';
import useAuthStore from './services/authStore';

// Dashboard Layout Wrapper for Authenticated Pages
const DashboardLayout: React.FC<{ children: React.ReactNode; onOpenChat: () => void }> = ({ children, onOpenChat }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Navigation Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} onOpenChat={onOpenChat} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        {/* Top Navbar */}
        <Topbar onToggleSidebar={() => setSidebarOpen(true)} />

        {/* Routed Dashboard Page content */}
        <main className="flex-1 p-6 overflow-y-auto max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

const TeamViewWrapper: React.FC = () => {
  const { user } = useAuthStore();
  if (!user) return null;
  if (user.user_type === 'Manager') {
    return <ManagerDashboard />;
  }
  return <ExecutiveDashboard />;
};

export const App: React.FC = () => {
  const { initialize } = useAuthStore();
  const [chatOpen, setChatOpen] = useState(false);
  const chatbotRef = React.useRef<any>(null);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const handleOpenChat = () => {
    window.dispatchEvent(new Event('open-ai-copilot'));
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Authenticated Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout onOpenChat={handleOpenChat}>
                {/* Redirects to role-specific dashboard inside ProtectedRoute */}
                <div />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/new-joiner"
          element={
            <ProtectedRoute allowedRoles={['New Joiner', 'Employee']}>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <NewJoinerDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/employee"
          element={
            <ProtectedRoute allowedRoles={['Employee']}>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <EmployeeDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/manager"
          element={
            <ProtectedRoute allowedRoles={['Manager']}>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <ManagerDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/executive"
          element={
            <ProtectedRoute allowedRoles={['Executive']}>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <ExecutiveDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/lnd"
          element={
            <ProtectedRoute allowedRoles={['L&D Team']}>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <LndDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Navigation Sidebar Target Routes Mappings */}
        <Route
          path="/my-learning"
          element={
            <ProtectedRoute allowedRoles={['New Joiner', 'Employee', 'Manager', 'Executive']}>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <EmployeeDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/programs"
          element={
            <ProtectedRoute>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <Programs />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />



        <Route
          path="/reports"
          element={
            <ProtectedRoute allowedRoles={['Employee', 'Manager', 'Executive', 'L&D Team']}>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <Reports />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/team"
          element={
            <ProtectedRoute allowedRoles={['Manager', 'Executive']}>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <TeamViewWrapper />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Common Modules Routes */}
        <Route
          path="/documents"
          element={
            <ProtectedRoute>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <Documents />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/announcements"
          element={
            <ProtectedRoute>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <Announcements />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <Profile />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <Settings />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/help"
          element={
            <ProtectedRoute>
              <DashboardLayout onOpenChat={handleOpenChat}>
                <Help />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Fallbacks */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>

      {/* Floating AI Chatbot drawer - loaded on all authenticated layout pages */}
      <AIChatbot />
    </BrowserRouter>
  );
};

export default App;
