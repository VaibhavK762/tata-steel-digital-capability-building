import React, { useEffect, useState } from 'react';
import { FileText, Search, Download, CheckCircle, Clock } from 'lucide-react';
import api from '../services/api';
import { Document } from '../types';
import Card from '../components/common/Card';

export const Documents: React.FC = () => {
  const [docs, setDocs] = useState<Document[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const fetchDocs = async () => {
    try {
      setLoading(true);
      const data = await api.getDocuments();
      setDocs(data || []);
    } catch (err) {
      console.error('Failed to fetch documents', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const categories = ['All', ...Array.from(new Set(docs.map((d) => d.category)))];

  const filteredDocs = docs.filter((doc) => {
    const matchesSearch = doc.document_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-slate-800">Enterprise Document Library</h1>
          <p className="text-xs text-slate-500 font-medium">Access SOPs, safety instructions, guidelines, and policies.</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative flex-1 w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search documents by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 bg-slate-50 border border-slate-200 pl-10 pr-4 rounded-lg text-xs focus:bg-white focus:border-primary focus:outline-none transition-all placeholder-slate-400"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto scrollbar-none py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border shrink-0 ${
                selectedCategory === cat
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
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
          {filteredDocs.length === 0 ? (
            <div className="sm:col-span-2 lg:col-span-3 text-center py-12 text-slate-400 text-xs font-semibold">
              No matching documents found.
            </div>
          ) : (
            filteredDocs.map((doc) => (
              <Card key={doc.document_id} hoverEffect={true} className="flex flex-col justify-between h-44">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2.5 bg-primary/5 border border-primary/10 rounded-lg text-primary shrink-0">
                      <FileText size={20} />
                    </div>
                    <span className="text-[9px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md uppercase tracking-wider">
                      {doc.category}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-xs text-slate-800 mt-3.5 line-clamp-2 leading-snug" title={doc.document_name}>
                    {doc.document_name}
                  </h3>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-4">
                  <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                    <Clock size={12} />
                    <span>Uploaded: {doc.upload_date}</span>
                  </div>
                  <a
                    href={`http://localhost:8000/${doc.file_path}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-primary-dark p-1.5 hover:bg-slate-100 rounded-md transition-colors"
                    title="View Document"
                  >
                    <Download size={16} />
                  </a>
                </div>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Documents;
