"use client";

import { useState } from 'react';
import { motion } from 'framer-motion'; // Next.js uchun standart motion
import Link from 'next/link';
import {
    User,
    Phone,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Hammer,
    UserCog,
    Building2
} from 'lucide-react';
import Image from 'next/image';

type Role = 'Mijoz' | 'Usta' | 'Admin';

export default function RegisterPage() {
    const [role, setRole] = useState<Role>('Mijoz');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        password: '',
        companyName: '', // Admin uchun
        specialty: '',   // Usta uchun
        agreed: false
    });

    const roles = [
        { id: 'Mijoz', icon: User, label: 'Mijoz' },
        { id: 'Usta', icon: Hammer, label: 'Usta' },
        { id: 'Admin', icon: UserCog, label: 'Admin' }
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#120a14] relative overflow-hidden">
            {/* Background Neon Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#bc13fe] opacity-[0.08] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#bc13fe] opacity-[0.08] rounded-full blur-[120px] pointer-events-none" />

            <main className="w-full max-w-[480px] flex flex-col gap-6 relative z-10">

                {/* Logo Section */}
                <section className="relative w-full h-28 rounded-2xl overflow-hidden glass-border-gradient">
                    <Image
                        fill
                        className="object-cover opacity-40"
                        src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop"
                        alt="UstaFlow Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120a14] to-transparent" />
                    <div className="absolute bottom-4 left-6">
                        <h1 className="text-3xl font-black text-white tracking-tighter">
                            Usta<span className="text-[#bc13fe]">Flow</span>
                        </h1>
                        <p className="text-[10px] font-bold text-[#ebb2ff]/60 uppercase tracking-[0.4em]">
                            Ecosystem Registration
                        </p>
                    </div>
                </section>

                {/* Role Switcher */}
                <nav className="flex p-1.5 bg-white/5 rounded-2xl glass-border-gradient" role="tablist">
                    {roles.map((r) => (
                        <button
                            key={r.id}
                            onClick={() => setRole(r.id as Role)}
                            className={`flex-1 py-3 text-center flex items-center justify-center gap-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-500 ${role === r.id
                                ? 'bg-[#bc13fe] text-white active-glow translate-y-[-2px]'
                                : 'text-slate-500 hover:text-slate-300'
                                }`}
                        >
                            <r.icon size={14} />
                            {r.label}
                        </button>
                    ))}
                </nav>

                {/* Main Form Card */}
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel py-8 rounded-[2.5rem] glass-border-gradient flex flex-col gap-6"
                >
                    <div className="space-y-1 px-8">
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                            {role} sifatida qo&apos;shiling
                        </h2>
                        <p className="text-slate-400 text-sm">Ma&apos;lumotlaringizni kiriting.</p>
                    </div>

                    <form className="flex flex-col gap-4 px-8" onSubmit={(e) => e.preventDefault()}>

                        {/* Common Fields */}
                        <div className="space-y-4">
                            <InputField
                                label="To'liq ism"
                                icon={<User size={18} />}
                                placeholder="Alisher Navoiy"
                                value={formData.fullName}
                                onChange={(val) => setFormData({ ...formData, fullName: val })}
                            />

                            <InputField
                                label="Telefon"
                                icon={<Phone size={18} />}
                                placeholder="+998 90 123 45 67"
                                value={formData.phone}
                                onChange={(val) => setFormData({ ...formData, phone: val })}
                            />

                            {/* Conditional Fields based on Role */}
                            {role === 'Admin' && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                                    <InputField
                                        label="Korxona nomi"
                                        icon={<Building2 size={18} />}
                                        placeholder="M-Service MCHJ"
                                        value={formData.companyName}
                                        onChange={(val) => setFormData({ ...formData, companyName: val })}
                                    />
                                </motion.div>
                            )}

                            {role === 'Usta' && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                                    <InputField
                                        label="Mutaxassislik"
                                        icon={<Hammer size={18} />}
                                        placeholder="Santexnik, Elektrik..."
                                        value={formData.specialty}
                                        onChange={(val) => setFormData({ ...formData, specialty: val })}
                                    />
                                </motion.div>
                            )}

                            {/* Password Field */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Maxfiy so&apos;z</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-[#bc13fe] transition-colors" size={18} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#bc13fe] transition-all"
                                        placeholder="••••••••"
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

                            {/* Terms Checkbox */}
                            <div className="flex items-center gap-2 pt-2">
                                <input
                                    type="checkbox"
                                    id="agreed"
                                    checked={formData.agreed}
                                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                                    className="w-4 h-4 rounded border-white/10 bg-white/5 text-[#bc13fe] focus:ring-[#bc13fe]"
                                />
                                <label htmlFor="agreed" className="text-xs text-slate-400 cursor-pointer select-none">
                                    Shartlar va qoidalarni qabul qilamanman
                                </label>
                            </div>
                        </div>

                        <button
                            onClick={() => setLoading(true)}
                            disabled={loading || !formData.agreed}
                            className="w-full py-4 bg-[#bc13fe] disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-black rounded-2xl active-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
                        >
                            {loading ? 'YUKLANYAPTI...' : 'HISOB YARATISH'}
                            <ArrowRight size={20} />
                        </button>
                    </form>
                </motion.div>

                <footer className="text-center space-y-4">
                    <p className="text-xs text-slate-600 font-medium">
                        Hisobingiz bor? <Link href="/login" className="text-[#bc13fe] hover:underline font-bold">Kirishni amalga oshiring</Link>
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                        © 2026 UstaFlow. Barcha huquqlar himoyalangan.
                    </p>
                </footer>
            </main>
        </div>
    );
}

// Yordamchi Component (Kodni toza saqlash uchun)
function InputField({ label, icon, placeholder, value, onChange }: {
    label: string,
    icon: React.ReactNode,
    placeholder: string,
    value: string,
    onChange: (val: string) => void
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-[#bc13fe] transition-colors">
                    {icon}
                </div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-700 focus:outline-none focus:border-[#bc13fe] transition-all"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}