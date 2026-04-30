"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import Link from 'next/link';
import { 
  FiHome, FiActivity, FiWallet, FiUsers, FiUser, 
  FiArrowUpRight, FiArrowDownLeft, FiClock, 
  FiCheckCircle, FiXCircle, FiBell, FiPlus, FiMinus, FiEye
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
    <div className="bg-[#050608] min-h-screen text-white selection:bg-green-500/30 font-sans pb-24 md:pb-32 overflow-x-hidden">
      
      {/* Dynamic Space Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <Canvas>
          <Stars radius={100} depth={50} count={4000} factor={4} fade speed={1} />
          <Sparkles count={50} scale={15} size={4} speed={0.2} color="#22c55e" opacity={0.2} />
        </Canvas>
      </div>

      {/* Top Header */}
      <header className="relative z-10 p-6 flex justify-between items-center border-b border-white/5 bg-[#050608]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-500 to-emerald-900 p-[2px]">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center border border-black">
              <FiUser className="text-green-500" />
            </div>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Welcome back,</p>
            <p className="text-sm font-black uppercase tracking-wider">Demo User</p>
          </div>
        </div>
        <button className="relative p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <FiBell className="text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
        </button>
      </header>

      {/* Main Dashboard Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 mt-8 space-y-8">
        
        {/* Portfolio / Balance Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-[2.5rem] bg-gradient-to-br from-green-500/10 via-transparent to-transparent border border-green-500/20 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[80px]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                Total Portfolio Value <FiEye className="cursor-pointer hover:text-white" />
              </p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter flex items-center gap-2">
                <span className="text-green-500 text-4xl md:text-5xl">$</span>{userData.balance}
              </h1>
            </div>
            
            <div className="flex w-full md:w-auto gap-4">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-black font-black rounded-2xl uppercase tracking-widest text-[10px] hover:bg-green-400 transition-all shadow-[0_10px_30px_rgba(34,197,94,0.2)]">
                <FiPlus className="text-sm" /> Deposit
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                <FiMinus className="text-sm" /> Withdraw
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-[2rem] bg-gray-900/40 border border-white/5 backdrop-blur-md">
            <FiTarget className="text-2xl text-gray-500 mb-4" />
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Win Rate</p>
            <p className="text-2xl font-black text-white">{userData.winRate}</p>
          </div>
          <div className="p-6 rounded-[2rem] bg-gray-900/40 border border-white/5 backdrop-blur-md">
            <FiActivity className="text-2xl text-gray-500 mb-4" />
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Total Volume</p>
            <p className="text-2xl font-black text-white">{userData.totalVolume}</p>
          </div>
          <div className="col-span-2 md:col-span-1 p-6 rounded-[2rem] bg-gray-900/40 border border-white/5 backdrop-blur-md border-l-2 border-l-green-500">
            <FiBriefcase className="text-2xl text-green-500 mb-4" />
            <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest mb-1">Network Bonus</p>
            <p className="text-2xl font-black text-green-400">{userData.networkBonus}</p>
          </div>
        </div>

        {/* Recent History */}
        <div className="pt-6">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Recent Arena Runs</h2>
            <Link href="#" className="text-[10px] font-black text-green-500 uppercase tracking-widest hover:underline">View All</Link>
          </div>

          <div className="space-y-3">
            {betHistory.map((bet, index) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                key={bet.id} 
                className="p-5 rounded-[1.5rem] bg-gray-900/60 border border-white/5 backdrop-blur-md flex justify-between items-center hover:bg-gray-800/60 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bet.status === 'WIN' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {bet.status === 'WIN' ? <FiArrowUpRight className="text-xl" /> : <FiArrowDownLeft className="text-xl" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-wider group-hover:text-white transition-colors">{bet.market}</h4>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1 mt-0.5">
                      <FiClock /> {bet.time}
                    </p>
                  </div>
                </div>

                <div className="text-right flex items-center gap-6">
                  <div className="hidden sm:block">
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Staked</p>
                    <p className="text-sm font-black text-white">${bet.amount}</p>
                  </div>
                  <div className="text-right">
                    <Badge type={bet.status === 'WIN' ? 'success' : 'danger'}>
                      {bet.status === 'WIN' ? <FiCheckCircle /> : <FiXCircle />} {bet.status}
                    </Badge>
                    <p className={`text-sm font-black mt-1 ${bet.status === 'WIN' ? 'text-green-400' : 'text-red-400'}`}>
                      {bet.profit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full md:bottom-8 md:w-auto md:left-1/2 md:-translate-x-1/2 z-50 px-4 md:px-0 pb-4 md:pb-0">
        <div className="bg-[#0a0c10]/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-2 flex justify-between md:justify-center items-center gap-2 md:gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] mx-auto max-w-sm md:max-w-none">
          
          <Link href="/dashboard" className="flex flex-col items-center gap-1 p-3 px-5 md:px-6 rounded-2xl bg-white/5 text-white transition-all">
            <FiHome className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest mt-1">Hub</span>
          </Link>
          
          <Link href="#arena" className="flex flex-col items-center gap-1 p-3 px-5 md:px-6 rounded-2xl text-gray-500 hover:text-white hover:bg-white/5 transition-all">
            <FiActivity className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest mt-1">Arena</span>
          </Link>

          <Link href="#wallet" className="flex flex-col items-center gap-1 p-3 px-5 md:px-6 rounded-2xl text-gray-500 hover:text-white hover:bg-white/5 transition-all">
            <FiWallet className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest mt-1">Wallet</span>
          </Link>

          <Link href="#expert" className="flex flex-col items-center gap-1 p-3 px-5 md:px-6 rounded-2xl text-gray-500 hover:text-white hover:bg-white/5 transition-all">
            <FiUsers className="text-xl" />
            <span className="text-[8px] font-black uppercase tracking-widest mt-1">Agent</span>
          </Link>
          
        </div>
      </nav>
      
    </div>
  );
}

// Chhota component FiEye import nahi kiya tha react-icons/fi se, usko yahin define kar dete hain file ke upar import me:
// import { ..., FiEye } from 'react-icons/fi';