import React, { useEffect, useState } from 'react';
import { Megaphone, Search, Calendar, User, Clock, AlertCircle } from 'lucide-react';
import api from '../services/api';
import { Announcement } from '../types';
import Card from '../components/common/Card';

export const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const data = await api.getAnnouncements();
      setAnnouncements(data || []);
    } catch (err) {
      console.error('Failed to fetch announcements', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const filteredAnnouncements = announcements.filter((ann) =>
    ann.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ann.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-black text-slate-800">Notice Board & Announcements</h1>
        <p className="text-xs text-slate-500 font-medium">Keep track of updates, schedules, training events, and policies.</p>
      </div>

      <div className="relative max-w-md bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
          <Search size={16} />
        </span>
        <input
          type="text"
          placeholder="Search announcements..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-9 bg-slate-50 border border-slate-200 pl-9 pr-4 rounded-lg text-xs focus:bg-white focus:border-primary focus:outline-none transition-all placeholder-slate-400"
        />
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAnnouncements.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs font-semibold">
              No announcements published.
            </div>
          ) : (
            filteredAnnouncements.map((ann) => (
              <Card 
                key={ann.announcement_id} 
                hoverEffect={true} 
                className={`border-l-4 ${
                  ann.priority === 'High' 
                    ? 'border-l-danger bg-danger/5/5' 
                    : ann.priority === 'Medium'
                    ? 'border-l-warning'
                    : 'border-l-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      ann.priority === 'High' 
                        ? 'bg-danger/10 text-danger' 
                        : ann.priority === 'Medium'
                        ? 'bg-warning/10 text-warning'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {ann.priority} Priority
                    </span>
                    <span className="text-[10px] text-slate-450 font-bold uppercase">Audience: {ann.target_audience}</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-sm text-slate-800 mt-2.5 leading-snug">
                  {ann.title}
                </h3>
                
                <p className="text-xs text-slate-600 mt-2 leading-relaxed whitespace-pre-line font-medium">
                  {ann.message}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-slate-100/60 text-[10px] text-slate-400 font-semibold">
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    <span>Publisher: {ann.created_by || 'System Admin'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>Posted: {ann.created_at}</span>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Announcements;
