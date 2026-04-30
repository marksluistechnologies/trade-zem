"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import Link from 'next/link';
import { 
  FiHome, FiActivity, FiCreditCard, FiUsers, FiUser, 
  FiArrowUpRight, FiArrowDownLeft, FiClock, 
  FiCheckCircle, FiXCircle, FiBell, FiPlus, FiMinus, 
  FiEye, FiTarget, FiBriefcase, FiLogOut, FiSettings
} from 'react-icons/fi';

// --- Shared Badge Component ---
const Badge = ({ children, type = 'neutral' }) => {
  const colors = {
    neutral: 'bg-white/5 border-white/10 text-gray-400',
    success: 'bg-green-500/10 border-green-500/20 text-green-400',
    danger: 'bg-red-500/10 border-red-500/20 text-red-400',
    warning: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  };
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[9px] font-black uppercase tracking-widest ${colors[type]}`}>
      {children}
    </div>
  );
};

export default function Dashboard() {
  // Mock Data for UI
  const userData = {
    balance: "1,240.50",
    winRate: "68%",
    totalVolume: "$12,450",
    networkBonus: "$45.00"
  };

  const betHistory = [
    { id: 'TRD-9021', market: 'UP 500', type: 'UP', amount: 50, profit: '+37.50', status: 'WIN', time: '2 mins ago' },
    { id: 'TRD-9020', market: 'DOWN 100', type: 'DOWN', amount: 10, profit: '-10.00', status: 'LOSS', time: '15 mins ago' },
    { id: 'TRD-9019', market: 'UP 1K', type: 'UP', amount: 100, profit: '+100.00', status: 'WIN', time: '1 hour ago' },
    { id: 'TRD-9018', market: 'UP 5K', type: 'UP', amount: 500, profit: '-500.00', status: 'LOSS', time: '3 hours ago' },
    { id: 'TRD-9017', market: 'DOWN 500', type: 'DOWN', amount: 50, profit: '+37.50', status: 'WIN', time: '5 hours ago' },
  ];

  return (
    <div className="bg-[#050608] min-h-screen text-white selection:bg-green-500/30 font-sans flex overflow-hidden">
      
      {/* Dynamic Space Background - Applies to the whole screen */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <Canvas>
          <Stars radius={100} depth={50} count={4000} factor={4} fade speed={1} />
          <Sparkles count={50} scale={15} size={4} speed={0.2} color="#22c55e" opacity={0.2} />
        </Canvas>
      </div>

      {/* ============================================================== */}
      {/* 1. DESKTOP SIDEBAR (Hidden on Mobile)                          */}
      {/* ============================================================== */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#050608]/90 backdrop-blur-2xl border-r border-white/5 z-50 hidden md:flex flex-col p-6 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
        
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-black tracking-[0.3em] flex items-center gap-3 mb-12 hover:opacity-80 transition-opacity">
          <div className="w-1.5 h-6 bg-green-500 shadow-[0_0_15px_#22c55e]" />
          TRADE<span className="text-green-500">ZEM</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-4 p-4 rounded-2xl bg-green-500/10 text-green-400 border border-green-500/20 transition-all">
            <FiHome className="text-xl" />
            <span className="text-xs font-black uppercase tracking-widest">Hub</span>
          </Link>
          <Link href="#arena" className="flex items-center gap-4 p-4 rounded-2xl text-gray-500 hover:text-white hover:bg-white/5 transition-all">
            <FiActivity className="text-xl" />
            <span className="text-xs font-black uppercase tracking-widest">Arena</span>
          </Link>
          <Link href="#wallet" className="flex items-center gap-4 p-4 rounded-2xl text-gray-500 hover:text-white hover:bg-white/5 transition-all">
            <FiCreditCard className="text-xl" />
            <span className="text-xs font-black uppercase tracking-widest">Wallet</span>
          </Link>
          <Link href="#expert" className="flex items-center gap-4 p-4 rounded-2xl text-gray-500 hover:text-white hover:bg-white/5 transition-all">
            <FiUsers className="text-xl" />
            <span className="text-xs font-black uppercase tracking-widest">Agent</span>
          </Link>
        </nav>

        {/* Footer Actions in Sidebar */}
        <div className="mt-auto border-t border-white/5 pt-6 space-y-2">
          <Link href="#settings" className="flex items-center gap-4 p-4 rounded-2xl text-gray-500 hover:text-white hover:bg-white/5 transition-all">
            <FiSettings className="text-lg" />
            <span className="text-[10px] font-black uppercase tracking-widest">Settings</span>
          </Link>
          <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-500/10 transition-all text-left">
            <FiLogOut className="text-lg" />
            <span className="text-[10px] font-black uppercase tracking-widest">Disconnect</span>
          </button>
        </div>
      </aside>

      {/* ============================================================== */}
      {/* 2. MAIN CONTENT AREA (Pushed right on Desktop)                 */}
      {/* ============================================================== */}
      <div className="flex-1 w-full relative z-10 md:ml-64 pb-24 md:pb-12 overflow-y-auto h-screen custom-scrollbar">
        
        {/* Top Header */}
        <header className="p-6 md:p-10 flex justify-between items-center border-b border-white/5 md:border-none bg-[#050608]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-green-500 to-emerald-900 p-[2px]">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center border border-black overflow-hidden">
                <FiUser className="text-green-500 text-lg" />
              </div>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Welcome back,</p>
              <p className="text-sm md:text-base font-black uppercase tracking-wider">Demo User</p>
            </div>
          </div>
          <button className="relative p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <FiBell className="text-gray-400" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
          </button>
        </header>

        {/* Dashboard Content */}
        <main className="max-w-6xl mx-auto px-6 space-y-8">
          
          {/* Portfolio / Balance Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-green-500/10 via-transparent to-transparent border border-green-500/20 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[80px]"></div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 relative z-10">
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  Total Portfolio Value <FiEye className="cursor-pointer hover:text-white transition-colors" />
                </p>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter flex items-center gap-2">
                  <span className="text-green-500 text-4xl md:text-5xl">$</span>{userData.balance}
                </h1>
              </div>
              
              <div className="flex w-full lg:w-auto gap-4">
                <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-5 bg-green-500 text-black font-black rounded-2xl uppercase tracking-widest text-[10px] hover:bg-green-400 transition-all shadow-[0_10px_30px_rgba(34,197,94,0.2)]">
                  <FiPlus className="text-sm" /> Deposit
                </button>
                <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                  <FiMinus className="text-sm" /> Withdraw
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="p-6 md:p-8 rounded-[2rem] bg-gray-900/40 border border-white/5 backdrop-blur-md">
              <FiTarget className="text-2xl text-gray-500 mb-4" />
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Win Rate</p>
              <p className="text-2xl md:text-3xl font-black text-white">{userData.winRate}</p>
            </div>
            <div className="p-6 md:p-8 rounded-[2rem] bg-gray-900/40 border border-white/5 backdrop-blur-md">
              <FiActivity className="text-2xl text-gray-500 mb-4" />
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Volume</p>
              <p className="text-2xl md:text-3xl font-black text-white">{userData.totalVolume}</p>
            </div>
            <div className="col-span-2 lg:col-span-1 p-6 md:p-8 rounded-[2rem] bg-green-500/5 border border-white/5 backdrop-blur-md lg:border-l-2 lg:border-l-green-500">
              <FiBriefcase className="text-2xl text-green-500 mb-4" />
              <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest mb-1">Network Bonus</p>
              <p className="text-2xl md:text-3xl font-black text-green-400">{userData.networkBonus}</p>
            </div>
          </div>

          {/* Recent History */}
          <div className="pt-6">
            <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
              <h2 className="text-2xl font-black uppercase tracking-tighter">Recent Arena Runs</h2>
              <Link href="#" className="text-[10px] font-black text-green-500 uppercase tracking-widest hover:text-white transition-colors">View All History</Link>
            </div>

            <div className="space-y-3">
              {betHistory.map((bet, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={bet.id} 
                  className="p-5 md:p-6 rounded-[1.5rem] bg-gray-900/60 border border-white/5 backdrop-blur-md flex justify-between items-center hover:border-green-500/30 transition-all group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-none ${bet.status === 'WIN' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                      {bet.status === 'WIN' ? <FiArrowUpRight className="text-2xl" /> : <FiArrowDownLeft className="text-2xl" />}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-black uppercase tracking-wider group-hover:text-white transition-colors">{bet.market}</h4>
                      <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1.5 mt-1">
                        <FiClock /> {bet.time} • <span className="text-gray-600">{bet.id}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-8">
                    <div className="hidden sm:block text-right">
                      <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-1">Staked</p>
                      <p className="text-sm font-black text-white">${bet.amount}</p>
                    </div>
                    <div className="text-right min-w-[80px]">
                      <Badge type={bet.status === 'WIN' ? 'success' : 'danger'}>
                        {bet.status === 'WIN' ? <FiCheckCircle /> : <FiXCircle />} {bet.status}
                      </Badge>
                      <p className={`text-base font-black mt-1.5 ${bet.status === 'WIN' ? 'text-green-400' : 'text-red-400'}`}>
                        {bet.profit}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ============================================================== */}
      {/* 3. MOBILE BOTTOM NAV (Hidden on Desktop)                       */}
      {/* ============================================================== */}
      <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-[#050608]/95 backdrop-blur-3xl border-t border-white/10 px-6 py-4 pb-safe">
        <div className="flex justify-between items-center">
          
          <Link href="/dashboard" className="flex flex-col items-center gap-1.5 text-green-500">
            <FiHome className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest">Hub</span>
          </Link>
          
          <Link href="#arena" className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors">
            <FiActivity className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest">Arena</span>
          </Link>

          {/* Trade Button (Center Highlight) */}
          <Link href="#trade" className="relative -top-5 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-black font-black shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:scale-105 transition-transform">
            <FiPlus className="text-2xl" />
          </Link>

          <Link href="#wallet" className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors">
            <FiCreditCard className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest">Wallet</span>
          </Link>

          <Link href="#expert" className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors">
            <FiUsers className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest">Agent</span>
          </Link>
          
        </div>
      </nav>
      
    </div>
  );
}