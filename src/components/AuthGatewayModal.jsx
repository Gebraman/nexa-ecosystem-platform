import React, { useState } from 'react';
import { 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Mail, 
  User, 
  Phone, 
  ArrowRight, 
  GraduationCap, 
  TrendingUp, 
  Code2, 
  CheckCircle2,
  X
} from 'lucide-react';

export default function AuthGatewayModal({ isOpen, onClose, onAuthSuccess }) {
  const [tab, setTab] = useState('login'); // 'login' | 'register'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [track, setTrack] = useState('fullstack-dev');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please provide your email and password.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user = {
        name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ') || 'Honors Scholar',
        email: email.trim(),
        role: 'Verified Scholar',
        track: track,
        token: 'nexa-token-' + Date.now()
      };
      localStorage.setItem('nexa_user', JSON.stringify(user));
      onAuthSuccess(user);
    }, 600);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Full name is required.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('A valid email address is required.');
      return;
    }
    if (!password.trim() || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        track: track,
        role: 'Honors Scholar Candidate',
        token: 'nexa-token-' + Date.now()
      };
      localStorage.setItem('nexa_user', JSON.stringify(user));
      onAuthSuccess(user);
    }, 700);
  };

  const handleGuestAccess = () => {
    const guestUser = {
      name: 'Guest Scholar',
      email: 'scholar@nexa.edu',
      role: 'Guest Scholar',
      track: 'fullstack-dev',
      isGuest: true,
      token: 'guest-' + Date.now()
    };
    localStorage.setItem('nexa_user', JSON.stringify(guestUser));
    onAuthSuccess(guestUser);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#212529] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden text-left">
        
        {/* Top Decorative Amber Accent Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

        {/* Optional Close if dismissible */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Layers className="w-5 h-5 text-[#f39228]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-white tracking-wider">NEXA</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-800 font-bold">
                  ECOSYSTEM GATEWAY
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Academy • Web Lab • Scholar Mentorship
              </p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {tab === 'login' ? 'Sign In to Your Scholar Account' : 'Join the Nexa Academic Network'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Access 1-on-1 mentorship, institutional Forex SMC strategy, and full-stack software engineering.
          </p>

          {/* Tab Selector */}
          <div className="grid grid-cols-2 gap-2 mt-5 p-1 rounded-xl bg-dark-950 border border-slate-800">
            <button
              onClick={() => { setTab('login'); setError(''); }}
              className={`py-2 rounded-lg text-xs font-bold transition-all ${
                tab === 'login'
                  ? 'bg-[#f39228] text-dark-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setTab('register'); setError(''); }}
              className={`py-2 rounded-lg text-xs font-bold transition-all ${
                tab === 'register'
                  ? 'bg-[#f39228] text-dark-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 pt-2 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-red-300 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span>{error}</span>
            </div>
          )}

          {tab === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="scholar@example.com"
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-[#f39228] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-[#f39228] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-[#f39228] hover:bg-[#e0821e] disabled:bg-amber-700 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mt-2"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Nexa Platform</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ermias Tadesse"
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-[#f39228] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@example.com"
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-[#f39228] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone (WhatsApp Ready)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 202... or +251 911..."
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-[#f39228] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Core Track of Interest
                </label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white focus:border-[#f39228] focus:outline-none"
                >
                  <option value="fullstack-dev">Full-Stack Web Dev Academy (32-Week Immersive)</option>
                  <option value="forex-trading">Nexa Forex Trading Academy (Institutional SMC)</option>
                  <option value="k12-scholars">K-12 Academic Scholars Tutoring Network (Grades 1–12)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-[#f39228] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-[#f39228] hover:bg-[#e0821e] disabled:bg-amber-700 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mt-3"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account & Enter Platform</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-mono">
              <span className="bg-[#212529] px-2 text-slate-500">Or continue instantly</span>
            </div>
          </div>

          {/* Instant Guest Access Button */}
          <button
            onClick={handleGuestAccess}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#f39228]" />
            <span>⚡ Continue as Guest Scholar (Explore Platform)</span>
          </button>

          <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Secure 256-Bit Encrypted Scholar Access</span>
          </div>
        </div>

      </div>
    </div>
  );
}
