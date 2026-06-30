import React, { useEffect, useState } from 'react';
import { 
  Users, 
  BookOpen, 
  CheckCircle, 
  TrendingUp, 
  FileText, 
  Megaphone, 
  Plus, 
  Upload, 
  PlusCircle, 
  Building2, 
  Activity,
  Trash2
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart as ReChartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  Legend
} from 'recharts';
import useAuthStore from '../../services/authStore';
import api from '../../services/api';
import Card from '../../components/common/Card';
import StatCard from '../../components/common/StatCard';
import ChartCard from '../../components/common/ChartCard';

interface LdDashboardData {
  overview: {
    total_users: number;
    total_courses: number;
    total_progress_records: number;
    overall_completion: number;
    average_readiness: number;
  };
  department_stats: Array<{ department: string; completion: number; readiness: number }>;
  top_skill_gaps: Array<{ skill: string; count: number }>;
  top_courses: Array<{ course_name: string; enrollments: number }>;
  documents_summary: {
    total_documents: number;
    categories: Array<{ category: string; count: number }>;
  };
  announcements: any[];
}

export const LndDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [data, setData] = useState<LdDashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Form states
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementMsg, setAnnouncementMsg] = useState('');
  const [announcementAudience, setAnnouncementAudience] = useState('ALL');
  const [announcementPriority, setAnnouncementPriority] = useState('Medium');
  
  const [docFile, setDocFile] = useState<File | null>(null);
  const [docCategory, setDocCategory] = useState('Safety');
  
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseSkills, setCourseSkills] = useState('');
  const [courseRole, setCourseRole] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseLevel, setCourseLevel] = useState('Intermediate');
  const [courseProvider, setCourseProvider] = useState('Internal');

  const [activeTab, setActiveTab] = useState<'announcement' | 'document' | 'course'>('announcement');
  const [submitting, setSubmitting] = useState(false);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const res = await api.getLdDashboard();
      setData(res);
    } catch (err) {
      setError('Could not fetch L&D dashboard analytics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!announcementTitle.trim() || !announcementMsg.trim() || !user) return;
    setSubmitting(true);
    try {
      await api.createAnnouncement(
        announcementTitle,
        announcementMsg,
        announcementAudience,
        announcementPriority,
        user.name
      );
      alert('Announcement created successfully!');
      setAnnouncementTitle('');
      setAnnouncementMsg('');
      fetchDashboardData(); // reload
    } catch (err) {
      alert('Failed to publish announcement.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleUploadDocument = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!docFile || !user) return;
    setSubmitting(true);
    try {
      await api.uploadDocument(docFile, docCategory, user.name);
      alert('Training document uploaded and index queue updated.');
      setDocFile(null);
      // Reset input element
      const fileInput = document.getElementById('document-file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      fetchDashboardData(); // reload
    } catch (err) {
      alert('Failed to upload document.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseId.trim() || !courseName.trim() || !courseSkills.trim() || !courseRole.trim()) {
      alert('Please fill out all required course fields.');
      return;
    }
    setSubmitting(true);
    try {
      await api.createCourse({
        course_id: courseId,
        course_name: courseName,
        skills_taught: courseSkills,
        target_role: courseRole,
        duration: courseDuration || '3h',
        level: courseLevel,
        provider: courseProvider || 'Tata Steel L&D'
      });
      alert('New course registered in catalog successfully.');
      setCourseId('');
      setCourseName('');
      setCourseSkills('');
      setCourseRole('');
      setCourseDuration('');
      fetchDashboardData(); // reload
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to register course.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) return <p className="text-slate-400">Failed to load L&D dashboard.</p>;

  // Format Recharts data
  const skillGapChartData = data.top_skill_gaps.slice(0, 6).map(item => ({
    skill: item.skill.length > 15 ? `${item.skill.substring(0, 13)}...` : item.skill,
    Count: item.count
  }));

  const topCoursesChartData = data.top_courses.slice(0, 5).map(item => ({
    course: item.course_name.length > 20 ? `${item.course_name.substring(0, 18)}...` : item.course_name,
    Enrollments: item.enrollments
  }));

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider block">Enterprise Admin console</span>
          <h1 className="text-xl font-black mt-1 leading-none">L&D Platform Admin Dashboard</h1>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            Global metrics oversight, announcement creation, and content repository indexing.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-850 px-4 py-2 rounded-xl">
          <Activity className="text-primary-light" size={24} />
          <div>
            <span className="text-[9px] font-semibold text-slate-450 uppercase block">Total Database Rows</span>
            <span className="text-xs font-bold text-white">{data.overview.total_users} Users enrolled</span>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard
          title="Total Users"
          value={data.overview.total_users}
          icon={<Users size={20} />}
          trend="Active system accounts"
          trendType="neutral"
        />
        <StatCard
          title="Registered Courses"
          value={data.overview.total_courses}
          icon={<BookOpen size={20} className="text-primary-light" />}
          trend="Learning catalog modules"
          trendType="up"
        />
        <StatCard
          title="Total Enrollments"
          value={data.overview.total_progress_records}
          icon={<CheckCircle size={20} className="text-success" />}
          trend="Progress records index"
          trendType="up"
        />
        <StatCard
          title="Avg Division Readiness"
          value={`${data.overview.average_readiness}%`}
          icon={<TrendingUp size={20} className="text-accent" />}
          trend="Target role readiness avg"
          trendType="up"
        />
        <StatCard
          title="Indexed SOPs"
          value={data.documents_summary.total_documents}
          icon={<FileText size={20} className="text-warning" />}
          trend="Active RAG vector docs"
          trendType="up"
        />
      </div>

      {/* Main split grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column (Actions & Charts) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Admin Action Forms Panel */}
          <Card 
            title="L&D Administrator Actions" 
            subtitle="Upload documents to RAG knowledge bases, write announcements, or add courses to the catalog."
            headerActions={
              <div className="flex bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                <button
                  onClick={() => setActiveTab('announcement')}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${
                    activeTab === 'announcement' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Notice
                </button>
                <button
                  onClick={() => setActiveTab('document')}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${
                    activeTab === 'document' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Document
                </button>
                <button
                  onClick={() => setActiveTab('course')}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${
                    activeTab === 'course' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Course
                </button>
              </div>
            }
          >
            {/* Announcement Form */}
            {activeTab === 'announcement' && (
              <form onSubmit={handleCreateAnnouncement} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Announcement Title</label>
                    <input
                      type="text"
                      required
                      value={announcementTitle}
                      onChange={(e) => setAnnouncementTitle(e.target.value)}
                      placeholder="e.g. Safety SOP Refresher Seminar 2026"
                      className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs focus:bg-white focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div className="grid gap-4 grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Audience</label>
                      <select
                        value={announcementAudience}
                        onChange={(e) => setAnnouncementAudience(e.target.value)}
                        className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-2 text-xs focus:bg-white focus:border-primary focus:outline-none"
                      >
                        <option value="ALL">All Roles</option>
                        <option value="EMPLOYEES">Employees Only</option>
                        <option value="MANAGERS">Managers Only</option>
                        <option value="EXECUTIVES">Executives Only</option>
                        <option value="LND">L&D Admin Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Priority</label>
                      <select
                        value={announcementPriority}
                        onChange={(e) => setAnnouncementPriority(e.target.value)}
                        className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-2 text-xs focus:bg-white focus:border-primary focus:outline-none"
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Message / Bulletin Body</label>
                  <textarea
                    required
                    value={announcementMsg}
                    onChange={(e) => setAnnouncementMsg(e.target.value)}
                    placeholder="Write detailed announcements regarding training events, policy changes, etc."
                    rows={3}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs focus:bg-white focus:border-primary focus:outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 h-9 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-sm transition-all hover:scale-[1.01]"
                >
                  <Megaphone size={14} /> {submitting ? 'Publishing...' : 'Publish Announcement'}
                </button>
              </form>
            )}

            {/* Document Upload Form */}
            {activeTab === 'document' && (
              <form onSubmit={handleUploadDocument} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Training Document File</label>
                    <input
                      id="document-file-input"
                      type="file"
                      required
                      onChange={(e) => setDocFile(e.target.files?.[0] || null)}
                      className="w-full text-xs text-slate-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-[11px] file:font-semibold file:bg-primary-light/10 file:text-primary hover:file:bg-primary-light/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Document Category</label>
                    <select
                      value={docCategory}
                      onChange={(e) => setDocCategory(e.target.value)}
                      className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-2 text-xs focus:bg-white focus:border-primary focus:outline-none"
                    >
                      <option value="Safety">Safety & Standards</option>
                      <option value="HR Policy">HR & Leave Policies</option>
                      <option value="Onboarding">Onboarding Manuals</option>
                      <option value="Maintenance">Maintenance SOPs</option>
                      <option value="Annual Report">Company Operations</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting || !docFile}
                  className="px-4 h-9 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-sm transition-all hover:scale-[1.01] disabled:opacity-50"
                >
                  <Upload size={14} /> {submitting ? 'Uploading...' : 'Upload & Index Document'}
                </button>
              </form>
            )}

            {/* Course Catalog Form */}
            {activeTab === 'course' && (
              <form onSubmit={handleCreateCourse} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Course ID (Unique)</label>
                    <input
                      type="text"
                      required
                      value={courseId}
                      onChange={(e) => setCourseId(e.target.value)}
                      placeholder="e.g. SF-SAFETY-101"
                      className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs focus:bg-white focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Course Name</label>
                    <input
                      type="text"
                      required
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      placeholder="e.g. Basic Shop Floor Safety & LOTO Checklists"
                      className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs focus:bg-white focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Skills Taught</label>
                    <input
                      type="text"
                      required
                      value={courseSkills}
                      onChange={(e) => setCourseSkills(e.target.value)}
                      placeholder="e.g. LOTO Tagging, Electrical Safety"
                      className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs focus:bg-white focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Target Role Mapping</label>
                    <input
                      type="text"
                      required
                      value={courseRole}
                      onChange={(e) => setCourseRole(e.target.value)}
                      placeholder="e.g. Plant Technician"
                      className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs focus:bg-white focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Duration</label>
                    <input
                      type="text"
                      value={courseDuration}
                      onChange={(e) => setCourseDuration(e.target.value)}
                      placeholder="e.g. 4h"
                      className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs focus:bg-white focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Level</label>
                    <select
                      value={courseLevel}
                      onChange={(e) => setCourseLevel(e.target.value)}
                      className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-2 text-xs focus:bg-white focus:border-primary focus:outline-none"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Provider</label>
                    <input
                      type="text"
                      value={courseProvider}
                      onChange={(e) => setCourseProvider(e.target.value)}
                      placeholder="e.g. Tata Steel L&D"
                      className="w-full h-9 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs focus:bg-white focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 h-9 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-sm transition-all hover:scale-[1.01]"
                >
                  <PlusCircle size={14} /> {submitting ? 'Registering...' : 'Register Course Catalog'}
                </button>
              </form>
            )}
          </Card>

          {/* Charts area */}
          <div className="grid gap-6 md:grid-cols-2">
            <ChartCard title="Global Skill Gaps" subtitle="Frequencies of missing skills across all user cohorts.">
              {skillGapChartData.length === 0 ? (
                <p className="text-slate-400 text-xs py-4">No gaps index found.</p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <ReChartsBarChart data={skillGapChartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="skill" tick={{ fontSize: 9, fontWeight: 700 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 9, fontWeight: 700 }} />
                    <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '8px' }} />
                    <Bar dataKey="Count" fill="#EF4444" radius={[4, 4, 0, 0]} maxBarSize={25} />
                  </ReChartsBarChart>
                </ResponsiveContainer>
              )}
            </ChartCard>

            <ChartCard title="Top Enrolled Courses" subtitle="Most popular courses by student registrations count.">
              {topCoursesChartData.length === 0 ? (
                <p className="text-slate-400 text-xs py-4">No course progress indicators.</p>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <ReChartsBarChart data={topCoursesChartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="course" tick={{ fontSize: 8, fontWeight: 700 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 9, fontWeight: 700 }} />
                    <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '8px' }} />
                    <Bar dataKey="Enrollments" fill="#10B981" radius={[4, 4, 0, 0]} maxBarSize={25} />
                  </ReChartsBarChart>
                </ResponsiveContainer>
              )}
            </ChartCard>
          </div>
        </div>

        {/* Right Column (Dept stats & documents categories) */}
        <div className="space-y-6">
          {/* Department stats */}
          <Card title="Department Benchmarks" subtitle="Completion and readiness benchmarks per active department.">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-450 uppercase tracking-wider">
                    <th className="py-2">Department</th>
                    <th className="py-2 text-center">Completion</th>
                    <th className="py-2 text-right">Readiness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.department_stats.map((dept, index) => (
                    <tr key={index} className="text-xs text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 flex items-center gap-1.5">
                        <Building2 size={14} className="text-slate-400 shrink-0" />
                        <span className="truncate max-w-[110px]">{dept.department}</span>
                      </td>
                      <td className="py-2.5 text-center text-primary-light">{dept.completion}%</td>
                      <td className="py-2.5 text-right text-success">{dept.readiness}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* RAG Documents category indexes */}
          <Card title="Knowledge Base categories" subtitle="Training documents uploaded by category tag.">
            <div className="space-y-3">
              {data.documents_summary.categories.map((cat, index) => (
                <div key={index} className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-slate-400 shrink-0" />
                    <span className="text-xs font-bold text-slate-700">{cat.category}</span>
                  </div>
                  <span className="text-[10px] font-extrabold bg-slate-200 text-slate-650 px-2 py-0.5 rounded-md">
                    {cat.count} files
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LndDashboard;
