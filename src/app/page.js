"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sparkles } from '@react-three/drei';
import Link from 'next/link';
import * as THREE from 'three';
import { 
  FiArrowUp, FiTarget, FiBriefcase, FiGift, FiShield, 
  FiTrendingUp, FiTrendingDown, FiZap, FiActivity, 
  FiCpu, FiLock, FiGlobe, FiDatabase, FiAward, FiDollarSign
} from 'react-icons/fi';

// --- Premium 3D Visual ---
const HeroVisual = () => {
  const meshRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.set(t * 0.1, t * 0.2, 0);
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
  });
  return (
    <Float speed={3} rotationIntensity={1.2} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshPhysicalMaterial 
          color="#22c55e" 
          thickness={2}
          roughness={0.1}
          transmission={0.6}
          ior={1.4}
          emissive="#16a34a"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>
    </Float>
  );
};

// --- Professional Badge ---
const Badge = ({ children, icon: Icon }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-green-400 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
    {Icon && <Icon className="text-sm animate-pulse" />} {children}
  </div>
);

// --- Market Tier Info Block ---
const TierInfo = ({ name, type, profit, minBet }) => (
  <motion.div 
    whileHover={{ y: -5, borderColor: type === 'UP' ? '#22c55e' : '#ef4444' }}
    className="p-6 rounded-[2rem] bg-gray-900/40 border border-gray-800 backdrop-blur-md transition-all group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`px-3 py-1 rounded text-[9px] font-black tracking-widest border ${type === 'UP' ? 'border-green-500/30 text-green-500 bg-green-500/5' : 'border-red-500/30 text-red-400 bg-red-500/5'}`}>
        {type} CORE
      </div>
      {type === 'UP' ? <FiTrendingUp className="text-xl text-green-600" /> : <FiTrendingDown className="text-xl text-red-600" />}
    </div>
    <h3 className="text-2xl font-black mb-4 tracking-tighter group-hover:text-white">{name}</h3>
    <div className="space-y-3">
      <div className="flex justify-between text-[11px] font-bold"><span className="text-gray-500 uppercase">Yield</span><span className="text-green-400">+{profit}%/s</span></div>
      <div className="flex justify-between text-[11px] font-bold"><span className="text-gray-500 uppercase">Entry</span><span className="text-white">${minBet}</span></div>
    </div>
  </motion.div>
);

export default function TradeZemPro() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => setShowScroll(window.scrollY > 500);
  }, []);

  const marketTiers = [
    { n: 'UP 100', t: 'UP', p: '0.5', b: '0.1' },
    { n: 'UP 500', t: 'UP', p: '0.75', b: '0.5' },
    { n: 'UP 1K', t: 'UP', p: '1.0', b: '1' },
    { n: 'UP 5K', t: 'UP', p: '1.25', b: '5' },
    { n: 'UP 10K', t: 'UP', p: '1.5', b: '10' },
    { n: 'DOWN 100', t: 'DOWN', p: '0.5', b: '0.1' },
    { n: 'DOWN 500', t: 'DOWN', p: '0.75', b: '0.5' },
    { n: 'DOWN 1K', t: 'DOWN', p: '1.0', b: '1' },
    { n: 'DOWN 5K', t: 'DOWN', p: '1.25', b: '5' },
    { n: 'DOWN 10K', t: 'DOWN', p: '1.5', b: '10' },
  ];

  return (
    <div className="bg-[#050608] text-white selection:bg-green-500/30 overflow-x-hidden font-sans">
      
      {/* --- Advanced 3D Space Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Stars radius={120} depth={60} count={8000} factor={5} fade speed={2} />
          <Sparkles count={300} scale={25} size={6} speed={0.6} color="#22c55e" opacity={0.4} />
          <Float speed={2} floatIntensity={1.5}>
            <mesh position={[12, 6, -15]}>
              <sphereGeometry args={[6, 32, 32]} />
              <meshStandardMaterial color="#16a34a" emissive="#16a34a" emissiveIntensity={2} transparent opacity={0.03} />
            </mesh>
          </Float>
        </Canvas>
      </div>

      {/* 1. Header/Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050608]/90 backdrop-blur-2xl border-b border-white/5 px-4 md:px-12 py-5 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-black tracking-[0.4em] flex items-center gap-3">
          <div className="w-2 h-7 bg-green-500 shadow-[0_0_25px_#22c55e]" />
          TRADE<span className="text-green-500">ZEM</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4 font-sans">
          <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hidden md:block transition-all px-4 py-2 hover:bg-white/5 rounded-full">Login</button>
          <button className="px-5 py-2.5 bg-white text-black text-[9px] md:text-[10px] font-black rounded-full hover:bg-green-500 transition-all uppercase tracking-widest shadow-2xl whitespace-nowrap">Start Trading</button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center overflow-hidden font-sans">
        <div className="absolute inset-0 z-0 opacity-50"><Canvas camera={{ position: [0, 0, 10] }}><HeroVisual /></Canvas></div>
        <div className="relative z-10 max-w-6xl pointer-events-none">
          <Badge icon={FiActivity}>Institutional Grade Trading Architecture</Badge>
          <h1 className="text-5xl md:text-[115px] font-black leading-[0.82] tracking-tighter uppercase mb-10 mt-6 font-sans">
            PREDICT <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 drop-shadow-2xl">THE CRASH</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed font-sans">
            Engage with 10 proprietary algorithmic indices. High-frequency 1-second candles. Decentralized liquidity settlement.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pointer-events-auto">
            <button onClick={() => document.getElementById('market').scrollIntoView({behavior:'smooth'})} className="px-14 py-6 bg-green-500 text-black font-black rounded-3xl shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:scale-105 transition-all uppercase tracking-widest text-xs font-sans">Launch App</button>
            <button onClick={() => document.getElementById('expert').scrollIntoView({behavior:'smooth'})} className="px-14 py-6 bg-white/5 border border-white/10 text-white font-black rounded-3xl backdrop-blur-xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs font-sans">Download App</button>
          </div>
        </div>
      </section>

      {/* 3. Core Mechanics */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto font-sans">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
                <Badge icon={FiShield}>Protocol Integrity</Badge>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">The Math of <br/><span className="text-green-500">Stability</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Our proprietary engine operates on a decentralized distribution model. When an arena run begins, the total prediction volume initializes a <b>Dynamic Liquidity Pool</b>.
                </p>
                <div className="grid gap-6">
                    <div className="p-8 rounded-[2rem] bg-gray-900/50 border border-white/5 flex gap-6 items-start">
                        <FiDatabase className="text-4xl text-green-500 flex-none mt-1" />
                        <div>
                            <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Dynamic Profit Booking</h4>
                            <p className="text-sm text-gray-500">As traders realize gains, payouts are settled instantly from the dynamic pool. The run continues until the algorithmic buffer threshold is reached.</p>
                        </div>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-gray-900/50 border border-white/5 flex gap-6 items-start border-l-4 border-l-red-500/50">
                        <FiZap className="text-4xl text-red-500 flex-none mt-1" />
                        <div>
                            <h4 className="text-xl font-bold mb-2 uppercase tracking-tight text-red-400">The Automatic Crash Trigger</h4>
                            <p className="text-sm text-gray-500">Upon reaching the settlement threshold: UP charts execute a massive correction (Red Candle), and DOWN charts execute a massive recovery (Green Candle).</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-transparent p-12 rounded-[3rem] border border-green-500/10 backdrop-blur-xl">
                 <h3 className="text-2xl font-black mb-10 uppercase tracking-widest text-center border-b border-white/5 pb-6 font-sans">Arena Ruleset</h3>
                 <div className="space-y-8">
                    {[
                        {t: "Betting Window", d: "Exactly 30 seconds provided between every crash to finalize your next entry."},
                        {t: "Entry Limitation", d: "Security Protocol: Only 1 active prediction per user allowed per arena run."},
                        {t: "Settlement", d: "Winning traders must book profit before the crash to secure funds to wallet."},
                        {t: "Market Direction", d: "UP Engines generate sequential Green candles. DOWN Engines generate Red candles."}
                    ].map((rule, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-green-500 flex-none flex items-center justify-center text-black font-black text-[10px]">{idx+1}</div>
                            <div>
                                <h5 className="font-bold text-white uppercase text-xs mb-1 tracking-widest">{rule.t}</h5>
                                <p className="text-gray-500 text-sm font-sans">{rule.d}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </section>

      {/* 4. Global Indices Grid */}
      <section id="market" className="relative py-32 px-6 max-w-[1440px] mx-auto font-sans">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10 border-l-4 border-green-500/20 pl-4 md:pl-8">
          <div className="text-left">
            <Badge icon={FiTarget}>Market Architecture</Badge>
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mt-4 font-sans">Indices</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-xs font-black uppercase tracking-widest leading-loose text-left md:text-right font-sans">
            High-frequency monitoring across 10 proprietary liquidity pairs. Real-time 1-second execution nodes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {marketTiers.map((c, i) => (
            <TierInfo key={i} name={c.n} type={c.t} profit={c.p} minBet={c.b} />
          ))}
        </div>
      </section>

      {/* 5. Expert/Agent System */}
      <section id="expert" className="relative py-32 px-6 max-w-7xl mx-auto font-sans">
        <div className="bg-gray-900/40 rounded-[4rem] border border-white/5 p-10 md:p-20 backdrop-blur-2xl">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10 text-left">
              <FiBriefcase className="text-6xl text-green-500 p-4 bg-green-950/30 rounded-2xl border border-green-800" />
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] font-sans text-left">Trade Zem <br/><span className="text-green-400 font-sans">Expert</span></h2>
              <p className="text-gray-400 text-xl leading-relaxed font-sans">Scale the protocol and monetize your network. Our Expert Program provides deep-level incentives for institutional contributors.</p>
              <div className="grid gap-4">
                <div className="p-8 rounded-3xl bg-black/40 border border-white/5 flex justify-between items-center group hover:border-green-500/50 transition-all font-sans">
                  <div className="space-y-1 text-left">
                    <span className="text-2xl font-black text-white font-sans">5% Direct</span>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest font-sans">Referral 1st Deposit Bonus</p>
                  </div>
                  <FiDollarSign className="text-4xl text-green-500" />
                </div>
                <div className="p-8 rounded-3xl bg-black/40 border border-white/5 flex justify-between items-center group hover:border-green-500/50 transition-all">
                  <div className="space-y-1 text-left">
                    <span className="text-2xl font-black text-green-400 font-sans">1% Passive</span>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest font-sans">Daily Betting Volume Share</p>
                  </div>
                  <FiTrendingUp className="text-4xl text-green-500" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-600 mb-8 border-l-2 border-green-500 pl-4 font-sans text-left">Milestone Structure</h3>
              <div className="bg-black/60 rounded-[2.5rem] border border-white/5 overflow-hidden">
                {[
                  { u: '10 Users', b: '5' }, { u: '25 Users', b: '10' }, { u: '50 Users', b: '20' },
                  { u: '100 Users', b: '50' }, { u: '500 Users', b: '100' }, { u: '1000 Users', b: '500' }
                ].map((m, i) => (
                  <div key={i} className="flex justify-between items-center p-6 border-b border-white/5 hover:bg-green-500/5 transition-all group font-sans">
                    <span className="text-sm font-black text-gray-500 group-hover:text-white uppercase tracking-widest">{m.u}</span>
                    <span className="text-3xl font-black text-white font-sans">${m.b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Rewards & Gateway */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto font-sans">
        <div className="grid md:grid-cols-2 gap-10">
            <div className="p-12 rounded-[3rem] bg-gradient-to-br from-emerald-500/10 to-transparent border border-white/10 text-center">
                <FiAward className="text-6xl text-emerald-400 mx-auto mb-8" />
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none font-sans">Monthly Top 10</h3>
                <p className="text-gray-400 mb-10 leading-relaxed text-sm font-sans">Qualify with $1000+ monthly volume. Win dynamic physical rewards.</p>
                <div className="flex flex-wrap justify-center gap-4 text-xs font-black uppercase tracking-tighter text-gray-400 font-sans">
                    <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Mobile</span>
                    <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Smart TV</span>
                    <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Washing Machine</span>
                </div>
            </div>
            <div className="p-12 rounded-[3rem] bg-gray-900/40 border border-white/10 text-center flex flex-col justify-center">
                <FiShield className="text-6xl text-green-500 mx-auto mb-8" />
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none font-sans text-center">Crypto Gateway</h3>
                <p className="text-gray-400 mb-10 leading-relaxed text-sm font-sans text-center">Secure, instant deposits and 24/7 withdrawals via the integrated Crypto Payment Node.</p>
                <button className="w-full py-5 bg-green-500 text-gray-950 font-black rounded-2xl uppercase tracking-[0.2em] text-xs shadow-3xl font-sans">Launch Trading App</button>
            </div>
        </div>
      </section>

      {/* Footer with Links */}
      <footer className="relative z-10 py-20 border-t border-white/5 font-sans">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 mb-16 text-center md:text-left">
                <div>
                    <div className="text-xl font-black tracking-[0.3em] mb-6 font-sans">TRADE<span className="text-green-500 font-sans">ZEM</span></div>
                    <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-widest font-bold font-sans">The ultimate high-velocity crypto arena. Speed. Math. Decentrallized.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 uppercase text-[10px] font-black tracking-widest text-gray-400">
                    <Link href="/terms" className="hover:text-green-500 transition-colors">Term of use</Link>
                    <Link href="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link>
                    <Link href="/risk" className="hover:text-green-500 transition-colors">Risk Warning</Link>
                    <Link href="/audit" className="hover:text-green-500 transition-colors">Audit Report</Link>
                </div>
            </div>
            <div className="text-center pt-10 border-t border-white/5">
                <p className="text-[9px] text-gray-600 uppercase tracking-[0.4em] font-black font-sans">
                    Decentralized • High Velocity • Institutional Grade • © 2026
                </p>
            </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button 
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-green-500 text-gray-950 rounded-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(34,197,94,0.4)] hover:bg-white transition-all active:scale-95"
          >
            <FiArrowUp className="text-2xl font-black" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}