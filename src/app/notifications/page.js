"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import Link from 'next/link';
import { 
  FiHome, FiActivity, FiCreditCard, FiUsers, 
  FiArrowUpRight, FiArrowDownLeft, FiClock, 
  FiCheckCircle, FiBell, FiPlus, 
  FiTarget, FiLogOut, FiSettings,
  FiChevronLeft, FiChevronRight, FiGift, FiAlertTriangle, FiCheck
} from 'react-icons/fi';

export default function NotificationsPage() {
  // Sidebar State for Desktop
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Mock Notification Data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'WIN',
      title: 'Trade Settled: UP 500',
      message: 'Your prediction was correct. Profit of +$37.50 has been credited to your wallet.',
      time: '2 mins ago',
      read: false,
    },
    {
      id: 2,
      type: 'DEPOSIT',
      title: 'Deposit Successful',
      message: 'Your deposit of 500 USDT has been confirmed on the TRC20 network.',
      time: '15 mins ago',
      read: false,
    },
    {
      id: 3,
      type: 'BONUS',
      title: 'Network Bonus Credited',
      message: 'You received $15.00 from your direct referral network trading volume.',
      time: '2 hours ago',
      read: true,
    },
    {
      id: 4,
      type: 'SYSTEM',
      title: 'Scheduled Maintenance',
      message: 'The TRC20 gateway will undergo maintenance on April 30, 02:00 UTC. Trading remains unaffected.',
      time: '5 hours ago',
      read: true,
    },
    {
      id: 5,
      type: 'LOSS',
      title: 'Trade Liquidated: DOWN 100',
      message: 'The algorithmic crash triggered before profit booking. -$10.00 staked amount lost.',
      time: '1 day ago',
      read: true,
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  // Helper function to get icon and colors based on notification type
  const getTypeStyles = (type) => {
    switch(type) {
      case 'WIN': return { icon: <FiArrowUpRight />, bg: 'bg-green-500/10', text: 'text-green-500', border: 'border-green-500/20' };
      case 'LOSS': return { icon: <FiArrowDownLeft />, bg: 'bg-red-500/10', text: 'text-red-500', border: 'border-red-500/20' };
      case 'DEPOSIT': return { icon: <FiCheckCircle />, bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20' };
      case 'BONUS': return { icon: <FiGift />, bg: 'bg-yellow-500/10', text: 'text-yellow-500', border: 'border-yellow-500/20' };
      case 'SYSTEM': return { icon: <FiAlertTriangle />, bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/20' };
      default: return { icon: <FiBell />, bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/20' };
    }
  };

  return (
    <div className="bg-[#050608] min-h-screen text-white selection:bg-green-500/30 font-sans flex overflow-hidden">
      
      {/* Dynamic Space Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Canvas>
          <Stars radius={100} depth={50} count={3000} factor={4} fade speed={1} />
        </Canvas>
      </div>

      {/* ============================================================== */}
      {/* 1. DESKTOP SIDEBAR (Same as Dashboard)                         */}
      {/* ============================================================== */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
        className="sticky top-0 h-screen flex-none bg-[#050608]/90 backdrop-blur-2xl border-r border-white/5 z-50 hidden md:flex flex-col py-6 shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
      >
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="absolute -right-3.5 top-8 w-7 h-7 bg-green-500 text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_#22c55e]">
          {isSidebarOpen ? <FiChevronLeft className="text-sm" /> : <FiChevronRight className="text-sm" />}
        </button>

        <div className={`px-6 mb-12 flex items-center ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}>
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-1.5 h-6 bg-green-500 shadow-[0_0_15px_#22c55e] flex-none" />
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} className="text-xl font-black tracking-[0.3em] overflow-hidden whitespace-nowrap">
                  TRADE<span className="text-green-500">ZEM</span>
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>

        <nav className="flex-1 space-y-2 px-4">
          <SidebarItem href="/dashboard" icon={<FiHome />} text="Hub" isOpen={isSidebarOpen} />
          <SidebarItem href="/dashboard#arena" icon={<FiActivity />} text="Arena" isOpen={isSidebarOpen} />
          <SidebarItem href="/dashboard#wallet" icon={<FiCreditCard />} text="Wallet" isOpen={isSidebarOpen} />
          <SidebarItem href="/dashboard#expert" icon={<FiUsers />} text="Profile" isOpen={isSidebarOpen} />
        </nav>

        <div className="mt-auto border-t border-white/5 pt-6 px-4 space-y-2">
          <SidebarItem href="/dashboard#settings" icon={<FiSettings />} text="Settings" isOpen={isSidebarOpen} />
          <button className={`w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-500/10 transition-all ${isSidebarOpen ? 'justify-start px-4' : 'justify-center px-0'}`}>
            <FiLogOut className="text-xl flex-none" />
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} className="text-xs font-black uppercase tracking-widest overflow-hidden whitespace-nowrap text-left">Disconnect</motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.aside>

      {/* ============================================================== */}
      {/* 2. MAIN CONTENT AREA                                           */}
      {/* ============================================================== */}
      <div className="flex-1 min-w-0 relative z-10 pb-24 md:pb-12 h-screen overflow-y-auto custom-scrollbar">
        
        {/* Simple Header */}
        <header className="p-6 md:p-8 border-b border-white/5 bg-[#050608]/80 backdrop-blur-md sticky top-0 z-40 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Notifications</h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">System Alerts & Trade Logs</p>
          </div>
          
          <button 
            onClick={markAllAsRead}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all"
          >
            <FiCheck className="text-sm" /> <span className="hidden sm:inline">Mark all as read</span>
          </button>
        </header>

        {/* Notifications List */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 space-y-4">
          
          <AnimatePresence>
            {notifications.map((notif, index) => {
              const styles = getTypeStyles(notif.type);
              
              return (
                <motion.div 
                  key={notif.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative p-5 md:p-6 rounded-2xl md:rounded-[1.5rem] border backdrop-blur-md flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all group ${
                    notif.read ? 'bg-gray-900/30 border-white/5' : 'bg-gray-900/70 border-white/10 shadow-[0_5px_20px_rgba(0,0,0,0.3)]'
                  }`}
                >
                  {/* Unread Indicator Dot */}
                  {!notif.read && (
                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-none border ${styles.bg} ${styles.text} ${styles.border}`}>
                    <span className="text-2xl">{styles.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pr-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className={`text-sm md:text-base font-black uppercase tracking-wide ${notif.read ? 'text-gray-300' : 'text-white'}`}>
                        {notif.title}
                      </h4>
                      <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <FiClock className="flex-none" /> {notif.time}
                      </p>
                    </div>
                    <p className={`text-xs md:text-sm leading-relaxed ${notif.read ? 'text-gray-500' : 'text-gray-400'}`}>
                      {notif.message}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty State (If no notifications) */}
          {notifications.length === 0 && (
            <div className="text-center py-20 opacity-50">
              <FiBell className="text-6xl mx-auto mb-4 text-gray-600" />
              <p className="text-sm font-black uppercase tracking-widest text-gray-500">No new notifications</p>
            </div>
          )}
        </main>
      </div>

      {/* ============================================================== */}
      {/* 3. MOBILE BOTTOM NAV                                           */}
      {/* ============================================================== */}
      <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-[#050608]/95 backdrop-blur-3xl border-t border-white/10 px-6 py-4 pb-safe">
        <div className="flex justify-between items-center">
          <Link href="/dashboard" className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors">
            <FiHome className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest">Hub</span>
          </Link>
          <Link href="/dashboard#arena" className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors">
            <FiActivity className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest">Arena</span>
          </Link>
          <Link href="/dashboard#trade" className="relative -top-5 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-black font-black shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:scale-105 transition-transform flex-none">
            <FiPlus className="text-2xl" />
          </Link>
          <Link href="/notifications" className="flex flex-col items-center gap-1.5 text-green-500 relative">
             <div className="relative">
                <FiBell className="text-xl" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"></span>
             </div>
            <span className="text-[8px] font-black uppercase tracking-widest">Alerts</span>
          </Link>
          <Link href="/dashboard#expert" className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors">
            <FiUsers className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest">Profile</span>
          </Link>
        </div>
      </nav>
      
    </div>
  );
}

// Helper Component for Sidebar Items
function SidebarItem({ href, icon, text, active, isOpen }) {
  return (
    <Link href={href} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${active ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'} ${isOpen ? 'justify-start px-4' : 'justify-center px-0'}`}>
      <div className="text-xl flex-none">{icon}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} className="text-xs font-black uppercase tracking-widest overflow-hidden whitespace-nowrap">
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
}