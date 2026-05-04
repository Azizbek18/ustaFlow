"use client";

import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut,
    Search,
    Menu,
    ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const menuItems = [
        { label: 'Asosiy', icon: LayoutDashboard, href: pathname },
        { label: 'Foydalanuvchilar', icon: Users, href: '#' },
        { label: 'Sozlamalar', icon: Settings, href: '#' },
    ];

    return (
        <div className="min-h-screen bg-[#0a050b] flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-80 border-r border-white/5 bg-[#0f0810] hidden lg:flex flex-col p-8 gap-10 relative z-20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#bc13fe] flex items-center justify-center shadow-[0_0_20px_rgba(188,19,254,0.4)]">
                        <span className="text-white font-black text-xl">U</span>
                    </div>
                    <span className="text-white font-black text-2xl tracking-tight">UstaFlow</span>
                </div>

                <nav className="flex-1 flex flex-col gap-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${pathname === item.href
                                ? 'bg-[#bc13fe]/10 text-[#bc13fe]'
                                : 'text-slate-500 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon size={20} />
                                <span className="font-bold text-sm">{item.label}</span>
                            </div>
                            <ChevronRight size={14} className={`transition-transform ${pathname === item.href ? 'rotate-0' : 'group-hover:translate-x-1'}`} />
                        </Link>
                    ))}
                </nav>

                <button className="flex items-center gap-3 p-4 rounded-2xl text-slate-500 hover:bg-red-500/10 hover:text-red-500 transition-all font-bold text-sm">
                    <LogOut size={20} />
                    Chiqish
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative overflow-y-auto">
                {/* Top Header */}
                <header className="h-24 border-b border-white/5 flex items-center justify-between px-8 bg-[#0a050b]/80 backdrop-blur-md sticky top-0 z-20">
                    <button className="lg:hidden p-3 bg-white/5 rounded-xl text-white">
                        <Menu size={24} />
                    </button>

                    <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 w-96">
                        <Search size={18} className="text-slate-500" />
                        <input
                            type="text"
                            placeholder="Qidirish..."
                            className="bg-transparent border-none focus:outline-none text-white text-sm w-full"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-right hidden sm:block">
                            <p className="text-white font-bold text-sm leading-none">Admin User</p>
                            <p className="text-[#bc13fe] text-[10px] font-black uppercase mt-1 tracking-widest">Premium</p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#bc13fe] to-[#7000ff] p-[2px]">
                            <div className="w-full h-full rounded-[14px] bg-[#0f0810] flex items-center justify-center">
                                <Users size={20} className="text-white opacity-50" />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 relative">
                    {children}
                    {/* Background Ambient Glow */}
                    <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#bc13fe] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
                </main>
            </div>
        </div>
    );
}
