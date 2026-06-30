import React, { useEffect, useState } from 'react';
import { 
  CheckSquare, 
  Square, 
  Calendar, 
  ShieldAlert, 
  Info, 
  FileText, 
  BookOpen, 
  Award,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  PartyPopper,
  Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useAuthStore from '../../services/authStore';
import api from '../../services/api';
import { OnboardingTask } from '../../types';
import Card from '../../components/common/Card';
import StatCard from '../../components/common/StatCard';
import EmployeeDashboard from './EmployeeDashboard';

export const NewJoinerDashboard: React.FC = () => {
  const { user, initialize, updateUser } = useAuthStore();
  const [tasks, setTasks] = useState<OnboardingTask[]>([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [courseStatuses, setCourseStatuses] = useState<{[key: string]: string}>({});
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [isPromoting, setIsPromoting] = useState(false);

  const fetchOnboardingData = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const data = await api.getOnboarding(user.user_id);
      
      // Normalize task statuses to lowercase to avoid case mismatch problems
      const formattedTasks = (data.tasks || []).map((t: any) => ({
        ...t,
        status: t.status ? t.status.toLowerCase() : 'pending'
      }));
      
      setTasks(formattedTasks);
      const pct = data.completion_percentage || 0;
      setProgress(pct);

      // If just hit 100%, re-fetch user from backend to pick up the
      // user_type = 'Employee' change the backend wrote on approval
      if (pct === 100) {
        setIsPromoting(true);
        try {
          const latestUser = await api.getUser(user.user_id);
          updateUser(latestUser);
          // Small delay so the animation is visible before the route guard
          // redirects away to /dashboard/employee
          await new Promise(r => setTimeout(r, 2000));
        } catch {
          // ignore — ProtectedRoute will still redirect once user reloads
        } finally {
          setIsPromoting(false);
        }
      }

      // Fetch employee dashboard to check course progress
      try {
        const empData = await api.getEmployeeDashboard(user.user_id);
        if (empData && empData.course_progress) {
          setCourseStatuses(empData.course_progress);
        }
      } catch (e) {
        console.error("Failed to fetch course progress", e);
      }
    } catch (err) {
      setError('Could not load onboarding checklist data.');
    } finally {
      setLoading(false);
    }
  };

  const handleTaskToggle = async (taskId: number, currentStatus: string) => {
    if (!user || currentStatus === 'completed' || currentStatus === 'pending approval') return;
    try {
      await api.completeOnboardingTask(taskId, user.user_id);
      alert('Onboarding task submitted to manager for approval.');
      fetchOnboardingData();
    } catch (err) {
      alert('Failed to update task. Please try again.');
    }
  };

  const handleStartCourse = async (courseId: string) => {
    if (!user) return;
    setActionLoading(courseId);
    try {
      await api.startCourse(user.user_id, courseId);
      alert('Successfully enrolled! Course is now In Progress.');
      fetchOnboardingData(); // reload
    } catch (err) {
      alert('Failed to enroll in the course.');
    } finally {
      setActionLoading(null);
    }
  };

  const handleSubmitCompletion = async (courseId: string) => {
    if (!user) return;
    setActionLoading(courseId);
    try {
      await api.submitCompletionRequest(user.user_id, courseId);
      alert('Verification request submitted to your manager. Status will be updated once approved.');
      fetchOnboardingData(); // reload
    } catch (err) {
      alert('Failed to submit completion verification request.');
    } finally {
      setActionLoading(null);
    }
  };

  useEffect(() => {
    fetchOnboardingData();
  }, [user?.user_id]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  // ─── 100% Completion: show promotion screen then employee dashboard ───
  if (progress === 100) {
    return (
      <div className="space-y-6">
        {/* Promotion Banner */}
        <div className="rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-500 p-6 text-white shadow-xl border border-emerald-400/20 flex flex-col md:flex-row items-center gap-5">
          <div className="p-4 bg-white/15 rounded-2xl shrink-0">
            <PartyPopper size={36} className="text-yellow-300" />
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest block">
              Onboarding Complete — Welcome to the Team!
            </span>
            <h1 className="text-xl font-black mt-1 leading-tight">
              Congratulations, {user?.name}! 🎉
            </h1>
            <p className="text-sm text-emerald-100 font-medium mt-1">
              All your onboarding tasks have been approved by your manager. You have been
              promoted to <span className="font-extrabold text-white">Employee</span> — your full career dashboard is now active below.
            </p>
          </div>
          {isPromoting && (
            <div className="flex items-center gap-2 text-emerald-100 text-xs font-semibold shrink-0">
              <Loader2 size={16} className="animate-spin" />
              Updating your profile…
            </div>
          )}
        </div>

        {/* Render full Employee Dashboard underneath the banner */}
        <EmployeeDashboard />
      </div>
    );
  }

  // ─── Normal New-Joiner view ───────────────────────────────────────────

  const pendingTasks = tasks.filter(t => t.status !== 'completed');
  const completedTasks = tasks.filter(t => t.status === 'completed');

  const renderCourseAction = (courseId: string) => {
    const status = courseStatuses[courseId] || 'not_started';

    if (status === 'completed') {
      return (
        <span className="text-[11px] font-bold text-success flex items-center gap-1">
          <CheckSquare className="text-success" size={14} /> Completed
        </span>
      );
    }
    if (status === 'in_progress') {
      return (
        <button
          disabled={actionLoading === courseId}
          onClick={() => handleSubmitCompletion(courseId)}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-[10px] font-bold transition-all shadow-sm flex items-center gap-1 active:scale-[0.98]"
        >
          Submit Verification
        </button>
      );
    }
    if (status === 'verification_pending') {
      return (
        <span className="text-[10px] font-bold text-warning bg-warning/10 border border-warning/15 px-2.5 py-1 rounded-lg">
          Pending Approval
        </span>
      );
    }
    return (
      <button
        disabled={actionLoading === courseId}
        onClick={() => handleStartCourse(courseId)}
        className="text-xs font-bold text-primary hover:text-primary-light flex items-center gap-1 hover:gap-2 transition-all"
      >
        Start Course <ArrowRight size={14} />
      </button>
    );
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="rounded-xl bg-gradient-to-r from-primary-dark via-primary to-primary-light p-6 text-white shadow-lg border border-primary-light/10">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/10 rounded-lg">
            <Award size={28} className="text-accent" />
          </div>
          <div>
            <h1 className="text-xl font-black md:text-2xl">Welcome to Tata Steel, {user?.name}!</h1>
            <p className="text-xs text-blue-100 font-medium mt-1">
              We are excited to have you in the <span className="font-bold">{user?.department}</span> department as a <span className="font-bold">{user?.current_role}</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Summary Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <StatCard
          title="Onboarding Progress"
          value={`${progress}%`}
          icon={<TrendingUp size={20} />}
          trend={`${completedTasks.length} of ${tasks.length} tasks completed`}
          trendType="up"
        />
        <StatCard
          title="Pending Tasks"
          value={pendingTasks.length}
          icon={<CheckSquare size={20} className="text-warning" />}
          trend={pendingTasks.length > 0 ? "Due this week" : "All caught up!"}
          trendType={pendingTasks.length > 0 ? "neutral" : "up"}
        />
        <StatCard
          title="NSQF Target Level"
          value={`Level ${user?.nsqf_level || 3}`}
          icon={<BookOpen size={20} className="text-accent" />}
          trend={`Target: ${user?.target_role}`}
          trendType="up"
        />
      </div>

      {/* Main Grid Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Onboarding Checklist (Left/Middle Column) */}
        <div className="lg:col-span-2 space-y-6">
          <Card title="My Onboarding Checklist" subtitle="Complete these activities to get certified for cast house & shop floor operations.">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5 uppercase">
                <span>Verification Readiness</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                <div 
                  className="h-full bg-gradient-to-r from-success to-primary-light transition-all duration-500" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            </div>

            {/* Tasks List */}
            {tasks.length === 0 ? (
              <p className="text-slate-400 text-xs py-4">No onboarding tasks assigned.</p>
            ) : (
              <div className="divide-y divide-slate-100">
                {tasks.map((task) => (
                  <div 
                    key={task.task_id} 
                    onClick={() => handleTaskToggle(task.task_id, task.status)}
                    className={`flex items-start gap-4 py-3.5 px-2.5 transition-colors cursor-pointer rounded-lg hover:bg-slate-50 ${
                      task.status === 'completed' ? 'opacity-70' : ''
                    }`}
                  >
                    <button className="mt-0.5 text-slate-400 hover:text-primary transition-colors focus:outline-none shrink-0">
                      {task.status === 'completed' ? (
                        <CheckSquare className="text-success fill-success/15" size={20} />
                      ) : task.status === 'pending approval' || task.status === 'pending_approval' ? (
                        <Square className="text-warning border-dashed border-warning" size={20} />
                      ) : (
                        <Square size={20} />
                      )}
                    </button>
                    <div className="flex-1">
                      <h4 className={`text-xs font-bold text-slate-800 leading-tight ${
                        task.status === 'completed' ? 'line-through text-slate-400' : ''
                      }`}>
                        {task.task_name}
                      </h4>
                      <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-450 font-semibold">
                        <Calendar size={10} />
                        <span>Due by: {task.due_date}</span>
                        {task.status === 'completed' && task.completed_date && (
                          <span className="text-success font-bold ml-2">• Completed on {task.completed_date}</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        task.status === 'completed' 
                          ? 'bg-success/10 text-success' 
                          : task.status === 'pending approval' || task.status === 'pending_approval'
                          ? 'bg-warning/10 text-warning'
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {task.status === 'pending approval' || task.status === 'pending_approval' ? 'Pending Approval' : task.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* First Week Courses */}
          <Card title="Recommended New Joiner Courses" subtitle="Get started with these modules recommended for your first week.">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-xl border border-slate-200 hover:border-primary-light transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[9px] bg-primary/10 text-primary font-extrabold uppercase px-2 py-0.5 rounded-full">Core</span>
                  <h4 className="font-bold text-xs text-slate-800 mt-2">Tata Steel Safety Induction</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Essential safety guidelines, protocols and SOP training for steel mills.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[10px] text-slate-450 font-bold uppercase">Duration: 2h</span>
                  {renderCourseAction('C001')}
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 hover:border-primary-light transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[9px] bg-primary/10 text-primary font-extrabold uppercase px-2 py-0.5 rounded-full">Technical</span>
                  <h4 className="font-bold text-xs text-slate-800 mt-2">Basic Metallurgy & Rolling Mills</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Introduction to raw materials handling, blast furnace, and casting processes.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[10px] text-slate-450 font-bold uppercase">Duration: 5h</span>
                  {renderCourseAction('C009')}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Safety Induction & Guides (Right Column) */}
        <div className="space-y-6">
          <Card title="Safety Manual Summary" className="border-l-4 border-l-danger">
            <div className="p-4 rounded-lg bg-danger/5 border border-danger/10 text-slate-700 text-xs space-y-3">
              <div className="flex items-center gap-2 text-danger font-bold uppercase tracking-wider text-[10px]">
                <ShieldAlert size={16} />
                <span>Critical Safety Rules</span>
              </div>
              <ul className="list-disc pl-4 space-y-2 font-medium text-slate-600">
                <li>Always wear proper Personal Protective Equipment (PPE) - Helmet, Safety Shoes, Glasses, Gloves.</li>
                <li>Ensure lock-out, tag-out (LOTO) is performed before maintaining machinery.</li>
                <li>Obtain Permit-to-Work (PTW) for high-risk, electrical, or hot work activities.</li>
                <li>In case of gas alarm warnings (CO detector), evacuate cast house immediately.</li>
              </ul>
              <div className="pt-2 border-t border-danger/15 flex justify-between items-center text-[10px] text-slate-450 font-semibold">
                <span>Emergency Hotline:</span>
                <span className="text-danger font-bold">Ext: 5555 / 9999</span>
              </div>
            </div>
            <Link 
              to="/documents" 
              className="mt-4 w-full h-9 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center justify-center gap-2 text-xs font-bold text-slate-600 transition-colors"
            >
              <FileText size={16} />
              Open Document Library
            </Link>
          </Card>

          <Card title="Support & Guidance">
            <div className="flex gap-3">
              <div className="p-2 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center text-slate-500 h-10 w-10">
                <Info size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 leading-snug">Need help completing tasks?</h4>
                <p className="text-[11px] text-slate-500 leading-normal mt-1 font-medium">
                  Use our floating **AI Copilot** at the bottom-right of your screen. Ask questions like:
                  <span className="block mt-2 italic text-slate-650 font-semibold">"How do I complete the safety induction verification?"</span>
                  <span className="block mt-1 italic text-slate-650 font-semibold">"Who is my supervisor for LOTO tag checks?"</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewJoinerDashboard;
