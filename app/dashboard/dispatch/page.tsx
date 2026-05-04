"use client";

import { motion } from 'framer-motion';
import {
    BarChart3,
    TrendingUp,
    Users,
    Package,
    AlertCircle,
    CheckCircle2,
    Clock,
    MapPin,
    Phone,
    ArrowUpRight,
    Filter
} from 'lucide-react';

export default function DispatchDashboard() {
    return (
        <div className="p-8 space-y-10">
            {/* Header Section */}
            <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black text-white">Yuborish xizmati 📍</h1>
                    <p className="text-slate-400">Bugun {new Date().getDate()}-mart. Barcha buyurtmalar bilan ishlang</p>
                </div>
                <button className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:border-white/20 transition-all flex items-center gap-2 font-medium">
                    <Filter size={18} />
                    Filtr
                </button>
            </section>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: "Bugun buyurtmalar", value: "24", icon: Package, color: "text-blue-500", bg: "bg-blue-500/10" },
                    { label: "Yakunlangan", value: "18", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                    { label: "Jarayonda", value: "5", icon: Clock, color: "text-orange-500", bg: "bg-orange-500/10" },
                    { label: "Muammoli", value: "1", icon: AlertCircle, color: "text-red-500", bg: "bg-red-500/10" }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col gap-4"
                    >
                        <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                            <p className="text-2xl font-black text-white">{stat.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Orders */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            Buyurtmalar roʻyxati
                            <span className="px-2 py-0.5 rounded-md bg-[#bc13fe]/20 text-[#bc13fe] text-[10px]">5 TA</span>
                        </h2>
                        <button className="text-sm text-[#bc13fe] hover:underline font-medium">Barchasi</button>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                id: 1,
                                title: "Santexnika: Quvur oqilshishi",
                                address: "Toshkent sh., Yunusobod tumani, 5-kvartal",
                                customer: "Dilshod Abdullayev",
                                phone: "+998 90 123 45 67",
                                usta: "Shoxrux Qodirov",
                                price: "350,000",
                                status: "Jarayonda",
                                statusColor: "bg-orange-500"
                            },
                            {
                                id: 2,
                                title: "Elektrik: Xonadon elektr tizimi",
                                address: "Samarqand sh., Markazi tumani",
                                customer: "Zuhrali Shodmonova",
                                phone: "+998 95 876 54 32",
                                usta: "Javohir Usmonov",
                                price: "600,000",
                                status: "Yakunlangan",
                                statusColor: "bg-emerald-500"
                            },
                            {
                                id: 3,
                                title: "Mebel: Sofa taʻmirlash",
                                address: "Bukhoro sh., Darvazabog tumani",
                                customer: "Miraksam Mirkarimov",
                                phone: "+998 91 555 66 77",
                                usta: "Oybek Hasanov",
                                price: "200,000",
                                status: "Yakunlangan",
                                statusColor: "bg-emerald-500"
                            },
                            {
                                id: 4,
                                title: "Konditsioner: Toza qilish",
                                address: "Qarshi sh., Surhandarya viloyati",
                                customer: "Sevara Yuldasheva",
                                phone: "+998 93 444 33 22",
                                usta: "Rustam Ortiqboyev",
                                price: "150,000",
                                status: "Muammoli",
                                statusColor: "bg-red-500"
                            },
                            {
                                id: 5,
                                title: "Tozalash: Ofisni tozalash",
                                address: "Toshkent sh., Mirzo Ulugbek tumani",
                                customer: "Aziza Karimova",
                                phone: "+998 99 777 88 99",
                                usta: "Gulnoza Umarova",
                                price: "400,000",
                                status: "Jarayonda",
                                statusColor: "bg-orange-500"
                            }
                        ].map((order) => (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="p-6 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-white font-bold text-lg">{order.title}</h3>
                                            <span className={`px-2 py-1 rounded-md ${order.statusColor} text-white text-[9px] font-bold uppercase`}>
                                                {order.status}
                                            </span>
                                        </div>
                                        <p className="text-slate-400 text-sm flex items-center gap-1">
                                            <MapPin size={14} /> {order.address}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-black text-white">{order.price} soʻm</p>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-600" />
                                            <div>
                                                <p className="text-white font-medium">{order.customer}</p>
                                                <p className="text-slate-400 text-xs flex items-center gap-1">
                                                    <Phone size={12} /> {order.phone}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pl-11">
                                            <p className="text-slate-400 text-xs">Usta: <span className="text-white font-medium">{order.usta}</span></p>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-bold text-[#bc13fe] hover:gap-3 transition-all">
                                        Batafsil <ArrowUpRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Sidebar - Statistics */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-white">Statistika</h2>

                    {/* Performance Chart */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-6"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-white font-bold text-sm">Kunlik oʻrtacha</span>
                            <div className="flex items-center gap-1 text-emerald-500 text-sm font-bold">
                                <TrendingUp size={16} />
                                +12%
                            </div>
                        </div>
                        <div className="space-y-3">
                            {[
                                { day: "Dush", value: 18 },
                                { day: "Sesh", value: 22 },
                                { day: "Chor", value: 19 },
                                { day: "Pay", value: 24 },
                                { day: "Jum", value: 20 },
                                { day: "Sha", value: 16 }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="text-slate-500 text-xs w-6">{item.day}</span>
                                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#bc13fe] to-[#7000ff] rounded-full"
                                            style={{ width: `${(item.value / 24) * 100}%` }}
                                        />
                                    </div>
                                    <span className="text-slate-400 text-xs w-4 text-right">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Top Ustas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-4"
                    >
                        <h3 className="text-white font-bold text-sm flex items-center gap-2">
                            <Users size={16} />
                            Eng faol ustalar
                        </h3>
                        <div className="space-y-3">
                            {["Shoxrux Qodirov", "Javohir Usmonov", "Oybek Hasanov"].map((usta, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-600" />
                                        <span className="text-slate-300 text-sm font-medium">{usta}</span>
                                    </div>
                                    <span className="text-[#bc13fe] text-xs font-bold">{5 + i} ta</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
