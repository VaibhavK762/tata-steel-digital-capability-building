import React, { useEffect, useState } from 'react';
import { BookOpen, Search, Zap, Plus, ExternalLink } from 'lucide-react';
import api from '../services/api';
import { Course } from '../types';
import Card from '../components/common/Card';
import useAuthStore from '../services/authStore';

export const Programs: React.FC = () => {
  const { user } = useAuthStore();
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState<string | null>(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      // Fetch using our new endpoint
      const response = await fetch('http://localhost:8000/courses');
      const data = await response.json();
      setCourses(data || []);
    } catch (err) {
      console.error('Failed to fetch courses', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleStartCourse = async (courseId: string) => {
    if (!user) return;
    setEnrolling(courseId);
    try {
      await api.startCourse(user.user_id, courseId);
      alert('Successfully enrolled! Course status is now In Progress. Go to My Learning to track progress.');
    } catch (err) {
      alert('Failed to enroll in this course.');
    } finally {
      setEnrolling(null);
    }
  };

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.course_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.skills_taught.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || c.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-black text-slate-800">Learning Catalog</h1>
        <p className="text-xs text-slate-500 font-medium">Browse and enroll in certified capability building modules.</p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative flex-1 w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search courses, skills, providers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 bg-slate-50 border border-slate-200 pl-10 pr-4 rounded-lg text-xs focus:bg-white focus:border-primary focus:outline-none transition-all placeholder-slate-400"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto scrollbar-none py-1">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border shrink-0 ${
                selectedLevel === lvl
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.length === 0 ? (
            <div className="sm:col-span-2 lg:col-span-3 text-center py-12 text-slate-400 text-xs font-semibold">
              No courses found in catalog.
            </div>
          ) : (
            filteredCourses.map((c) => (
              <Card key={c.course_id} hoverEffect={true} className="flex flex-col justify-between h-56">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[9px] font-extrabold px-2 py-0.5 bg-slate-150 text-slate-650 rounded-md uppercase tracking-wider">
                      {c.level}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">{c.provider}</span>
                  </div>
                  <h3 className="font-extrabold text-xs text-slate-800 mt-2.5 line-clamp-2 leading-snug" title={c.course_name}>
                    {c.course_name}
                  </h3>
                  <div className="mt-3 text-[10px] text-slate-400 font-semibold leading-normal">
                    <span className="text-slate-500 font-bold block">Skills Focus:</span>
                    <span className="text-slate-600 block mt-0.5">{c.skills_taught}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-4">
                  <span className="text-[10px] text-slate-450 font-bold uppercase">Duration: {c.duration}</span>
                  <button
                    disabled={enrolling === c.course_id}
                    onClick={() => handleStartCourse(c.course_id)}
                    className="h-7 px-3 rounded-lg bg-primary hover:bg-primary-light text-white font-bold text-[10px] flex items-center gap-1 shadow-sm transition-transform active:scale-95 disabled:opacity-50"
                  >
                    <Plus size={12} /> Start learning
                  </button>
                </div>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Programs;
