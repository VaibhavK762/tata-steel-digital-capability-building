import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import useAuthStore from '../../services/authStore';
import api from '../../services/api';
import { ChatMessage } from '../../types';

export const AIChatbot: React.FC = () => {
  const { user } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: "Hello! I'm your AI learning assistant. How can I help you today? You can ask me about safety manuals, HR policy, leave approvals, or courses.",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);



  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || !user) return;

    // Add user message
    const userMsg: ChatMessage = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setMessage('');
    setIsTyping(true);

    try {
      const response = await api.sendMessage(textToSend, user.user_id, user.user_type);
      
      const botMsg: ChatMessage = {
        sender: 'bot',
        text: response.response || response.answer || response.output || "I'm sorry, I encountered an issue processing that. Please try again.",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const botMsg: ChatMessage = {
        sender: 'bot',
        text: 'Sorry, I am having trouble connecting to the capability building agent. Please ensure the backend is running.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(message);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-copilot', handleOpen);
    return () => window.removeEventListener('open-ai-copilot', handleOpen);
  }, []);

  if (!user || window.location.pathname === '/login') return null;

  return (
    <>
      {/* Chat Window Side Panel */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full md:w-1/2 h-full bg-slate-950/85 backdrop-blur-md border-l border-slate-800 shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="bg-slate-900/95 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0057B8] flex items-center justify-center text-white">
                <Bot size={16} />
              </div>
              <div>
                <h3 className="text-xs font-bold flex items-center gap-1.5 leading-none">
                  AI Copilot <Sparkles size={11} className="text-accent fill-accent" />
                </h3>
                <span className="text-[9px] text-slate-400 font-semibold mt-0.5 block">Online • L&D Advisor</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-transparent text-[11px] text-white">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-[#0057B8] flex items-center justify-center font-bold text-[10px] shrink-0">
                    B
                  </div>
                )}
                <div>
                  <div
                    className={`rounded-xl px-3.5 py-2 text-[11px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#0057B8] text-white font-medium border border-[#0057B8]/20 shadow-sm'
                        : 'bg-slate-900/85 text-white border border-slate-800/60 shadow-sm'
                    }`}
                  >
                    {/* Preserve line breaks for agent explanations */}
                    <div className="whitespace-pre-line">{msg.text}</div>
                  </div>
                  <span className="text-[9px] text-slate-500 font-semibold mt-1 block px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2.5 max-w-[80%]">
                <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-[#0057B8] flex items-center justify-center font-bold text-[10px] shrink-0">
                  B
                </div>
                <div className="bg-slate-900/85 rounded-xl border border-slate-800/60 px-3.5 py-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>



          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-slate-800/60 bg-slate-950/60 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 px-3 py-2 bg-slate-900/60 border border-slate-850/80 rounded-xl text-[11px] text-white focus:bg-slate-900 focus:border-[#0057B8] focus:outline-none transition-all placeholder-slate-500"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="px-3.5 py-2 bg-[#0057B8] hover:bg-[#0057B8]/80 disabled:bg-slate-800 text-white rounded-xl flex items-center justify-center transition-colors focus:outline-none"
            >
              <Send size={12} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg border border-primary-light/20 focus:outline-none transition-transform hover:scale-105 active:scale-95"
        >
          <MessageSquare size={22} />
        </button>
      )}
    </>
  );
};

export default AIChatbot;
