import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  BookOpen, 
  GraduationCap, 
  Clipboard, 
  FileText, 
  Megaphone, 
  BarChart, 
  Users, 
  Settings, 
  User, 
  LogOut,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';
import useAuthStore from '../../services/authStore';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onOpenChat: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, onOpenChat }) => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  const role = user.user_type;

  // Determine navigation items based on role authorization
  const navItems = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/dashboard',
      roles: ['New Joiner', 'Employee', 'Manager', 'Executive', 'L&D Team'],
    },
    {
      name: 'AI Copilot',
      icon: <MessageSquare size={20} />,
      path: '/ai-copilot',
      roles: ['New Joiner', 'Employee', 'Manager', 'Executive', 'L&D Team'],
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        onOpenChat();
      }
    },
    {
      name: 'My Learning',
      icon: <BookOpen size={20} />,
      path: '/my-learning',
      roles: ['New Joiner', 'Employee', 'Manager', 'Executive'],
    },
    {
      name: 'Learning Programs',
      icon: <GraduationCap size={20} />,
      path: '/programs',
      roles: ['New Joiner', 'Employee', 'Manager', 'Executive'],
    },
    {
      name: 'Documents',
      icon: <FileText size={20} />,
      path: '/documents',
      roles: ['New Joiner', 'Employee', 'Manager', 'Executive', 'L&D Team'],
    },
    {
      name: 'Announcements',
      icon: <Megaphone size={20} />,
      path: '/announcements',
      roles: ['New Joiner', 'Employee', 'Manager', 'Executive', 'L&D Team'],
    },
    {
      name: 'Reports & Analytics',
      icon: <BarChart size={20} />,
      path: '/reports',
      roles: ['Employee', 'Manager', 'Executive', 'L&D Team'], // Hidden for New Joiner
    },
    {
      name: 'Team Management',
      icon: <Users size={20} />,
      path: '/team',
      roles: ['Manager', 'Executive'], // Hidden for Individual Contributors, New Joiners & L&D Team
    },
  ];

  const filteredItems = navItems.filter((item) => item.roles.includes(role));

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col w-64 bg-slate-900 border-r border-slate-800 text-slate-300 transition-transform duration-300 transform lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <img src="/assets/tata-steel-logo.svg" alt="Tata Steel Logo" className="w-8 h-8 object-contain" />
            <div>
              <h1 className="font-extrabold text-white text-base tracking-wide leading-none">TATA STEEL</h1>
              <span className="text-[10px] text-primary-light font-bold uppercase tracking-wider">Learning & Dev</span>
            </div>
          </div>
          <button 
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Main Navigation</div>
          {filteredItems.map((item) => (
            item.onClick ? (
              <a
                key={item.name}
                href={item.path}
                onClick={item.onClick}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-slate-400 hover:text-white hover:bg-slate-800"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-850'
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            )
          ))}

          {/* Account Sub-navigation */}
          <div className="pt-6 border-t border-slate-800/60 mt-6">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Account</div>
            <NavLink
              to="/profile"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-850'
                }`
              }
            >
              <User size={20} />
              <span>Profile</span>
            </NavLink>
            <NavLink
              to="/settings"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-850'
                }`
              }
            >
              <Settings size={20} />
              <span>Settings</span>
            </NavLink>
            <button
              onClick={handleLogout}
              className="flex items-center w-full gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-danger hover:bg-danger/10 transition-colors mt-1"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </nav>

      </aside>
    </>
  );
};

export default Sidebar;
