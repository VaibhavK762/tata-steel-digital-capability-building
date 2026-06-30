import React, { useEffect, useState } from 'react';
import { BarChart as ReChartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Building2, TrendingUp, Download } from 'lucide-react';
import api from '../services/api';
import Card from '../components/common/Card';
import StatCard from '../components/common/StatCard';
import ChartCard from '../components/common/ChartCard';

interface DeptStat {
  department: string;
  completion: number;
  readiness: number;
}

export const Reports: React.FC = () => {
  const [stats, setStats] = useState<DeptStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await api.getLdDashboard();
        setStats(data.department_stats || []);
      } catch (err) {
        console.error('Failed to fetch reports data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-800">Capability Reports & Analytics</h1>
          <p className="text-xs text-slate-500 font-medium">Department benchmarks, training logs, and compliance indices.</p>
        </div>
        <button
          onClick={() => alert('Downloading CSV Report...')}
          className="h-9 px-4 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-sm transition-all"
        >
          <Download size={14} /> Download CSV Summary
        </button>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ChartCard title="Department Benchmarks" subtitle="Comparison of completion rates and role readiness by business unit.">
              <ResponsiveContainer width="100%" height="100%">
                <ReChartsBarChart
                  data={stats}
                  margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="department" tick={{ fontSize: 9, fontWeight: 700 }} />
                  <YAxis tick={{ fontSize: 9, fontWeight: 700 }} />
                  <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ fontSize: '10px', fontWeight: 'bold' }} />
                  <Bar dataKey="completion" name="Completion %" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="readiness" name="Readiness Score" fill="#10B981" radius={[4, 4, 0, 0]} />
                </ReChartsBarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div>
            <Card title="Business Unit Benchmarks Table">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-450 uppercase tracking-wider">
                      <th className="py-2">Division</th>
                      <th className="py-2 text-right">Index</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {stats.map((item, index) => (
                      <tr key={index} className="text-xs text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 flex items-center gap-1.5">
                          <Building2 size={14} className="text-slate-400 shrink-0" />
                          <span className="truncate max-w-[150px]">{item.department}</span>
                        </td>
                        <td className="py-2.5 text-right text-success">{item.readiness}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
