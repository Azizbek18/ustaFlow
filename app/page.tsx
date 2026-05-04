"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#bc13fe]/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#bc13fe] opacity-[0.1] rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#00f2ff] opacity-[0.05] rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-[#ebb2ff]"
          >
            <Sparkles size={16} />
            <span>Xizmatlar sohasida yangi davr</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter"
          >
            Usta<span className="text-[#bc13fe] drop-shadow-[0_0_15px_rgba(188,19,254,0.5)]">Flow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed"
          >
            Ustalarni, korxonalarni va mijozlarni bitta aqlli ekotizimda birlashtiring.
            Xizmatlarni boshqarish hech qachon bunchalik oson bo&apos;lmagan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/register">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#bc13fe] text-white font-bold rounded-2xl active-glow hover:scale-105 transition-all flex items-center justify-center sm:justify-start gap-2 group">
                Hozir boshlang
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/login">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl backdrop-blur-md transition-all">
                Tizimga kirish
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-32">
          <FeatureCard
            icon={<Zap className="text-[#bc13fe]" />}
            title="Tezkorlik"
            desc="Buyurtmalarni soniyalarda qabul qiling va ustalarni biriktiring."
          />
          <FeatureCard
            icon={<ShieldCheck className="text-[#bc13fe]" />}
            title="Ishonch"
            desc="Har bir usta va korxona tizimimizda qat'iy tekshiruvdan o'tadi."
          />
          <FeatureCard
            icon={<Sparkles className="text-[#bc13fe]" />}
            title="3D Analitika"
            desc="Biznesingiz o'sishini real vaqt rejimida kuzatib boring."
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col gap-4"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-lg shadow-[#bc13fe]/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}