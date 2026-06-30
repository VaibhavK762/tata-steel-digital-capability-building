import React, { useEffect, useState } from 'react';
import { User as UserIcon, Building2, Briefcase, Award, Mail, UserCheck } from 'lucide-react';
import useAuthStore from '../services/authStore';
import api from '../services/api';
import Card from '../components/common/Card';

export const Profile: React.FC = () => {
  const { user } = useAuthStore();
  const [supervisorName, setSupervisorName] = useState<string | null>(null);

  useEffect(() => {
    if (user?.manager_id) {
      api.getUser(user.manager_id)
        .then((mgr) => setSupervisorName(mgr.name ?? null))
        .catch(() => setSupervisorName(null));
    }
  }, [user?.manager_id]);

  if (!user) return null;

  const supervisorLabel =
    user.user_type === 'Manager' ? 'Reporting Executive' :
    user.user_type === 'New Joiner' || user.user_type === 'Employee' ? 'Direct Manager' :
    'Supervisor';

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl font-black text-slate-800 font-display">User Profile Details</h1>
        <p className="text-xs text-slate-500 font-medium">Verify your credentials and job-role parameters assigned in the system.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Card left */}
        <Card hoverEffect={false} className="md:col-span-1 text-center flex flex-col items-center justify-center py-8">
          <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary font-black text-3xl shadow-inner uppercase mb-4">
            {user.name.charAt(0)}
          </div>
          <h2 className="font-extrabold text-base text-slate-800 leading-tight">{user.name}</h2>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mt-1">{user.user_type}</span>
          
          <div className="mt-6 pt-6 border-t border-slate-100 w-full text-left px-2 space-y-3.5">
            <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
              <Mail size={16} className="text-slate-450 shrink-0" />
              <span className="truncate">{user.email}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
              <Building2 size={16} className="text-slate-450 shrink-0" />
              <span>{user.department || 'General'}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
              <Briefcase size={16} className="text-slate-450 shrink-0" />
              <span>{user.current_role || 'General Operator'}</span>
            </div>

            {/* Supervisor name — shown for employees, new joiners, and managers */}
            {user.manager_id && (
              <div className="flex items-center gap-2.5 text-xs font-medium pt-1 border-t border-slate-100">
                <UserCheck size={16} className="text-primary shrink-0" />
                <div className="min-w-0">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">{supervisorLabel}</span>
                  <span className="text-slate-800 font-bold block truncate">
                    {supervisorName ?? 'Loading…'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Competencies Right */}
        <div className="md:col-span-2 space-y-6">
          <Card title="Skill Matrix Parameters" subtitle="NSQF compliance and target roles mapping parameters.">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50">
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Current Job Level</span>
                <span className="text-xs font-black text-slate-800 mt-1 block">Level {user.nsqf_level || 3}</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50">
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Years of Industry Experience</span>
                <span className="text-xs font-black text-slate-800 mt-1 block">{user.experience_years} years</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50">
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Target Career Goal</span>
                <span className="text-xs font-black text-slate-800 mt-1 block text-primary">{user.target_role || 'L&D Management'}</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50">
                <span className="text-[9px] font-bold text-slate-400 uppercase block">{supervisorLabel}</span>
                <span className="text-xs font-black text-slate-800 mt-1 block">
                  {user.manager_id
                    ? (supervisorName ?? 'Loading…')
                    : 'Self / BU Leader'}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
