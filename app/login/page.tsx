"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  LogIn,
  Fingerprint
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    rememberMe: false
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#120a14] relative overflow-hidden">
      {/* Background Neon Glows (Register bilan bir xil) */}
      <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] bg-[#bc13fe] opacity-[0.07] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[450px] h-[450px] bg-[#bc13fe] opacity-[0.07] rounded-full blur-[110px] pointer-events-none" />

      <main className="w-full max-w-[440px] flex flex-col gap-6 relative z-10">
        
        {/* Header Section */}
        <section className="text-center space-y-2 mb-2">
          <div className="inline-flex p-4 rounded-3xl bg-white/5 glass-border-gradient mb-4 active-glow">
            <Fingerprint size={40} className="text-[#bc13fe]" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">
            Xush kelibsiz!
          </h1>
          <p className="text-slate-500 text-sm tracking-wide">
            UstaFlow ekotizimiga kirish uchun ma'lumotlarni kiriting
          </p>
        </section>

        {/* Login Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-10 rounded-[2.5rem] glass-border-gradient flex flex-col gap-6"
        >
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Phone Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">Telefon</label>
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-[#bc13fe] transition-colors" size={18} />
                <input 
                  type="tel"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-700 focus:outline-none focus:border-[#bc13fe] transition-all"
                  placeholder="+998 90 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Maxfiy so'z</label>
                <a href="#" className="text-[10px] text-[#bc13fe] hover:underline font-bold uppercase tracking-wider">Unutdingizmi?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-[#bc13fe] transition-colors" size={18} />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#bc13fe] transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center gap-3 px-1">
              <input 
                type="checkbox" 
                id="remember"
                className="w-4 h-4 rounded border-white/10 bg-white/5 text-[#bc13fe] focus:ring-[#bc13fe]"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
              />
              <label htmlFor="remember" className="text-xs text-slate-400 cursor-pointer select-none">
                Meni eslab qol
              </label>
            </div>

            <button className="w-full py-4 bg-[#bc13fe] text-white font-black rounded-2xl active-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2">
              KIRISH
              <LogIn size={20} />
            </button>
          </form>
        </motion.div>

        {/* Footer Link */}
        <div className="text-center">
          <p className="text-sm text-slate-500 font-medium">
            Hisobingiz yo'qmi? <Link href="/register" className="text-[#bc13fe] font-bold hover:underline">Ro'yxatdan o'ting</Link>
          </p>
        </div>

      </main>
    </div>
  );
}