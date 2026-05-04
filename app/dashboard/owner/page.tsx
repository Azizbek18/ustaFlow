"use client";

import { motion } from 'framer-motion';
import {
    BarChart4,
    TrendingUp,
    Users,
    DollarSign,
    Activity,
    Award,
    AlertTriangle,
    Settings,
    ArrowUpRight,
    ArrowDownLeft,
    Eye
} from 'lucide-react';

export default function OwnerDashboard() {
    return (
        <div className="p-8 space-y-10">
            {/* Welcome Section */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <p className="text-[#bc13fe] font-bold text-sm uppercase tracking-[0.2em]">Boshqaruvchi paneli</p>
                    <h1 className="text-4xl font-black text-white">Biznesingizni boshqaring 👔</h1>
                    <p className="text-slate-400 max-w-2xl">Barcha faoliyat, daromad va jamoadni monitoring qiling. Real-time statistikalar va analitika.</p>
                </div>
                <button className="px-6 py-3 bg-[#bc13fe] text-white rounded-2xl font-bold hover:bg-[#a311db] transition-all">
                    <Settings size={20} />
                </button>
            </section>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Oy daromadi', value: '45.2M', change: '+12.5%', trend: 'up', icon: DollarSign, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                    { label: 'Faol ustalar', value: '156', change: '+8', trend: 'up', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                    { label: 'Bugun buyurtma', value: '89', change: '+15', trend: 'up', icon: Activity, color: 'text-orange-500', bg: 'bg-orange-500/10' },
                    { label: 'O\'rtacha reyting', value: '4.8', change: '+0.2', trend: 'up', icon: Award, color: 'text-purple-500', bg: 'bg-purple-500/10' }
                ].map((kpi, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col gap-4"
                    >
                        <div className="flex items-center justify-between">
                            <div className={`w-12 h-12 rounded-xl ${kpi.bg} flex items-center justify-center ${kpi.color}`}>
                                <kpi.icon size={24} />
                            </div>
                            <div className="flex items-center gap-1 text-emerald-500 text-sm font-bold">
                                <TrendingUp size={14} />
                                {kpi.change}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{kpi.label}</p>
                            <p className="text-2xl font-black text-white">{kpi.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart & Analytics */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Revenue Trend */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="space-y-1">
                                <h2 className="text-xl font-bold text-white">Daromad trendi</h2>
                                <p className="text-slate-400 text-sm">Oxirgi 7 kunlik o'zgarish</p>
                            </div>
                            <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all">
                                <Eye size={18} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {[
                                { week: 'Dush', value: 3.2, previous: 2.8 },
                                { week: 'Sesh', value: 4.1, previous: 3.5 },
                                { week: 'Chor', value: 3.8, previous: 4.2 },
                                { week: 'Pay', value: 5.2, previous: 4.1 },
                                { week: 'Jum', value: 6.4, previous: 5.9 },
                                { week: 'Sha', value: 7.1, previous: 6.3 },
                                { week: 'Yak', value: 5.8, previous: 5.2 }
                            ].map((item, i) => (
                                <div key={i} className="flex items-end gap-3">
                                    <div className="w-12 text-right">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase">{item.week}</p>
                                    </div>
                                    <div className="flex-1 flex items-end gap-2">
                                        <div className="flex flex-col items-center flex-1">
                                            <div
                                                className="w-full bg-gradient-to-t from-[#bc13fe] to-[#7000ff] rounded-t-lg"
                                                style={{ height: `${(item.value / 8) * 80}px` }}
                                            />
                                            <p className="text-[9px] text-slate-400 mt-1">{item.value}M</p>
                                        </div>
                                        <div
                                            className="w-6 bg-slate-700/50 rounded-t-lg"
                                            style={{ height: `${(item.previous / 8) * 80}px` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Performance Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            { label: 'Yakunlangan buyurtmalar', value: '2,847', percent: '94%', color: 'emerald' },
                            { label: 'O\'rtacha foydalanuvchi reyting', value: '4.7/5', percent: '94%', color: 'blue' }
                        ].map((metric, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-[2rem] bg-white/5 border border-white/10"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-slate-400 text-sm font-medium">{metric.label}</span>
                                    <span className={`text-${metric.color}-500 font-bold text-sm`}>{metric.percent}</span>
                                </div>
                                <p className="text-2xl font-black text-white mb-4">{metric.value}</p>
                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-600 rounded-full`}
                                        style={{ width: metric.percent }}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Team Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white">Jamoa</h3>
                        <div className="space-y-3">
                            {[
                                { role: 'Ustalar', count: 156, status: 'active' },
                                { role: 'Yuboruvchilar', count: 23, status: 'active' },
                                { role: 'Mijozlar', count: 892, status: 'active' }
                            ].map((team, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                                    <span className="text-slate-300 font-medium">{team.role}</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span className="text-[#bc13fe] font-bold">{team.count}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Recent Issues */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <AlertTriangle size={18} className="text-orange-500" />
                            Muammolar
                        </h3>
                        <div className="space-y-3">
                            {[
                                { issue: 'Shoxrux Qodirov - reyting tushdi', priority: 'high' },
                                { issue: 'Yuborish vaqti kechikishga uchradi', priority: 'medium' },
                                { issue: 'Tekshirish jarayonida noqulaylik', priority: 'low' }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`p-3 rounded-lg ${item.priority === 'high' ? 'bg-red-500/10 border border-red-500/20' :
                                            item.priority === 'medium' ? 'bg-orange-500/10 border border-orange-500/20' :
                                                'bg-blue-500/10 border border-blue-500/20'
                                        }`}
                                >
                                    <p className="text-sm text-slate-300 font-medium">{item.issue}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-3"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Tezkor amallar</h3>
                        {['Yangi usta qo\'shish', 'Hisobni to\'ldirish', 'Ustalar tasdiq qilish'].map((action, i) => (
                            <button
                                key={i}
                                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#bc13fe]/50 transition-all text-sm font-medium flex items-center gap-2"
                            >
                                <span>{action}</span>
                                <ArrowUpRight size={14} className="ml-auto opacity-0 group-hover:opacity-100" />
                            </button>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Section - Recent Orders */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10"
            >
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white">So'nggi buyurtmalar</h2>
                    <button className="text-[#bc13fe] hover:underline font-bold text-sm flex items-center gap-2">
                        Barchasi <ArrowUpRight size={16} />
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-3 px-4 font-bold text-slate-400 uppercase text-xs">Buyurtma</th>
                                <th className="text-left py-3 px-4 font-bold text-slate-400 uppercase text-xs">Usta</th>
                                <th className="text-left py-3 px-4 font-bold text-slate-400 uppercase text-xs">Summa</th>
                                <th className="text-left py-3 px-4 font-bold text-slate-400 uppercase text-xs">Holat</th>
                                <th className="text-left py-3 px-4 font-bold text-slate-400 uppercase text-xs">Sana</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: '#BO-001', master: 'Shoxrux Qodirov', amount: '450,000', status: 'Yakunlangan', date: '2026-05-04' },
                                { id: '#BO-002', master: 'Javohir Usmonov', amount: '600,000', status: 'Jarayonda', date: '2026-05-04' },
                                { id: '#BO-003', master: 'Oybek Hasanov', amount: '200,000', status: 'Yakunlangan', date: '2026-05-03' },
                                { id: '#BO-004', master: 'Rustam Ortiqboyev', amount: '150,000', status: 'Muammoli', date: '2026-05-03' },
                                { id: '#BO-005', master: 'Gulnoza Umarova', amount: '400,000', status: 'Yakunlangan', date: '2026-05-02' }
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all">
                                    <td className="py-4 px-4 text-white font-bold">{row.id}</td>
                                    <td className="py-4 px-4 text-slate-300">{row.master}</td>
                                    <td className="py-4 px-4 text-white font-bold">{row.amount} so'm</td>
                                    <td className="py-4 px-4">
                                        <span className={`px-3 py-1 rounded-md text-[10px] font-bold ${row.status === 'Yakunlangan' ? 'bg-emerald-500/20 text-emerald-400' :
                                                row.status === 'Jarayonda' ? 'bg-orange-500/20 text-orange-400' :
                                                    'bg-red-500/20 text-red-400'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-slate-400 text-xs">{row.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
