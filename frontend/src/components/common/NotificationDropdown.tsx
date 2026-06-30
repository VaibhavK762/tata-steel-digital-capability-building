import React, { useState, useRef, useEffect } from 'react';
import { Bell, BookOpen, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface NotificationItem {
  id: number;
  type: 'course' | 'approval' | 'announcement';
  text: string;
  time: string;
  read: boolean;
}

export const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 1,
      type: 'course',
      text: 'New course "Safe Cast House Operations" has been assigned to you.',
      time: '2 min ago',
      read: true,
    },
    {
      id: 2,
      type: 'approval',
      text: 'Manager Ravi Reddy approved your "Basic Safety Induction" course completion.',
      time: '15 min ago',
      read: true,
    },
    {
      id: 3,
      type: 'announcement',
      text: 'New Policy Announcement: Updated Leave Policy document uploaded.',
      time: '1 hour ago',
      read: true,
    },
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    }
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'course':
        return <BookOpen size={16} className="text-primary" />;
      case 'approval':
        return <CheckCircle size={16} className="text-success" />;
      case 'announcement':
        return <AlertCircle size={16} className="text-warning" />;
      default:
        return <Bell size={16} className="text-neutral" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[9px] font-bold text-white ring-2 ring-white">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2.5 w-80 rounded-lg border border-slate-200 bg-white py-2 shadow-lg ring-1 ring-black/5 z-55">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 pb-2">
            <span className="text-sm font-bold text-slate-800">Notifications</span>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Mark all as read
              </button>
            )}
          </div>
          
          <div className="max-h-72 overflow-y-auto mt-1">
            {notifications.length === 0 ? (
              <div className="py-6 text-center text-xs text-slate-400 font-medium">No new notifications</div>
            ) : (
              notifications.map((item) => (
                <div
                  key={item.id}
                  className={`flex gap-3 px-4 py-3 border-b border-slate-50 hover:bg-slate-50 transition-colors ${
                    !item.read ? 'bg-slate-50/50' : ''
                  }`}
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 border border-slate-200/50">
                    {getIcon(item.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-700 leading-normal font-medium">{item.text}</p>
                    <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 font-semibold">
                      <Clock size={10} />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="border-t border-slate-100 pt-2 px-4 text-center">
            <a
              href="#view-all"
              className="text-xs font-bold text-primary hover:text-primary-dark block py-1"
            >
              View all notifications
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
