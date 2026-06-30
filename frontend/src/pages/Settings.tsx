import React, { useState } from 'react';
import { Languages, Bell, Volume2 } from 'lucide-react';
import useAuthStore from '../services/authStore';
import Card from '../components/common/Card';

export const Settings: React.FC = () => {
  const { user } = useAuthStore();
  const [lang, setLang] = useState('English');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [soundAlerts, setSoundAlerts] = useState(false);

  if (!user) return null;

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-xl font-black text-slate-800">Account Settings</h1>
        <p className="text-xs text-slate-500 font-medium">Manage your learning preferences, translations, and notification thresholds.</p>
      </div>

      <Card title="Interface Preferences">
        <div className="space-y-5">
          {/* Language preference */}
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-3">
              <Languages className="text-slate-450 mt-0.5 shrink-0" size={18} />
              <div>
                <h4 className="text-xs font-bold text-slate-800">Primary Language</h4>
                <p className="text-[10px] text-slate-450 font-medium">Select default language for NSDC course curriculum maps.</p>
              </div>
            </div>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="h-8 bg-slate-50 border border-slate-200 rounded-lg px-2 text-xs focus:bg-white focus:border-primary focus:outline-none"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi (हिन्दी)</option>
              <option value="Odia">Odia (ଓଡ଼ିଆ)</option>
            </select>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Email alerts */}
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-3">
              <Bell className="text-slate-450 mt-0.5 shrink-0" size={18} />
              <div>
                <h4 className="text-xs font-bold text-slate-800">Email Notifications</h4>
                <p className="text-[10px] text-slate-450 font-medium">Receive alerts when managers approve course completions.</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
              className="h-4.5 w-4.5 rounded border-slate-300 text-primary focus:ring-primary"
            />
          </div>

          <div className="h-px bg-slate-100" />

          {/* Sound notifications */}
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-3">
              <Volume2 className="text-slate-450 mt-0.5 shrink-0" size={18} />
              <div>
                <h4 className="text-xs font-bold text-slate-800">Audio Feedback</h4>
                <p className="text-[10px] text-slate-450 font-medium">Enable sounds for chatbot answers and new notices.</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={soundAlerts}
              onChange={(e) => setSoundAlerts(e.target.checked)}
              className="h-4.5 w-4.5 rounded border-slate-300 text-primary focus:ring-primary"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
