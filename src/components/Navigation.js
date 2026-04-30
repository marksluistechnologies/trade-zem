"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, FiActivity, FiCreditCard, FiUser, FiPlus, 
  FiChevronLeft, FiChevronRight, FiLogOut, FiSettings 
} from 'react-icons/fi';

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  // Navigation Data
  const navItems = [
    { name: 'Hub', href: '/dashboard', icon: <FiHome /> },
    { name: 'Arena', href: '/arena', icon: <FiActivity /> },
    { name: 'Action', href: '/trade', icon: <FiPlus />, isCenter: true },
    { name: 'Wallet', href: '/wallet', icon: <FiCreditCard /> },
    { name: 'Profile', href: '/profile', icon: <FiUser /> },
  ];

  return (
    <>
      {/* ============================================================== */}
      {/* 1. DESKTOP SIDEBAR (PC/Laptop)                                 */}
      {/* ============================================================== */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
        className="sticky top-0 h-screen flex-none bg-[#050608]/95 backdrop-blur-2xl border-r border-white/5 z-50 hidden md:flex flex-col py-6 shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
      >
        {/* Sidebar Toggle */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3.5 top-8 w-7 h-7 bg-green-500 text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_#22c55e]"
        >
          {isSidebarOpen ? <FiChevronLeft className="text-sm" /> : <FiChevronRight className="text-sm" />}
        </button>

        {/* Brand Logo */}
        <div className={`px-6 mb-12 flex items-center ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}>
          <Link href="/" className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-green-500 shadow-[0_0_15px_#22c55e] flex-none" />
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xl font-black tracking-[0.3em]">
                  TRADE<span className="text-green-500">ZEM</span>
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>

        {/* Links */}
        <nav className="flex-1 space-y-2 px-4">
          {navItems.map((item) => (
            !item.isCenter && (
              <Link 
                key={item.name}
                href={item.href} 
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                  pathname === item.href 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
                } ${isSidebarOpen ? 'justify-start px-4' : 'justify-center px-0'}`}
              >
                <div className="text-xl flex-none">{item.icon}</div>
                {isSidebarOpen && <span className="text-xs font-black uppercase tracking-widest">{item.name}</span>}
              </Link>
            )
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="mt-auto border-t border-white/5 pt-6 px-4 space-y-2">
           <SidebarBottomItem href="/settings" icon={<FiSettings />} text="Settings" isOpen={isSidebarOpen} />
           <button className={`w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-500/10 transition-all ${isSidebarOpen ? 'justify-start px-4' : 'justify-center px-0'}`}>
              <FiLogOut className="text-xl flex-none" />
              {isSidebarOpen && <span className="text-xs font-black uppercase tracking-widest">Logout</span>}
           </button>
        </div>
      </motion.aside>

      {/* ============================================================== */}
      {/* 2. MOBILE BOTTOM NAV (iPhone/Android)                          */}
      {/* ============================================================== */}
      <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-[#050608]/95 backdrop-blur-3xl border-t border-white/10 px-4 py-3 pb-safe">
        <div className="flex justify-between items-center max-w-md mx-auto">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`flex flex-col items-center gap-1 transition-all ${
                item.isCenter 
                ? 'relative -top-5 w-14 h-14 bg-green-500 rounded-full justify-center text-black shadow-[0_10px_25px_rgba(34,197,94,0.4)]' 
                : pathname === item.href ? 'text-green-500' : 'text-gray-500'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {!item.isCenter && <span className="text-[8px] font-black uppercase tracking-widest">{item.name}</span>}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

// Sidebar Bottom Item Helper
function SidebarBottomItem({ href, icon, text, isOpen }) {
  return (
    <Link href={href} className={`flex items-center gap-4 p-4 rounded-2xl text-gray-500 hover:text-white hover:bg-white/5 transition-all ${isOpen ? 'justify-start px-4' : 'justify-center px-0'}`}>
      <div className="text-xl flex-none">{icon}</div>
      {isOpen && <span className="text-xs font-black uppercase tracking-widest">{text}</span>}
    </Link>
  );
}