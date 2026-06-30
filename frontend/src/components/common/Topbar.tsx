import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, LogOut, User as UserIcon, Settings, Shield, ChevronDown, HelpCircle, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../services/authStore';
import NotificationDropdown from './NotificationDropdown';

interface TopbarProps {
  onToggleSidebar: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar }) => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/85 backdrop-blur-md px-6 shadow-sm">
      {/* Left side: Hamburger and Greeting */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 lg:hidden focus:outline-none"
        >
          <Menu size={20} />
        </button>
        <div className="hidden sm:block">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Welcome back</span>
          <h2 className="text-sm font-bold text-slate-800 leading-none mt-0.5">{user.name}</h2>
        </div>
      </div>

      {/* Global Search Bar */}
      <div className="flex-1 max-w-md mx-6 hidden md:block">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Search size={18} />
          </span>
          <input
            type="search"
            placeholder="Search skills, courses, documents..."
            className="w-full h-9 rounded-lg bg-slate-50 border border-slate-200 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Right side: Notifications and Profile Dropdown */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <NotificationDropdown />

        {/* Vertical Divider */}
        <div className="h-6 w-px bg-slate-200" />

        {/* User profile dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-50 transition-colors focus:outline-none"
          >
            {/* Avatar placeholder */}
            <div className="w-8 h-8 rounded-full bg-primary-light/10 text-primary border border-primary-light/25 flex items-center justify-center font-bold text-sm shadow-sm uppercase">
              {user.name.charAt(0)}
            </div>
            <div className="hidden text-left xl:block">
              <div className="text-xs font-bold text-slate-800 leading-none">{user.name}</div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5">{user.user_type}</span>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2.5 w-56 rounded-lg border border-slate-200 bg-white py-1.5 shadow-lg ring-1 ring-black/5 z-55">
              <div className="px-4 py-2 border-b border-slate-100">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider leading-none">Role Details</p>
                <p className="text-xs font-bold text-slate-800 mt-1 leading-tight">{user.current_role || 'No Role Assigned'}</p>
                <p className="text-[10px] text-slate-500 font-medium">{user.department || 'General'}</p>
              </div>

              <button
                onClick={() => { setProfileDropdownOpen(false); navigate('/profile'); }}
                className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
              >
                <UserIcon size={14} />
                <span>View Profile</span>
              </button>

              <button
                onClick={() => { setProfileDropdownOpen(false); navigate('/settings'); }}
                className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
              >
                <Settings size={14} />
                <span>Settings</span>
              </button>

              <button
                onClick={() => { setProfileDropdownOpen(false); navigate('/help'); }}
                className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
              >
                <HelpCircle size={14} />
                <span>Help & Support</span>
              </button>

              <button
                onClick={() => { setProfileDropdownOpen(false); navigate('/change-password'); }}
                className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
              >
                <Key size={14} />
                <span>Change Password</span>
              </button>

              <div className="h-px bg-slate-100 my-1" />

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-xs font-semibold text-danger hover:bg-danger/10 transition-colors"
              >
                <LogOut size={14} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
