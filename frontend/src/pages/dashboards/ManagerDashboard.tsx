import React, { useEffect, useState } from 'react';
import { 
  Users, 
  CheckCircle, 
  CheckCircle2,
  Clock, 
  AlertTriangle,
  Award,
  Check,
  X as XIcon,
  TrendingUp,
  Megaphone,
  ChevronRight,
  CheckSquare,
  Square,
  Calendar,
  Loader2
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

interface ManagerDashboardData {
  manager: {
    user_id: number;
    name: string;
    department: string;
    role: string;
  };
  team_size: number;
  team_members: Array<{ user_id: number; name: string; is_new_joiner?: number }>;
  team_completion: number;
  team_readiness: number;
  progress_distribution: {
    completed: number;
    in_progress: number;
    not_started: number;
  };
  top_missing_skills: Array<{ skill: string; count: number }>;
  pending_approvals: Array<{
    request_id: number;
    name: string;
    course_name: string;
    submitted_at: string;
  }>;
  pending_onboarding_approvals?: Array<{
    task_id: number;
    user_id: number;
    employee_name: string;
    task_name: string;
    due_date: string;
  }>;
  announcements: any[];
}

interface MemberTask {
  task_id: number;
  task_name: string;
  status: string;
  due_date: string;
  completed_date: string | null;
}

// ── Member Detail Modal ──────────────────────────────────────────────────────
const MemberTasksModal: React.FC<{
  member: { user_id: number; name: string };
  onClose: () => void;
}> = ({ member, onClose }) => {
  const [tasks, setTasks] = useState<MemberTask[]>([]);
  const [onboardingProgress, setOnboardingProgress] = useState(0);
  const [courses, setCourses] = useState<any[]>([]);
  const [courseCompletion, setCourseCompletion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'courses' | 'onboarding'>('courses');

  useEffect(() => {
    setLoading(true);
    Promise.all([
      api.getMemberOnboarding(member.user_id).catch(() => null),
      api.getEmployeeDashboard(member.user_id).catch(() => null),
    ]).then(([onboardingData, empData]) => {
      if (onboardingData) {
        const fmt = (onboardingData.tasks || []).map((t: any) => ({
          ...t,
          status: (t.status || 'pending').toLowerCase()
        }));
        setTasks(fmt);
        setOnboardingProgress(onboardingData.completion_percentage || 0);
      }
      if (empData) {
        // Build flat course list from progress
        const progressMap: Record<string, string> = empData.course_progress || {};
        const recCourses = (empData.recommendations || []).map((c: any) => ({
          course_id: c.course_id,
          course_name: c.course_name,
          level: c.level,
          duration: c.duration,
          status: progressMap[c.course_id] || c.status || 'not_started',
        }));
        setCourses(recCourses);
        setCourseCompletion(empData.learning_progress?.completion_percentage || 0);
      }
    }).finally(() => setLoading(false));
  }, [member.user_id]);

  const statusBadge = (status: string) => {
    if (status === 'completed') return 'bg-success/10 text-success border-success/20';
    if (status === 'pending approval' || status === 'pending_approval' || status === 'verification_pending') return 'bg-warning/10 text-warning border-warning/20';
    if (status === 'in_progress') return 'bg-primary/10 text-primary border-primary/20';
    return 'bg-slate-100 text-slate-500 border-slate-200';
  };

  const statusLabel = (status: string) => {
    if (status === 'pending approval' || status === 'pending_approval') return 'Waiting Approval';
    if (status === 'verification_pending') return 'Waiting Approval';
    if (status === 'completed') return 'Completed';
    if (status === 'in_progress') return 'In Progress';
    return 'Pending';
  };

  const taskIcon = (status: string) => {
    if (status === 'completed') return <CheckSquare size={15} className="text-success shrink-0" />;
    if (status === 'pending approval' || status === 'pending_approval') return <Clock size={15} className="text-warning shrink-0" />;
    return <Square size={15} className="text-slate-400 shrink-0" />;
  };

  const courseStatusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle size={15} className="text-success shrink-0" />;
    if (status === 'in_progress') return <Clock size={15} className="text-primary shrink-0" />;
    if (status === 'verification_pending') return <Clock size={15} className="text-warning shrink-0" />;
    return <Square size={15} className="text-slate-300 shrink-0" />;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-sm text-primary">
              {member.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-slate-800">{member.name}</h2>
              <p className="text-[10px] text-slate-450 font-semibold">Employee Overview</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
          >
            <XIcon size={16} />
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 divide-x divide-slate-100 border-b border-slate-100">
          <div className="px-5 py-3 text-center">
            <div className="text-base font-extrabold text-slate-800">{courseCompletion}%</div>
            <div className="text-[10px] text-slate-450 font-semibold mt-0.5">Course Completion</div>
          </div>
          <div className="px-5 py-3 text-center">
            <div className="text-base font-extrabold text-slate-800">{onboardingProgress}%</div>
            <div className="text-[10px] text-slate-450 font-semibold mt-0.5">Onboarding Progress</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100 px-6">
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-2.5 px-1 mr-6 text-[11px] font-bold border-b-2 transition-colors ${
              activeTab === 'courses'
                ? 'border-primary text-primary'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Courses ({courses.length})
          </button>
          <button
            onClick={() => setActiveTab('onboarding')}
            className={`py-2.5 px-1 text-[11px] font-bold border-b-2 transition-colors ${
              activeTab === 'onboarding'
                ? 'border-primary text-primary'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Onboarding ({tasks.length})
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 size={24} className="animate-spin text-primary" />
            </div>
          ) : activeTab === 'courses' ? (
            courses.length === 0 ? (
              <p className="text-slate-400 text-xs py-6 text-center">No courses assigned yet.</p>
            ) : (
              <div className="space-y-2">
                {courses.map((course) => (
                  <div
                    key={course.course_id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    {courseStatusIcon(course.status)}
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-xs font-bold text-slate-800 leading-tight truncate ${
                        course.status === 'completed' ? 'line-through text-slate-400' : ''
                      }`}>
                        {course.course_name}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {course.level} · {course.duration}
                      </span>
                    </div>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border shrink-0 ${statusBadge(course.status)}`}>
                      {statusLabel(course.status)}
                    </span>
                  </div>
                ))}
              </div>
            )
          ) : (
            tasks.length === 0 ? (
              <p className="text-slate-400 text-xs py-6 text-center">No onboarding tasks assigned.</p>
            ) : (
              <div className="space-y-2">
                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1 uppercase">
                    <span>Overall Completion</span>
                    <span>{onboardingProgress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-success to-primary-light transition-all"
                      style={{ width: `${onboardingProgress}%` }}
                    />
                  </div>
                </div>
                {tasks.map((task) => (
                  <div
                    key={task.task_id}
                    className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <div className="mt-0.5">{taskIcon(task.status)}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-xs font-bold text-slate-800 leading-tight ${
                        task.status === 'completed' ? 'line-through text-slate-400' : ''
                      }`}>
                        {task.task_name}
                      </h4>
                      <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 font-semibold">
                        <Calendar size={9} />
                        <span>Due: {task.due_date}</span>
                        {task.status === 'completed' && task.completed_date && (
                          <span className="text-success font-bold ml-1">· Done {task.completed_date}</span>
                        )}
                      </div>
                    </div>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border shrink-0 ${statusBadge(task.status)}`}>
                      {statusLabel(task.status)}
                    </span>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* Legend */}
        <div className="px-6 py-3 border-t border-slate-100 flex items-center gap-4 text-[10px] font-bold text-slate-400">
          <span className="flex items-center gap-1"><CheckCircle size={11} className="text-success" /> Completed</span>
          <span className="flex items-center gap-1"><Clock size={11} className="text-warning" /> Waiting</span>
          <span className="flex items-center gap-1"><Clock size={11} className="text-primary" /> In Progress</span>
          <span className="flex items-center gap-1"><Square size={11} /> Pending</span>
        </div>
      </div>
    </div>
  );
};

// ── Main ManagerDashboard ────────────────────────────────────────────────────
export const ManagerDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [data, setData] = useState<ManagerDashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [onboardingActionLoading, setOnboardingActionLoading] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'team' | 'personal'>('team');
  const [selectedMember, setSelectedMember] = useState<{ user_id: number; name: string } | null>(null);

  const fetchDashboardData = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const res = await api.getManagerDashboard(user.user_id);
      setData(res);
    } catch (err) {
      setError('Could not fetch manager dashboard data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [user]);

  const handleApprove = async (requestId: number) => {
    if (!user) return;
    setActionLoading(requestId);
    try {
      await api.approveRequest(requestId, user.user_id);
      alert('Verification request approved successfully.');
      fetchDashboardData();
    } catch (err) {
      alert('Failed to approve request.');
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (requestId: number) => {
    if (!user) return;
    setActionLoading(requestId);
    try {
      await api.rejectRequest(requestId, user.user_id);
      alert('Verification request rejected.');
      fetchDashboardData();
    } catch (err) {
      alert('Failed to reject request.');
    } finally {
      setActionLoading(null);
    }
  };

  const handleApproveOnboarding = async (taskId: number) => {
    if (!user) return;
    setOnboardingActionLoading(taskId);
    try {
      await api.approveOnboardingTask(taskId, user.user_id);
      alert('Onboarding task approved successfully.');
      fetchDashboardData();
    } catch (err) {
      alert('Failed to approve onboarding task.');
    } finally {
      setOnboardingActionLoading(null);
    }
  };

  const handleRejectOnboarding = async (taskId: number) => {
    if (!user) return;
    setOnboardingActionLoading(taskId);
    try {
      await api.rejectOnboardingTask(taskId, user.user_id);
      alert('Onboarding task verification rejected. Task returned to Pending.');
      fetchDashboardData();
    } catch (err) {
      alert('Failed to reject onboarding task.');
    } finally {
      setOnboardingActionLoading(null);
    }
  };

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
    { name: 'Completed', value: data.progress_distribution.completed, color: '#10B981' },
    { name: 'In Progress', value: data.progress_distribution.in_progress, color: '#3B82F6' },
    { name: 'Not Started', value: data.progress_distribution.not_started, color: '#64748B' },
  ].filter(item => item.value > 0);

  const barData = data.top_missing_skills.map(item => ({
    skill: item.skill.length > 20 ? `${item.skill.substring(0, 18)}...` : item.skill,
    Count: item.count
  }));

  if (viewMode === 'personal') {
    return (
      <div className="space-y-6">
        <div className="flex bg-slate-200/60 rounded-xl p-1 max-w-xs border border-slate-300/40">
          <button
            onClick={() => setViewMode('team')}
            className="flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all text-slate-500 hover:text-slate-700 focus:outline-none"
          >
            Team Dashboard
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
      {/* Member tasks modal */}
      {selectedMember && (
        <MemberTasksModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}

      <div className="flex bg-slate-200/60 rounded-xl p-1 max-w-xs border border-slate-300/40">
        <button
          onClick={() => setViewMode('team')}
          className="flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all bg-white text-slate-800 shadow-sm focus:outline-none"
        >
          Team Dashboard
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
          <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider block">Department management hub</span>
          <h1 className="text-xl font-black mt-1 leading-none">Manager Dashboard</h1>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            Reviewing team progress and approvals for the <span className="font-bold text-white">{data.manager.department}</span> division.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-850 px-4 py-2 rounded-xl">
          <Users className="text-primary-light" size={24} />
          <div>
            <span className="text-[9px] font-semibold text-slate-450 uppercase block">Active Team Size</span>
            <span className="text-xs font-bold text-white">{data.team_size} Employees</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Team Size"
          value={data.team_size}
          icon={<Users size={20} />}
          trend="Supervised team members"
          trendType="neutral"
        />
        <StatCard
          title="Team Course Completion"
          value={`${data.team_completion}%`}
          icon={<CheckCircle size={20} className="text-success" />}
          trend="Overall modules completed"
          trendType="up"
        />
        <StatCard
          title="Avg Team Readiness"
          value={`${data.team_readiness}%`}
          icon={<TrendingUp size={20} className="text-accent" />}
          trend="Competency target readiness"
          trendType="up"
        />
        <StatCard
          title="Pending Approvals"
          value={data.pending_approvals.length}
          icon={<Clock size={20} className="text-warning" />}
          trend="Requires action"
          trendType={data.pending_approvals.length > 0 ? "down" : "up"}
        />
      </div>

      {/* Main content grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Pending Approvals List */}
        <div className="lg:col-span-2 space-y-6">
          <Card title="Pending Course Completion Approvals" subtitle="Validate and sign off on completed courses submitted by your team.">
            {data.pending_approvals.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400 font-semibold border border-dashed border-slate-200 rounded-xl">
                No pending approval requests. Your team is up to date!
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {data.pending_approvals.map((req) => (
                  <div key={req.request_id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-1 hover:bg-slate-50 rounded-lg transition-colors">
                    <div>
                      <h4 className="text-xs font-black text-slate-800 leading-tight">{req.name}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 font-semibold">
                        Submitted: <span className="font-bold text-slate-700">{req.course_name}</span>
                      </p>
                      <span className="text-[10px] text-slate-450 block mt-1">Date: {req.submitted_at}</span>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        disabled={actionLoading === req.request_id}
                        onClick={() => handleApprove(req.request_id)}
                        className="h-8 px-3 rounded-lg bg-success hover:bg-success-dark text-white font-bold text-[11px] flex items-center gap-1 shadow-sm transition-transform active:scale-95 disabled:opacity-50"
                      >
                        <Check size={14} /> Approve
                      </button>
                      <button
                        disabled={actionLoading === req.request_id}
                        onClick={() => handleReject(req.request_id)}
                        className="h-8 px-3 rounded-lg bg-danger/10 hover:bg-danger/25 text-danger font-bold text-[11px] flex items-center gap-1 transition-transform active:scale-95 disabled:opacity-50 border border-danger/15"
                      >
                        <XIcon size={14} /> Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Pending Onboarding Task Approvals Card */}
          <Card title="Pending Onboarding Approvals" subtitle="Sign off on onboarding tasks completed by new joiners. Rejecting returns the task to Pending.">
            {!data.pending_onboarding_approvals || data.pending_onboarding_approvals.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400 font-semibold border border-dashed border-slate-200 rounded-xl">
                No pending onboarding tasks to approve.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {data.pending_onboarding_approvals.map((task) => (
                  <div key={task.task_id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-1 hover:bg-slate-50 rounded-lg transition-colors">
                    <div>
                      <h4 className="text-xs font-black text-slate-800 leading-tight">{task.employee_name}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 font-semibold">
                        Task: <span className="font-bold text-slate-700">{task.task_name}</span>
                      </p>
                      <span className="text-[10px] text-slate-450 block mt-1">Due by: {task.due_date}</span>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        disabled={onboardingActionLoading === task.task_id}
                        onClick={() => handleApproveOnboarding(task.task_id)}
                        className="h-8 px-3 rounded-lg bg-success hover:bg-success-dark text-white font-bold text-[11px] flex items-center gap-1 shadow-sm transition-transform active:scale-95 disabled:opacity-50"
                      >
                        <Check size={14} /> Approve
                      </button>
                      <button
                        disabled={onboardingActionLoading === task.task_id}
                        onClick={() => handleRejectOnboarding(task.task_id)}
                        className="h-8 px-3 rounded-lg bg-danger/10 hover:bg-danger/25 text-danger font-bold text-[11px] flex items-center gap-1 transition-transform active:scale-95 disabled:opacity-50 border border-danger/15"
                      >
                        <XIcon size={14} /> Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Charts Row */}
          <div className="grid gap-6 md:grid-cols-2">
            <ChartCard title="Progress Distribution" subtitle="Course modules status breakdown across the team.">
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

            <ChartCard title="Top Missing Skills" subtitle="High-frequency skill gaps identified within the team.">
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
                    <Bar dataKey="Count" fill="#3B82F6" radius={[4, 4, 0, 0]} maxBarSize={30} />
                  </ReChartsBarChart>
                </ResponsiveContainer>
              )}
            </ChartCard>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Team Members List — clickable */}
          <Card title="My Team Members" subtitle="Click a member to view their onboarding task status.">
            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {data.team_members.length === 0 ? (
                <p className="text-slate-400 text-xs py-2">No team members assigned.</p>
              ) : (
                data.team_members.map((member) => (
                  <button
                    key={member.user_id}
                    onClick={() => setSelectedMember({ user_id: member.user_id, name: member.name })}
                    className="w-full p-3 rounded-lg border border-slate-100 hover:border-primary-light hover:bg-primary/5 transition-all flex items-center justify-between group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-bold text-xs">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">{member.name}</h4>
                        <span className="text-[9px] text-slate-400 font-semibold block">
                          {member.is_new_joiner ? 'New Joiner' : 'Employee'} · ID: {member.user_id}
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-primary transition-colors" />
                  </button>
                ))
              )}
            </div>
          </Card>

          {/* Announcements */}
          <Card title="Team Notices">
            {data.announcements.length === 0 ? (
              <p className="text-slate-400 text-xs py-2 text-center">No team notifications.</p>
            ) : (
              <div className="space-y-3.5">
                {data.announcements.slice(0, 3).map((item) => (
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
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
