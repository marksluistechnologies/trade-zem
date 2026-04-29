"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { 
  FiArrowUp, FiShield, FiFileText, FiSearch, 
  FiLock, FiCpu, FiCheckCircle, FiDownload, FiExternalLink 
} from 'react-icons/fi';

// --- Shared Badge Component ---
const Badge = ({ children, icon: Icon }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-green-400 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
    {Icon && <Icon className="text-sm animate-pulse" />} {children}
  </div>
);

export default function AuditReport() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => setShowScroll(window.scrollY > 400);
  }, []);

  const auditSteps = [
    {
      title: "Smart Contract Static Analysis",
      icon: <FiSearch className="text-green-500" />,
      desc: "Our foundational algorithmic logic undergoes rigorous automated scanning to identify common vulnerabilities, including re-entrancy attacks and integer overflows."
    },
    {
      title: "Manual Code Review",
      icon: <FiFileText className="text-green-500" />,
      desc: "Cybersecurity experts perform line-by-line manual inspections of the TradeZem engine to ensure the integrity of the 1-second candle generation and pool settlement logic."
    },
    {
      title: "Liquidity Stress Testing",
      icon: <FiCpu className="text-green-500" />,
      desc: "We simulate extreme market scenarios to verify that the decentralized liquidity pool remains solvent and that the 'Crash Trigger' executes exactly as mathematically defined."
    }
  ];

  return (
    <div className="bg-[#050608] text-white selection:bg-green-500/30 overflow-x-hidden font-sans">
      
      {/* Dynamic Space Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Canvas>
          <Stars radius={120} depth={50} count={6000} factor={4} fade speed={1.5} />
          <Sparkles count={150} scale={20} size={4} speed={0.5} color="#22c55e" opacity={0.3} />
        </Canvas>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050608]/90 backdrop-blur-2xl border-b border-white/5 px-6 md:px-12 py-5 flex justify-between items-center">
        <a href="/" className="text-xl md:text-2xl font-black tracking-[0.3em] flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-1.5 h-6 md:h-7 bg-green-500 shadow-[0_0_20px_#22c55e]" />
          TRADE<span className="text-green-500">ZEM</span>
        </a>
        <div className="flex gap-4">
            <a href="/" className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Return to Hub
            </a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="relative z-10 pt-40 pb-16 px-6 text-center max-w-5xl mx-auto border-b border-white/5">
        <Badge icon={FiShield}>Security Protocol</Badge>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Audit <span className="text-green-500">Report</span></h1>
        <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest">
          Q2 2026 Verification Status: <span className="text-green-400">PASSED</span>
        </p>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-20 px-6 max-w-5xl mx-auto">
        
        {/* Security Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-center">
            <div className="space-y-6 text-left">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Integrity is our <br/> Foundational Asset</h2>
                <p className="text-gray-400 leading-relaxed font-medium">
                    At TradeZem, we believe that transparency is the only way to build a sustainable trading ecosystem. Our protocol undergoes quarterly audits by world-class cybersecurity firms to ensure every trade, every pool settlement, and every automated candle is executing with absolute mathematical precision.
                </p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-green-500/5 border border-green-500/20 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                    <FiCheckCircle className="text-3xl text-green-500" />
                    <h3 className="text-xl font-bold uppercase tracking-tight">Audit Score: 98/100</h3>
                </div>
                <div className="space-y-4">
                    <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden">
                        <div className="bg-green-500 h-full w-[98%] shadow-[0_0_10px_#22c55e]"></div>
                    </div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Logic Security: Excellent</p>
                </div>
            </div>
        </div>

        {/* Audit Methodology */}
        <div className="space-y-8 mb-24">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-600 mb-12 border-l-2 border-green-500 pl-4">Methodology & Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {auditSteps.map((step, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-[2rem] bg-gray-900/40 border border-white/5 hover:border-green-500/30 transition-all"
                    >
                        <div className="w-12 h-12 bg-black/50 border border-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                            {step.icon}
                        </div>
                        <h4 className="text-xl font-black uppercase tracking-tighter mb-4">{step.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* The PDF Download Section */}
        <section className="p-10 md:p-20 rounded-[3.5rem] bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 backdrop-blur-3xl text-center shadow-2xl">
            <FiFileText className="text-6xl text-green-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">Complete Audit <br/> Documentation</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Download the full technical report detailing our smart contract architecture, vulnerability assessment, and liquidity stress results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {/* Visual Placeholder for PDF */}
                <a 
                    href="/trade-zem-audit-q2-2026.pdf" 
                    className="flex items-center justify-center gap-3 px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-green-500 transition-all uppercase tracking-widest text-xs group"
                >
                    <FiDownload className="text-lg group-hover:animate-bounce" /> Download PDF Report
                </a>
                <button className="flex items-center justify-center gap-3 px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
                    <FiExternalLink className="text-lg" /> Verify on Github
                </button>
            </div>
            
            <p className="mt-8 text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                SHA-256 Checksum: 8f92b...c3a12 (Verified)
            </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 text-center border-t border-white/5 bg-black/20 mt-20">
        <div className="text-xl font-black tracking-[0.8em] mb-6 opacity-20 uppercase">TradeZem Protocol</div>
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-black">
          Decentralized • High Velocity • Institutional Grade • © 2026
        </p>
      </footer>

      {/* Floating Scroll Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button 
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="fixed bottom-10 right-10 z-50 w-14 h-14 bg-green-500 text-black rounded-2xl flex items-center justify-center shadow-[0_15px_40px_rgba(34,197,94,0.3)] hover:bg-white transition-all active:scale-95"
          >
            <FiArrowUp className="text-xl font-black" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}