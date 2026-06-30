import React from 'react';
import { Clipboard, Award, ShieldAlert, CheckCircle2, Play, ExternalLink } from 'lucide-react';
import Card from '../components/common/Card';

interface AssessmentItem {
  id: number;
  title: string;
  category: 'Safety' | 'Technical' | 'SOP';
  questions: number;
  timeLimit: string;
  status: 'Not Started' | 'Completed' | 'Awaiting Sign-off';
  score?: string;
  nsqfLevel: number;
}

export const Assessments: React.FC = () => {
  const assessments: AssessmentItem[] = [
    {
      id: 1,
      title: 'Blast Furnace Gas Safety Regulations Check',
      category: 'Safety',
      questions: 15,
      timeLimit: '20 mins',
      status: 'Not Started',
      nsqfLevel: 3,
    },
    {
      id: 2,
      title: 'Cast House Operation Procedures (SOP 12)',
      category: 'SOP',
      questions: 20,
      timeLimit: '30 mins',
      status: 'Awaiting Sign-off',
      nsqfLevel: 4,
    },
    {
      id: 3,
      title: 'Basic Metallurgy & Ironmaking Quiz',
      category: 'Technical',
      questions: 25,
      timeLimit: '40 mins',
      status: 'Completed',
      score: '92%',
      nsqfLevel: 4,
    },
    {
      id: 4,
      title: 'Shop Floor Emergency Evacuation Protocols',
      category: 'Safety',
      questions: 10,
      timeLimit: '15 mins',
      status: 'Completed',
      score: '100%',
      nsqfLevel: 3,
    },
  ];

  const handleStartAssessment = (id: number) => {
    alert(`Starting assessment ${id}... (Redirecting to testing portal)`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-black text-slate-800">Capability Assessments</h1>
        <p className="text-xs text-slate-500 font-medium">Take quizzes and verify compliance with NSDC steel sector competencies.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {assessments.map((a) => (
          <Card key={a.id} hoverEffect={true} className="flex flex-col justify-between h-48">
            <div>
              <div className="flex items-start justify-between gap-3">
                <span className={`text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                  a.category === 'Safety' 
                    ? 'bg-danger/10 text-danger' 
                    : a.category === 'SOP'
                    ? 'bg-warning/10 text-warning'
                    : 'bg-primary-light/10 text-primary-light'
                }`}>
                  {a.category} Test
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">NSQF Level {a.nsqfLevel}</span>
              </div>
              <h3 className="font-extrabold text-xs text-slate-800 mt-3 line-clamp-2 leading-snug">
                {a.title}
              </h3>
              <p className="text-[10px] text-slate-450 mt-1 font-semibold">
                {a.questions} Questions • {a.timeLimit} Limit
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-4">
              {a.status === 'Completed' ? (
                <div className="flex items-center gap-1.5 text-success text-[11px] font-bold">
                  <CheckCircle2 size={16} />
                  <span>Score: {a.score}</span>
                </div>
              ) : a.status === 'Awaiting Sign-off' ? (
                <span className="text-[10px] font-bold text-warning bg-warning/5 border border-warning/10 rounded px-2 py-0.5">
                  Awaiting Evaluator
                </span>
              ) : (
                <span className="text-[10px] font-bold text-slate-400">Not Attempted</span>
              )}

              {a.status === 'Not Started' && (
                <button
                  onClick={() => handleStartAssessment(a.id)}
                  className="h-8 px-3 rounded-lg bg-primary hover:bg-primary-light text-white font-bold text-[10px] flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
                >
                  <Play size={12} className="fill-white" /> Start test
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Assessments;
