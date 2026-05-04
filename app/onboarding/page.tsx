"use client";

import { motion } from 'framer-motion';
import { User, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function OnboardingPage() {
    const [role, setRole] = useState<'client' | 'usta' | 'owner' | null>(null);

    const roles = [
        {
            id: 'client',
            title: 'Mijoz',
            description: 'Ustalarni topish va buyurtma berish uchun',
            icon: User,
            color: 'bg-blue-500/10',
            textColor: 'text-blue-500'
        },
        {
            id: 'usta',
            title: 'Usta',
            description: 'Xizmatlar koʻrsatish va daromad olish uchun',
            icon: Wrench,
            color: 'bg-purple-500/10',
            textColor: 'text-purple-500'
        },
        {
            id: 'owner',
            title: 'Boshqaruvchi',
            description: 'Biznesni boshqarish va monitoring qilish uchun',
            icon: ShieldCheck,
            color: 'bg-emerald-500/10',
            textColor: 'text-emerald-500'
        }
    ];

    return (
        <div className="min-h-screen bg-[#120a14] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#bc13fe] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />

            <main className="w-full max-w-4xl flex flex-col gap-12 relative z-10">
                <section className="text-center space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-black text-white tracking-tight"
                    >
                        Siz kimsiz?
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        Yo&apos;nalishingizni tanlang, biz esa sizga mos interfeysni tayyorlaymiz
                    </motion.p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {roles.map((item, index) => (
                        <motion.button
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            onClick={() => setRole(item.id as 'client' | 'usta' | 'owner')}
                            className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500 text-left flex flex-col gap-4 ${role === item.id
                                ? 'bg-white/10 border-[#bc13fe] shadow-[0_0_40px_-10px_rgba(188,19,254,0.3)]'
                                : 'bg-white/5 border-white/10 hover:border-white/20'
                                }`}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                                <item.icon className={item.textColor} size={28} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: role ? 1 : 0 }}
                    className="flex justify-center"
                >
                    <Link
                        href={role ? `/register?role=${role}` : '/register'}
                        className="px-8 py-4 bg-[#bc13fe] text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-[#a311db] transition-all shadow-[0_10px_30px_-10px_rgba(188,19,254,0.5)] active:scale-95"
                    >
                        Davom etish
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </main>
        </div>
    );
}
