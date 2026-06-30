import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ShieldAlert, BookOpen, TrendingUp, Award, Users } from 'lucide-react';
import useAuthStore from '../../services/authStore';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [validationError, setValidationError] = useState('');
  const { login, isLoading, error: authError } = useAuthStore();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Quick client-side validation
    if (!email.includes('@tatasteel.com')) {
      setValidationError('Please enter a valid Tata Steel email address (e.g. employee@tatasteel.com)');
      return;
    }
    if (password.length < 4) {
      setValidationError('Password must be at least 4 characters long.');
      return;
    }

    const user = await login(email, password);
    if (user) {
      // Redirect based on role
      const role = user.user_type;
      if (role === 'New Joiner') {
        navigate('/dashboard/new-joiner');
      } else if (role === 'Employee') {
        navigate('/dashboard/employee');
      } else if (role === 'Manager') {
        navigate('/dashboard/manager');
      } else if (role === 'Executive') {
        navigate('/dashboard/executive');
      } else if (role === 'L&D Team') {
        navigate('/dashboard/lnd');
      } else {
        navigate('/dashboard');
      }
    }
  };

  return (
    <div 
      className="h-screen bg-cover bg-center flex flex-col justify-between relative overflow-hidden font-sans"
      style={{ backgroundImage: "url('/assets/login-page-background-2.jpeg')" }}
    >
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-slate-950/20 z-0" />

      {/* Top Navigation Bar for Mobile */}
      <header className="w-full px-6 py-3 flex items-center z-10 relative md:hidden">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-white text-lg tracking-wider">TATA STEEL</span>
        </div>
      </header>

      {/* Main split screen layout */}
      <div className="flex-1 flex flex-col md:flex-row z-10 relative h-[calc(100vh-80px)] md:h-full">
        
        {/* Left Side: Brand Text & Icons */}
        <div className="hidden md:flex md:w-[55%] flex-col justify-between pt-6 pl-10 pr-8 pb-10 h-full text-white">
          
          <div>
            {/* Logo Section */}
            <div>
              <h1 className="text-xl font-bold text-[#00478E] tracking-wider">TATA STEEL</h1>
              <p className="text-xs text-slate-500 mt-0.5 font-normal">#WeAlsoMakeTomorrow</p>
            </div>

            {/* Main Heading Section */}
            <div className="max-w-lg mt-16 lg:mt-24">
              <h2 className="text-3xl lg:text-4xl font-normal text-[#2C3E50] leading-tight">
                Build Skills.<br/>
                Embrace Digital.<br/>
                <span className="text-[#0057B8] relative inline-block mt-0.5 font-normal">
                  Shape Tomorrow.
                  {/* Underline for "Shape Tomorrow." */}
                  <span className="absolute left-0 bottom-[-6px] w-1/3 h-1 bg-[#0057B8]"></span>
                </span>
              </h2>
              <p className="text-sm lg:text-base text-slate-700 mt-10 leading-relaxed font-normal">
                Your digital capability building platform to learn, grow and lead the change at Tata Steel.
              </p>
            </div>
          </div>

          {/* Icons and Text at the Bottom */}
          <div className="flex justify-start items-start text-center mt-auto space-x-2.5 lg:space-x-3">
            
            {/* Learn Anytime */}
            <div className="flex flex-col items-center max-w-[100px]">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0057B8] rounded-full flex items-center justify-center mb-2 shadow-md shadow-[#0057B8]/20">
                <BookOpen size={16} className="text-white" />
              </div>
              <p className="text-white text-xs lg:text-sm font-semibold tracking-wide leading-tight">Learn Anytime</p>
            </div>

            {/* Divider */}
            <div className="h-24 w-[2px] bg-white/50 mt-1 self-start"></div>

            {/* Build In-Demand Skills */}
            <div className="flex flex-col items-center max-w-[120px]">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0057B8] rounded-full flex items-center justify-center mb-2 shadow-md shadow-[#0057B8]/20">
                <TrendingUp size={16} className="text-white" />
              </div>
              <p className="text-white text-xs lg:text-sm font-semibold tracking-wide leading-tight">Build In-Demand Skills</p>
            </div>

            {/* Divider */}
            <div className="h-24 w-[2px] bg-white/50 mt-1 self-start"></div>

            {/* Get Certified */}
            <div className="flex flex-col items-center max-w-[100px]">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0057B8] rounded-full flex items-center justify-center mb-2 shadow-md shadow-[#0057B8]/20">
                <Award size={16} className="text-white" />
              </div>
              <p className="text-white text-xs lg:text-sm font-semibold tracking-wide leading-tight">Get Certified</p>
            </div>

            {/* Divider */}
            <div className="h-24 w-[2px] bg-white/50 mt-1 self-start"></div>

            {/* Grow Together */}
            <div className="flex flex-col items-center max-w-[100px]">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0057B8] rounded-full flex items-center justify-center mb-2 shadow-md shadow-[#0057B8]/20">
                <Users size={16} className="text-white" />
              </div>
              <p className="text-white text-xs lg:text-sm font-semibold tracking-wide leading-tight">Grow Together</p>
            </div>

          </div>

        </div>

        {/* Right Side: Login Card */}
        <div className="flex-grow md:w-[45%] flex items-center justify-center md:justify-end md:pr-12 lg:pr-24 xl:pr-32 p-4 h-full">
          <div className="w-full max-w-[400px] bg-white border border-slate-100 rounded-3xl shadow-2xl pt-8 pb-8 px-6 sm:pt-12 sm:pb-12 sm:px-8 relative">
          
          {/* Centered Logo */}
          <div className="flex justify-center mb-6">
            <img src="/assets/toplogo.png" alt="Tata Steel Logo" className="h-36 md:h-40 w-auto object-contain" />
          </div>

          {/* Error Banner */}
          {(validationError || authError) && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 text-xs font-semibold flex items-start gap-2.5">
              <ShieldAlert size={15} className="shrink-0 mt-0.5" />
              <span>{validationError || authError}</span>
            </div>
          )}

          {/* Form */}
          <form className="space-y-4" onSubmit={handleLoginSubmit}>
            
            {/* Email Field - Outlined Style */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-semibold text-slate-700">Email Address</label>
              <div className="relative border border-slate-300 rounded-xl focus-within:border-slate-800 focus-within:ring-1 focus-within:ring-slate-800 transition-all px-3 py-1.5 bg-slate-50/30 flex items-center">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="employee@tatasteel.com"
                  className="w-full bg-transparent border-none text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 text-sm py-0.5 pr-6"
                />
                <span className="absolute right-3 text-slate-400">
                  <Mail size={16} />
                </span>
              </div>
            </div>

            {/* Password Field - Outlined Style */}
            <div className="space-y-1">
              <label htmlFor="password" className="text-xs font-semibold text-slate-700">Password</label>
              <div className="relative border border-slate-300 rounded-xl focus-within:border-slate-800 focus-within:ring-1 focus-within:ring-slate-800 transition-all px-3 py-1.5 bg-slate-50/30 flex items-center">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent border-none text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 text-sm py-0.5 pr-12"
                />
                <div className="absolute right-3 flex items-center gap-1.5 text-slate-400">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="hover:text-slate-650 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  <Lock size={16} />
                </div>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 pt-0.5">
              <label className="flex items-center gap-2 select-none cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-3.5 w-3.5 rounded border-slate-350 bg-transparent text-slate-900 focus:ring-slate-900 cursor-pointer"
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="hover:underline transition-all">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm rounded-xl shadow-lg shadow-slate-955/10 flex items-center justify-center transition-all hover:scale-[1.01] active:scale-[0.99] disabled:bg-slate-400 disabled:text-slate-200 disabled:scale-100 mt-2"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

        </div>
      </div>
      </div>

      {/* Copyright Footer */}
      <footer className="w-full py-3 text-center z-10 relative">
        <p className="text-xs text-white/60 font-medium">
          &copy; {new Date().getFullYear()} Tata Steel. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Login;
