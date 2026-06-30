import React, { useEffect, useState } from 'react';
import { 
  Building2, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Award,
  AlertTriangle,
  Megaphone,
  Briefcase
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend, 
  Tooltip,
  BarChart as ReChartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import useAuthStore from '../../services/authStore';
import api from '../../services/api';
import Card from '../../components/common/Card';
import StatCard from '../../components/common/StatCard';
import ChartCard from '../../components/common/ChartCard';
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
}

export const ExecutiveDashboard: React.FC = () => {
  const { user } = useAuthStore();
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

  // Chart data formatting
  const pieData = [
    { name: 'Completed', value: data.department_progress.completed, color: '#10B981' },
    { name: 'In Progress', value: data.department_progress.in_progress, color: '#3B82F6' },
    { name: 'Not Started', value: data.department_progress.not_started, color: '#64748B' },
  ].filter(item => item.value > 0);

  const barData = data.top_skill_gaps.map(item => ({
    skill: item.skill.length > 22 ? `${item.skill.substring(0, 20)}...` : item.skill,
    Gaps: item.count
  }));

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
      <div className="flex bg-slate-200/60 rounded-xl p-1 max-w-xs border border-slate-300/40">
        <button
          onClick={() => setViewMode('department')}
          className="flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all bg-white text-slate-800 shadow-sm focus:outline-none"
        >
          Department Dashboard
        </button>
        <button
          onClick={() => setViewMode('personal')}
          className="flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all text-slate-500 hover:text-slate-700 focus:outline-none"
        >
          My Learning & Target
        </button>
      </div>
      {/* Welcome & Dept Banner */}
      <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider block">Division leadership hub</span>
          <h1 className="text-xl font-black mt-1 leading-none">{data.executive.department} Dashboard</h1>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            Aggregated competency analytics for the <span className="font-bold text-white">{data.executive.department}</span> division.
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

      {/* Stats row */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Supervised Managers"
          value={data.manager_count}
          icon={<Briefcase size={20} className="text-primary-light" />}
          trend="Direct reporting managers"
          trendType="neutral"
        />
        <StatCard
          title="Total Division Employees"
          value={data.employee_count}
          icon={<Users size={20} />}
          trend="Total headcount in division"
          trendType="neutral"
        />
        <StatCard
          title="BU Course Completion"
          value={`${data.department_completion}%`}
          icon={<CheckCircle size={20} className="text-success" />}
          trend="Average modules completed"
          trendType="up"
        />
        <StatCard
          title="BU Skill Readiness"
          value={`${data.department_readiness}%`}
          icon={<TrendingUp size={20} className="text-accent" />}
          trend="Competency readiness index"
          trendType="up"
        />
      </div>

      {/* Chart analytics section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Progress Breakdown & Skill gaps chart */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ChartCard title="Division Progress Overview" subtitle="Total learning progress state for all employees.">
              {pieData.length === 0 ? (
                <p className="text-slate-400 text-xs py-4">No progress records available.</p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="45%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '8px' }} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold' }} />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </ChartCard>

            <ChartCard title="Division High-frequency Gaps" subtitle="Skill gap frequencies across the division.">
              {barData.length === 0 ? (
                <p className="text-slate-400 text-xs py-4">No skill gap analyses available.</p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <ReChartsBarChart
                    data={barData}
                    margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="skill" tick={{ fontSize: 9, fontWeight: 700 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 9, fontWeight: 700 }} />
                    <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '8px' }} />
                    <Bar dataKey="Gaps" fill="#3B82F6" radius={[4, 4, 0, 0]} maxBarSize={30} />
                  </ReChartsBarChart>
                </ResponsiveContainer>
              )}
            </ChartCard>
          </div>

          {/* Department Breakdown Cards */}
          <Card title="Skill Gap Frequencies Table" subtitle="Detailed frequency distribution of missing competencies.">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-450 uppercase tracking-wider">
                    <th className="py-2.5">Competency Skill</th>
                    <th className="py-2.5 text-right">Identified Gaps (Count)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.top_skill_gaps.map((item, index) => (
                    <tr key={index} className="text-xs text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                      <td className="py-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-danger shrink-0" />
                        {item.skill}
                      </td>
                      <td className="py-3 text-right text-danger">{item.count} employees</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Right side notification list */}
        <div className="space-y-6">
          <Card title="Executive Announcements">
            {data.announcements.length === 0 ? (
              <p className="text-slate-400 text-xs py-2 text-center">No recent bulletins.</p>
            ) : (
              <div className="space-y-3.5">
                {data.announcements.slice(0, 5).map((item) => (
                  <div key={item.announcement_id} className="border-l-2 border-primary-light pl-3.5 py-0.5">
                    <span className="text-[8px] font-bold px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded uppercase tracking-wider">
                      {item.priority}
                    </span>
                    <h5 className="font-extrabold text-slate-800 text-xs mt-1.5 leading-snug">{item.title}</h5>
                    <p className="text-[10px] text-slate-450 mt-0.5">{item.created_at}</p>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card title="Operational Recommendations" className="border-l-4 border-l-accent">
            <div className="p-3 bg-accent/5 border border-accent/10 rounded-lg text-slate-650 text-xs leading-relaxed font-semibold">
              <span className="text-accent font-bold uppercase tracking-wider text-[9px] block mb-1">AI Recommendation</span>
              Target core training programs on <span className="text-slate-800 font-bold">LOTO (Lock-Out, Tag-Out)</span> and <span className="text-slate-800 font-bold">Cast House Safety Induction</span> this quarter to reduce downtime by up to 14.5% based on current sensor correlation studies.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
