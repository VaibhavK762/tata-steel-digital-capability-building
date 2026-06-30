import React from 'react';
import { HelpCircle, Phone, Mail, FileText, Info } from 'lucide-react';
import Card from '../components/common/Card';

export const Help: React.FC = () => {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-xl font-black text-slate-800">Help & Platform Support</h1>
        <p className="text-xs text-slate-500 font-medium">Find documentation guides and capability building helpline channels.</p>
      </div>

      <div className="space-y-6">
        <Card title="Quick Assistance Guideline">
          <div className="space-y-4 text-xs text-slate-650 font-semibold leading-relaxed">
            <p>
              The **Tata Steel Capability Building Platform** is integrated with AI Agents (Knowledge, Learning, HR, Maintenance) to answer shop-floor questions.
            </p>
            <div className="p-3 bg-primary-light/5 border border-primary-light/10 rounded-lg">
              <span className="text-primary font-bold block mb-1">To get quick answers:</span>
              Use the floating **AI Copilot** chatbot at the bottom-right. Ask questions such as:
              <ul className="list-disc pl-4 mt-2 space-y-1.5 font-medium text-slate-650">
                <li><span className="font-bold">Safety SOPs:</span> "What is the procedure for blast furnace gas leaks?"</li>
                <li><span className="font-bold">Leave Policies:</span> "How many casual leave credits are allowed annually?"</li>
                <li><span className="font-bold">Skills:</span> "How can I map my skills to the Junior Engineer role?"</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title="Corporate Contacts">
          <div className="space-y-3.5">
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
              <Phone size={16} className="text-slate-400 shrink-0" />
              <span>Safety Control Room Hotline: <span className="text-slate-900 font-black">Ext. 5555 / 9999</span></span>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
              <Mail size={16} className="text-slate-400 shrink-0" />
              <span>L&D Support Email: <span className="text-slate-900 font-black">ld-support@tatasteel.com</span></span>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
              <FileText size={16} className="text-slate-400 shrink-0" />
              <span>Platform Version: <span className="text-slate-900 font-black">v1.0 (Master Release)</span></span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Help;
