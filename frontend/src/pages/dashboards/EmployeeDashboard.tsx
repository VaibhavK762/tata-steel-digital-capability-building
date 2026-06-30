import React, { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Zap, 
  Send,
  ExternalLink,
  Plus
} from 'lucide-react';
import useAuthStore from '../../services/authStore';
import api from '../../services/api';
import Card from '../../components/common/Card';
import StatCard from '../../components/common/StatCard';

interface DashboardData {
  user: any;
  career_path: {
    current_role: string;
    target_role: string;
  };
  learning_progress: {
    completion_percentage: number;
    total_courses: number;
    completed_courses: number;
    in_progress_courses: number;
    not_started_courses: number;
  };
  skill_gap: {
    readiness_score: number;
    missing_skill_count: number;
    missing_skills: string[];
  };
  known_skills: string[];
  recommendations: Array<{
    course_id: string;
    course_name: string;
    skills_taught: string;
    duration: string;
    level: string;
    provider: string;
    reason: string;
    priority: string;
    status?: string; // added dynamically from progress
  }>;
  announcements: any[];
  recent_documents: any[];
}

export const EmployeeDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchDashboardData = async () => {
    if (!user) return;
    try {
      setLoading(true);
      const res = await api.getEmployeeDashboard(user.user_id);
      setData(res);
    } catch (err) {
      setError('Could not fetch employee dashboard data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [user]);

  const handleStartCourse = async (courseId: string) => {
    if (!user) return;
    setActionLoading(courseId);
    try {
      await api.startCourse(user.user_id, courseId);
      alert('Successfully enrolled! Course status is now In Progress.');
      fetchDashboardData(); // reload
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
      fetchDashboardData(); // reload
    } catch (err) {
      alert('Failed to submit completion verification request.');
    } finally {
      setActionLoading(null);
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

  return (
    <div className="space-y-6">
      {/* Target Role Header */}
      <div className="rounded-xl bg-gradient-to-r from-slate-900 via-primary-dark to-primary p-6 text-white shadow-lg border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-primary-light/10 border border-primary-light/20 rounded-xl text-primary-light">
              <Award size={26} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider block">Career progression pathway</span>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-sm font-bold text-slate-100">{data.career_path.current_role}</span>
                <span className="text-xs text-slate-400 font-bold">→</span>
                <span className="text-sm font-extrabold text-accent">{data.career_path.target_role || 'Not Set'}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-850 px-4 py-2 rounded-xl border border-slate-850/60 max-w-xs shrink-0 self-start md:self-auto">
            <div className="text-right">
              <span className="text-[9px] font-bold text-slate-450 uppercase block">Target NSQF Level</span>
              <span className="text-xs font-bold text-white">Level {user?.nsqf_level || 4}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Career Readiness"
          value={`${data.skill_gap.readiness_score}%`}
          icon={<TrendingUp size={20} />}
          trend="Role match percentage"
          trendType="up"
        />
        <StatCard
          title="Completed Modules"
          value={data.learning_progress.completed_courses}
          icon={<CheckCircle2 size={20} className="text-success" />}
          trend={`${data.learning_progress.in_progress_courses} currently in progress`}
          trendType="up"
        />
        <StatCard
          title="Missing Skills"
          value={data.skill_gap.missing_skill_count}
          icon={<AlertCircle size={20} className="text-danger" />}
          trend="Required for promotion"
          trendType="down"
        />
        <StatCard
          title="Known Skills"
          value={data.known_skills.length}
          icon={<Award size={20} className="text-primary-light" />}
          trend="Verified capability tags"
          trendType="up"
        />
      </div>

      {/* Core Grid Split */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Side (Learning Recommendations) */}
        <div className="lg:col-span-2 space-y-6">
          <Card title="Recommended Courses" subtitle="Skill-aligned courses to bridge your current gap and match promotion requirements.">
            {data.recommendations.length === 0 ? (
              <p className="text-slate-400 text-xs py-4 text-center">No current course recommendations.</p>
            ) : (
              <div className="space-y-4">
                {data.recommendations.map((course) => (
                  <div 
                    key={course.course_id}
                    className="p-4 rounded-xl border border-slate-200/80 bg-white hover:shadow-sm hover:border-slate-350 transition-all flex flex-col justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-800 leading-snug">{course.course_name}</h4>
                          <span className="text-[10px] text-slate-450 mt-1 font-semibold block">
                            Provider: <span className="text-slate-650 font-bold">{course.provider}</span> • Level: <span className="text-slate-650 font-bold">{course.level}</span> • Duration: <span className="text-slate-650 font-bold">{course.duration}</span>
                          </span>
                        </div>
                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          course.priority === 'High' 
                            ? 'bg-danger/10 text-danger' 
                            : 'bg-primary-light/10 text-primary-light'
                        }`}>
                          {course.priority} Priority
                        </span>
                      </div>
                      <div className="mt-3 p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                        <Zap size={14} className="text-accent shrink-0 mt-0.5" />
                        <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                          <span className="font-bold text-slate-700">Reason:</span> {course.reason}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-1">
                      <div className="flex gap-1.5 items-center">
                        <span className="text-[10px] font-bold text-slate-450 uppercase">Taught Skills:</span>
                        <span className="text-[10px] font-extrabold text-primary-light bg-primary-light/5 border border-primary-light/10 rounded-md px-1.5 py-0.5">
                          {course.skills_taught}
                        </span>
                      </div>
                      
                      {/* Action buttons based on state */}
                      {course.status === 'completed' ? (
                        <span className="text-xs font-bold text-success flex items-center gap-1">
                          <CheckCircle2 size={16} /> Completed
                        </span>
                      ) : course.status === 'in_progress' ? (
                        <button
                          disabled={actionLoading === course.course_id}
                          onClick={() => handleSubmitCompletion(course.course_id)}
                          className="h-8 px-3 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm transition-transform active:scale-95 disabled:opacity-50"
                        >
                          <Send size={12} /> Submit Completion Verification
                        </button>
                      ) : course.status === 'verification_pending' ? (
                        <span className="text-[10px] font-bold text-warning bg-warning/10 border border-warning/15 px-2.5 py-1 rounded-lg">
                          Pending Manager Approval
                        </span>
                      ) : (
                        <button
                          disabled={actionLoading === course.course_id}
                          onClick={() => handleStartCourse(course.course_id)}
                          className="h-8 px-3 rounded-lg bg-primary hover:bg-primary-light text-white font-bold text-[11px] flex items-center gap-1 shadow-sm transition-transform active:scale-95 disabled:opacity-50"
                        >
                          <Plus size={14} /> Start Learning
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>

        {/* Right Side (Skill gaps details & announcements) */}
        <div className="space-y-6">
          <Card title="Role Competency Matrix">
            <div className="space-y-4">
              {/* Missing Skills */}
              <div>
                <span className="text-[10px] font-bold text-danger uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                  <AlertCircle size={14} /> Missing Skills ({data.skill_gap.missing_skill_count})
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.skill_gap.missing_skills.length === 0 ? (
                    <span className="text-slate-400 text-xs py-1">No missing skills! You meet all competency thresholds.</span>
                  ) : (
                    data.skill_gap.missing_skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-extrabold text-danger bg-danger/5 border border-danger/15 rounded-lg px-2.5 py-1"
                      >
                        {skill}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Known Skills */}
              <div>
                <span className="text-[10px] font-bold text-success uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                  <CheckCircle2 size={14} /> Verified Capabilities ({data.known_skills.length})
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.known_skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-extrabold text-success bg-success/5 border border-success/15 rounded-lg px-2.5 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Announcements */}
          <Card title="Notice Board">
            {data.announcements.length === 0 ? (
              <p className="text-slate-400 text-xs py-2 text-center">No recent announcements.</p>
            ) : (
              <div className="space-y-3.5">
                {data.announcements.slice(0, 3).map((item) => (
                  <div key={item.announcement_id} className="border-l-2 border-primary-light pl-3.5 py-0.5">
                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                      item.priority === 'High' ? 'bg-danger/10 text-danger' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {item.priority}
                    </span>
                    <h5 className="font-extrabold text-slate-800 text-xs mt-1.5 leading-snug">{item.title}</h5>
                    <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{item.created_at}</p>
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

export default EmployeeDashboard;
