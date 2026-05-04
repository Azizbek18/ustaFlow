"use client";

import { motion } from 'framer-motion';
import { 
  Search, 
  Bell, 
  Star, 
  Clock, 
  TrendingUp
} from 'lucide-react';

export default function ClientDashboard() {
  return (
    <div className="p-8 space-y-10">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-white">Xayrli kun! 👋</h1>
          <p className="text-slate-400">Bugun sizga qanday yordam bera olamiz?</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white transition-all">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-2 pr-4 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#bc13fe] to-[#7000ff]" />
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-white leading-none">Azizbek</p>
              <p className="text-[10px] text-slate-500 font-medium">Mijoz</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Buyurtmalarim', value: '12', icon: Clock, color: 'text-blue-500' },
          { label: 'Reytingingiz', value: '4.9', icon: Star, color: 'text-orange-500' },
          { label: 'Sarflangan', value: '1.2 mln', icon: TrendingUp, color: 'text-emerald-500' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-between"
          >
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black text-white">{stat.value}</p>
            </div>
            <div className={`p-4 rounded-2xl bg-white/5 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Active Orders or Search Section */}
      <section className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#bc13fe] opacity-[0.03] blur-[80px]" />
        
        <div className="max-w-2xl space-y-8 relative z-10">
          <h2 className="text-4xl font-black text-white leading-tight">
            Istalgan usta va xizmatni <span className="text-[#bc13fe]">tezda toping</span>
          </h2>
          <div className="relative group/input">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-[#bc13fe] transition-colors" size={24} />
            <input 
              type="text"
              placeholder="Santexnik, Elektrik yoki Tozalash xizmati..."
              className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 pl-16 pr-6 text-white focus:outline-none focus:border-[#bc13fe] transition-all text-lg"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {['Santexnik', 'Elektrik', 'Konditsioner', 'Mebel', 'Tozalash'].map((tag) => (
              <button key={tag} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm hover:border-[#bc13fe] hover:text-white transition-all">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
