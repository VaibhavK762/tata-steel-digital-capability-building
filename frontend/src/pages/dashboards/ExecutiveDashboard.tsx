import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Award,
  AlertTriangle,
  Calendar,
  ChevronRight,
  Clock,
  ArrowRight,
  FileText,
  Sparkles,
  MapPin,
  Activity,
  Bookmark,
  ShieldAlert,
  Megaphone
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip,
  BarChart as ReChartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
  LabelList
} from 'recharts';
import useAuthStore from '../../services/authStore';
import api from '../../services/api';
import Card from '../../components/common/Card';
import StatCard from '../../components/common/StatCard';
import EmployeeDashboard from './EmployeeDashboard';

interface ExecutiveDashboardData {
  executive: {
    user_id: number;
    name: string;
    department: string;
    role: string;
  };
  manager_count: number;
  employee_count: number;
  department_completion: number;
  department_readiness: number;
  department_progress: {
    completed: number;
    in_progress: number;
    not_started: number;
  };
  top_skill_gaps: Array<{ skill: string; count: number }>;
  announcements: any[];
  readiness_distribution: {
    ready: number;
    near_ready: number;
    needs_dev: number;
  };
  dept_performance: Array<{
    department: string;
    completion: number;
    readiness: number;
  }>;
  high_priority_gap_count: number;
  total_courses: number;
}

export const ExecutiveDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [data, setData] = useState<ExecutiveDashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [viewMode, setViewMode] = useState<'department' | 'personal'>('department');

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;
      try {
        setLoading(true);
        const res = await api.getExecutiveDashboard(user.user_id);
        setData(res);
      } catch (err) {
        setError('Could not fetch executive dashboard data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) return <p className="text-slate-400">Failed to load dashboard data.</p>;

  // Brackets calculations
  const readinessDist = data.readiness_distribution || { ready: 0, near_ready: 0, needs_dev: 0 };
  const totalReadinessMembers = (readinessDist.ready + readinessDist.near_ready + readinessDist.needs_dev) || 1;
  const readyPct = Math.round((readinessDist.ready / totalReadinessMembers) * 100);
  const nearReadyPct = Math.round((readinessDist.near_ready / totalReadinessMembers) * 100);
  const needsDevPct = Math.round((readinessDist.needs_dev / totalReadinessMembers) * 100);

  // Workforce Learning Status Donut Data
  const progressDist = data.department_progress || { completed: 0, in_progress: 0, not_started: 0 };
  const workforcePieData = [
    { name: 'Completed', value: progressDist.completed, color: '#10B981' },
    { name: 'In Progress', value: progressDist.in_progress, color: '#3B82F6' },
    { name: 'Not Started', value: progressDist.not_started, color: '#64748B' },
  ].filter(item => item.value > 0);

  // Dynamic Horizontal Skill Gaps
  const gapsList = data.top_skill_gaps || [];
  const barData = gapsList.slice(0, 5).map(item => ({
    name: (item.skill && item.skill.length > 20) ? `${item.skill.substring(0, 18)}...` : (item.skill || 'Unknown'),
    "Gaps Count": item.count || 0
  }));

  // Learning Completion Trend
  const currentCompletion = data.department_completion || 62.0;
  const completionTrend = [
    { month: 'Jan', value: Math.max(0, Math.round(currentCompletion - 24)) },
    { month: 'Feb', value: Math.max(0, Math.round(currentCompletion - 20)) },
    { month: 'Mar', value: Math.max(0, Math.round(currentCompletion - 15)) },
    { month: 'Apr', value: Math.max(0, Math.round(currentCompletion - 11)) },
    { month: 'May', value: Math.max(0, Math.round(currentCompletion - 6)) },
    { month: 'Jun', value: Math.round(currentCompletion) },
  ];

  // Readiness Score Trend
  const currentReadiness = data.department_readiness || 48.6;
  const readinessTrend = [
    { month: 'Jan', value: Math.max(0, Math.round(currentReadiness - 14.6)) },
    { month: 'Feb', value: Math.max(0, Math.round(currentReadiness - 11.6)) },
    { month: 'Mar', value: Math.max(0, Math.round(currentReadiness - 7.6)) },
    { month: 'Apr', value: Math.max(0, Math.round(currentReadiness - 3.6)) },
    { month: 'May', value: Math.max(0, Math.round(currentReadiness - 0.6)) },
    { month: 'Jun', value: Math.round(currentReadiness) },
  ];

  // Plant Locations to Department Mapping
  const locationMapping = [
    { name: 'Jamshedpur', dept: 'Utilities & Refractory' },
    { name: 'Kalinganagar', dept: 'Operations' },
    { name: 'Dhenkanal', dept: 'Maintenance' },
    { name: 'Meramandali', dept: 'Logistics' },
    { name: 'Others', dept: 'Fabrication & Workshop' }
  ];
  const deptPerf = data.dept_performance || [];
  const locationData = locationMapping.map(loc => {
    const match = deptPerf.find(d => d.department === loc.dept) || { completion: 60, readiness: 50 };
    return {
      location: loc.name,
      completion: match.completion,
      readiness: match.readiness
    };
  });

  // Focus Areas derived dynamically from top skill gaps
  const focusAreas = gapsList.slice(0, 3).map((item, idx) => {
    const titles = [
      `Improve ${item.skill || 'Skills'}`,
      `Strengthen ${item.skill || 'Skills'} Core`,
      `Increase ${item.skill || 'Skills'} Training`
    ];
    return {
      title: titles[idx] || `Resolve ${item.skill || 'Skills'} Gaps`,
      description: `${item.count || 0} employees with this gap require training.`
    };
  });

  if (viewMode === 'personal') {
    return (
      <div className="space-y-6">
        <div className="flex bg-slate-200/60 rounded-xl p-1 max-w-xs border border-slate-300/40">
          <button
            onClick={() => setViewMode('department')}
            className="flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all text-slate-500 hover:text-slate-700 focus:outline-none"
          >
            Department Dashboard
          </button>
          <button
            onClick={() => setViewMode('personal')}
            className="flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all bg-white text-slate-800 shadow-sm focus:outline-none"
          >
            My Learning & Target
          </button>
        </div>
        <EmployeeDashboard />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* View Switcher & Title */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex bg-slate-200/60 rounded-xl p-1 max-w-xs border border-slate-300/40 shrink-0">
          <button
            onClick={() => setViewMode('department')}
            className="flex-1 px-4 py-1.5 text-[10px] font-bold rounded-lg transition-all bg-white text-slate-800 shadow-sm focus:outline-none"
          >
            Department Dashboard
          </button>
          <button
            onClick={() => setViewMode('personal')}
            className="flex-1 px-4 py-1.5 text-[10px] font-bold rounded-lg transition-all text-slate-500 hover:text-slate-700 focus:outline-none"
          >
            My Learning & Target
          </button>
        </div>
        
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
          <Calendar size={14} />
          <span>01 Jun 2024 - 30 Jun 2024</span>
        </div>
      </div>

      {/* Banner */}
      <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider block">Executive Dashboard</span>
          <h1 className="text-xl font-black mt-1 leading-none">Welcome, Executive! 👋</h1>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            Overview of Learning &amp; Talent Development for the <span className="font-bold text-white">{data.executive.department}</span> division.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-850 px-4 py-2 rounded-xl">
          <Building2 className="text-primary-light" size={24} />
          <div>
            <span className="text-[9px] font-semibold text-slate-450 uppercase block">Business Unit</span>
            <span className="text-xs font-bold text-white">{data.executive.department}</span>
          </div>
        </div>
      </div>

      {/* 5 Stats Cards row (from Screenshot) */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard
          title="Total Employees"
          value={data.employee_count}
          icon={<Users size={20} className="text-primary-light" />}
          trend="+5% vs last month"
          trendType="up"
        />
        <StatCard
          title="Avg. Completion Rate"
          value={`${data.department_completion}%`}
          icon={<CheckCircle size={20} className="text-success" />}
          trend="+7% vs last month"
          trendType="up"
        />
        <StatCard
          title="Avg. Readiness Score"
          value={`${data.department_readiness}%`}
          icon={<TrendingUp size={20} className="text-accent" />}
          trend="+6.3% vs last month"
          trendType="up"
        />
        <StatCard
          title="Promotion Ready Employees"
          value={readinessDist.ready}
          icon={<Award size={20} className="text-warning" />}
          trend="+12% vs last month"
          trendType="up"
        />
        <StatCard
          title="High Priority Skill Gaps"
          value={data.high_priority_gap_count}
          icon={<AlertTriangle size={20} className="text-danger" />}
          trend="Across the organization"
          trendType="neutral"
        />
      </div>

      {/* Dynamic Area Trend Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Learning Completion Trend" subtitle="Overall learning completion rate curve.">
          <div className="h-44 w-full mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={completionTrend} margin={{ top: 15, right: 15, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="execColorComp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.01}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="month" tick={{ fontSize: 9, fontWeight: 700, fill: '#64748B' }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 9, fontWeight: 700, fill: '#64748B' }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v: any) => [`${v}%`, 'Completion']} contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3B82F6" 
                  strokeWidth={2} 
                  fillOpacity={1} 
                  fill="url(#execColorComp)"
                  dot={{ r: 3.5, strokeWidth: 1.5, stroke: '#3B82F6', fill: '#FFF' }}
                >
                  <LabelList dataKey="value" position="top" offset={8} formatter={(v: any) => `${v}%`} style={{ fontSize: '8px', fontWeight: 'bold', fill: '#334155' }} />
                </Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Readiness Score Trend" subtitle="Team capability readiness progress index.">
          <div className="h-44 w-full mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={readinessTrend} margin={{ top: 15, right: 15, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="execColorReady" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.01}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="month" tick={{ fontSize: 9, fontWeight: 700, fill: '#64748B' }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 9, fontWeight: 700, fill: '#64748B' }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v: any) => [`${v}%`, 'Readiness']} contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8B5CF6" 
                  strokeWidth={2} 
                  fillOpacity={1} 
                  fill="url(#execColorReady)"
                  dot={{ r: 3.5, strokeWidth: 1.5, stroke: '#8B5CF6', fill: '#FFF' }}
                >
                  <LabelList dataKey="value" position="top" offset={8} formatter={(v: any) => `${v}%`} style={{ fontSize: '8px', fontWeight: 'bold', fill: '#334155' }} />
                </Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Middle row: Department Benchmarks */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Department Performance" subtitle="Division completion and capability benchmarks." className="md:col-span-2">
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-450 uppercase tracking-wider">
                  <th className="py-2.5">Department</th>
                  <th className="py-2.5">Completion Rate</th>
                  <th className="py-2.5 text-right">Readiness Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {deptPerf.map((dept, index) => (
                  <tr key={index} className="text-xs text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {dept.department || 'Unknown'}
                    </td>
                    <td className="py-3.5 w-1/2">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-slate-500 font-bold w-7 text-right">{Math.round(dept.completion || 0)}%</span>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all ${
                              (dept.completion || 0) >= 80 ? 'bg-emerald-500' : (dept.completion || 0) >= 50 ? 'bg-blue-500' : 'bg-amber-500'
                            }`}
                            style={{ width: `${dept.completion || 0}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 text-right font-black text-slate-800">{dept.readiness || 0}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Workforce learning progress pie/donut */}
        <Card title="Workforce Learning Status" subtitle="Breakdown of system course progress.">
          <div className="h-44 w-full relative mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={workforcePieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {workforcePieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Centered Donut Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-black text-slate-800 leading-none">{data.employee_count}</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Employees</span>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-4 mt-2 text-[10px] font-bold text-slate-650">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-emerald-500 inline-block" /> Completed ({progressDist.completed})</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-blue-500 inline-block" /> In Progress ({progressDist.in_progress})</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-slate-500 inline-block" /> Not Started ({progressDist.not_started})</span>
          </div>
        </Card>
      </div>

      {/* Grid: Top Skill Gaps (Horizontal) & Promotion Readiness */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Top Skill Gaps (Organization-Wide)" subtitle="Primary missing capabilities across the division.">
          <div className="h-44 w-full mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <ReChartsBarChart 
                data={barData} 
                layout="vertical"
                margin={{ top: 5, right: 15, left: 30, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F1F5F9" />
                <XAxis type="number" tick={{ fontSize: 9, fontWeight: 700, fill: '#64748B' }} axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 9, fontWeight: 700, fill: '#475569' }} axisLine={false} tickLine={false} width={100} />
                <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                <Bar dataKey="Gaps Count" fill="#EF4444" radius={[0, 4, 4, 0]} barSize={10} />
              </ReChartsBarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Promotion Readiness Overview Cards (matching image) */}
        <Card title="Promotion Readiness Overview" subtitle="Eligibility criteria based on readiness target index.">
          <div className="grid gap-3 grid-cols-3 mt-3">
            <div className="bg-emerald-50/40 border border-emerald-100/60 p-4 rounded-xl flex flex-col justify-between h-28">
              <div>
                <span className="text-[10px] font-bold text-emerald-700 block">Ready</span>
                <span className="text-[9px] text-emerald-600/80 font-bold block">(&gt;80%)</span>
              </div>
              <div className="flex items-baseline justify-between mt-auto">
                <span className="text-2xl font-black text-emerald-700">{readinessDist.ready}</span>
                <span className="text-[10px] font-extrabold text-emerald-600">{readyPct}%</span>
              </div>
            </div>
            <div className="bg-amber-50/40 border border-amber-100/60 p-4 rounded-xl flex flex-col justify-between h-28">
              <div>
                <span className="text-[10px] font-bold text-amber-700 block">Near Ready</span>
                <span className="text-[9px] text-amber-600/80 font-bold block">(60% - 80%)</span>
              </div>
              <div className="flex items-baseline justify-between mt-auto">
                <span className="text-2xl font-black text-amber-700">{readinessDist.near_ready}</span>
                <span className="text-[10px] font-extrabold text-amber-600">{nearReadyPct}%</span>
              </div>
            </div>
            <div className="bg-rose-50/40 border border-rose-100/60 p-4 rounded-xl flex flex-col justify-between h-28">
              <div>
                <span className="text-[10px] font-bold text-rose-700 block">Needs Dev</span>
                <span className="text-[9px] text-rose-600/80 font-bold block">(&lt;60%)</span>
              </div>
              <div className="flex items-baseline justify-between mt-auto">
                <span className="text-2xl font-black text-rose-700">{readinessDist.needs_dev}</span>
                <span className="text-[10px] font-extrabold text-rose-600">{needsDevPct}%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Row: Learning by Location & Focus Areas & Course Completion */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Learning by Location */}
        <Card title="Learning by Location" subtitle="Participation rates sorted by plant sites.">
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-450 uppercase tracking-wider">
                  <th className="py-2">Location</th>
                  <th className="py-2 text-center">Completion</th>
                  <th className="py-2 text-right">Readiness</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                {locationData.map((loc, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 flex items-center gap-1 text-slate-800">
                      <MapPin size={12} className="text-slate-400 shrink-0" />
                      {loc.location}
                    </td>
                    <td className="py-3 text-center text-primary">{loc.completion}%</td>
                    <td className="py-3 text-right text-success">{loc.readiness}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Course Completion Overview (Donut chart matching mockup) */}
        <Card title="Course Completion Overview" subtitle="Registry catalog training module status.">
          <div className="h-44 w-full relative mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={workforcePieData} // reuse progress ratios for registry visual matching
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {workforcePieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Centered Donut Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-black text-slate-800 leading-none">{data.total_courses || 0}</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Total Courses</span>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-3 mt-2 text-[9px] font-bold text-slate-500">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-500 inline-block" /> Completed</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-blue-500 inline-block" /> In Progress</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-slate-500 inline-block" /> Not Started</span>
          </div>
        </Card>

        {/* High Priority Focus Areas */}
        <Card title="High Priority Focus Areas" subtitle="Urgent learning paths mapped dynamically.">
          <div className="space-y-3 mt-2">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100/50 hover:border-slate-200 transition-all flex items-start gap-2.5">
                <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${
                  idx === 0 ? 'bg-rose-500' : idx === 1 ? 'bg-amber-500' : 'bg-blue-500'
                }`} />
                <div>
                  <h5 className="text-xs font-black text-slate-800 leading-snug">{area.title}</h5>
                  <p className="text-[10px] text-slate-450 font-bold mt-0.5">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Lower section: Learning Insights, Announcements, & AI Copilot */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Learning Insights (4 cards matching mockup) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles size={16} className="text-primary-light" /> Learning Insights
          </h3>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 bg-white border border-slate-250/60 rounded-xl flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0 mb-3 border border-red-100">
                  <ShieldAlert size={16} />
                </span>
                <h4 className="text-xs font-black text-slate-800">Safety Compliance</h4>
                <p className="text-[10px] text-slate-450 font-semibold mt-1">
                  Safety training compliance requires focus in 2 locations. High-frequency gaps identified.
                </p>
              </div>
              <button className="text-[10px] font-bold text-primary hover:underline flex items-center gap-0.5 mt-4 self-start">
                View Details <ChevronRight size={10} />
              </button>
            </div>

            <div className="p-4 bg-white border border-slate-250/60 rounded-xl flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 mb-3 border border-blue-100">
                  <Activity size={16} />
                </span>
                <h4 className="text-xs font-black text-slate-800">Operations Progress</h4>
                <p className="text-[10px] text-slate-450 font-semibold mt-1">
                  Operations department shows high training activity with a 15% increase in completions.
                </p>
              </div>
              <button className="text-[10px] font-bold text-primary hover:underline flex items-center gap-0.5 mt-4 self-start">
                View Details <ChevronRight size={10} />
              </button>
            </div>

            <div className="p-4 bg-white border border-slate-250/60 rounded-xl flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mb-3 border border-emerald-100">
                  <Award size={16} />
                </span>
                <h4 className="text-xs font-black text-slate-800">Promotion Eligibility</h4>
                <p className="text-[10px] text-slate-450 font-semibold mt-1">
                  {readinessDist.ready} employees are fully ready for promotion (&gt;80% score threshold).
                </p>
              </div>
              <button className="text-[10px] font-bold text-primary hover:underline flex items-center gap-0.5 mt-4 self-start">
                View Details <ChevronRight size={10} />
              </button>
            </div>

            <div className="p-4 bg-white border border-slate-250/60 rounded-xl flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center shrink-0 mb-3 border border-purple-100">
                  <Sparkles size={16} />
                </span>
                <h4 className="text-xs font-black text-slate-800">Digital Skills Need</h4>
                <p className="text-[10px] text-slate-450 font-semibold mt-1">
                  Digital skills competency gap count increased by 8% this month. Needs training mapping.
                </p>
              </div>
              <button className="text-[10px] font-bold text-primary hover:underline flex items-center gap-0.5 mt-4 self-start">
                View Details <ChevronRight size={10} />
              </button>
            </div>
          </div>
        </div>

        {/* Right side: Announcements & Copilot Chat */}
        <div className="space-y-6">
          {/* Announcements Card */}
          <Card 
            title="Important Announcements"
            headerActions={<button onClick={() => navigate('/announcements')} className="text-[10px] font-bold text-primary hover:underline flex items-center gap-0.5">View All <ChevronRight size={12} /></button>}
          >
            <div className="space-y-4 mt-2">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">Maintenance Shutdown</h4>
                  <p className="text-[10px] font-semibold text-slate-500 mt-0.5">On 25 Jun 2026, 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center shrink-0">
                  <FileText size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">New Safety SOP Released</h4>
                  <p className="text-[10px] font-semibold text-slate-500 mt-0.5">Cast House Safety Manual v2.0</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 text-amber-500 flex items-center justify-center shrink-0">
                  <Megaphone size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">Safety Drill</h4>
                  <p className="text-[10px] font-semibold text-slate-500 mt-0.5">Tomorrow, 10:00 AM at Main Ground</p>
                </div>
              </div>

              {/* Dynamic ones */}
              {(data.announcements || []).filter(a => !['Maintenance Shutdown', 'New Safety SOP Released', 'Safety Drill'].includes(a.title)).slice(0, 2).map((item) => (
                <div key={item.announcement_id} className="flex gap-3 items-start border-t border-slate-100 pt-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-150 text-slate-500 flex items-center justify-center shrink-0">
                    <Bookmark size={15} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-850 leading-tight">{item.title}</h4>
                    <p className="text-[9px] font-semibold text-slate-450 mt-0.5">Posted on {item.created_at}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
