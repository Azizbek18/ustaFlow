"use client";

import { motion } from 'framer-motion';
import { 
  Briefcase, 
  DollarSign, 
  MapPin, 
  CheckCircle2, 
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function UstaDashboard() {
  return (
    <div className="p-8 space-y-10">
      {/* Header */}
      <section className="flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-[#bc13fe] font-bold text-sm uppercase tracking-[0.2em]">Ishchi holati: Aktiv</p>
          <h1 className="text-3xl font-black text-white">Yaxshi ishlang, Shoxrux! 🛠️</h1>
        </div>
        <div className="bg-white/5 border border-white/10 p-4 rounded-[2rem] flex gap-8">
          <div className="text-center">
            <p className="text-[10px] font-bold text-slate-500 uppercase">Balans</p>
            <p className="text-lg font-black text-white">2,450,000</p>
          </div>
          <div className="w-px bg-white/10" />
          <div className="text-center">
            <p className="text-[10px] font-bold text-slate-500 uppercase">Reyting</p>
            <p className="text-lg font-black text-white">5.0</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Yangi buyurtmalar', value: '3', icon: Briefcase, color: 'text-purple-500' },
          { label: 'Jarayonda', value: '2', icon: Clock, color: 'text-blue-500' },
          { label: 'Yakunlangan', value: '128', icon: CheckCircle2, color: 'text-emerald-500' },
          { label: 'Daromad (Oy)', value: '+14%', icon: DollarSign, color: 'text-orange-500' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col gap-4"
          >
            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase">{stat.label}</p>
              <p className="text-2xl font-black text-white">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Tasks */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Hozirgi buyurtmalar 
            <span className="px-2 py-0.5 rounded-md bg-[#bc13fe]/20 text-[#bc13fe] text-[10px]">2 TA</span>
          </h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800" />
                    <div>
                      <h4 className="text-white font-bold text-lg">Santexnika: Quvurlarni almashtirish</h4>
                      <p className="text-slate-500 text-sm flex items-center gap-1">
                        <MapPin size={12} /> Toshkent, Chilonzor 4-kvartal
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-white">450,000 so&apos;m</p>
                    <p className="text-[10px] text-emerald-500 font-bold uppercase">To&apos;langan</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(j => <div key={j} className="w-8 h-8 rounded-full border-2 border-[#120a14] bg-slate-700" />)}
                  </div>
                  <button className="flex items-center gap-2 text-sm font-bold text-[#bc13fe] hover:gap-3 transition-all">
                    Batafsil ko&apos;rish <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications / Sidebar */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Bildirishnomalar</h2>
          <div className="rounded-[2.5rem] bg-white/5 border border-white/10 p-6 space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#bc13fe] mt-2 shrink-0" />
                <div className="space-y-1">
                  <p className="text-white text-sm font-medium leading-relaxed">Yangi buyurtma kelib tushdi: Toshkent sh., Yunusobod tumani</p>
                  <p className="text-[10px] text-slate-500 font-bold">5 DAQIQA OLDIN</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
