"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { 
  FiArrowUp, FiAlertTriangle, FiTrendingDown, 
  FiWifiOff, FiBookOpen, FiAlertOctagon, FiShieldOff 
} from 'react-icons/fi';

// --- Shared Badge Component ---
const Badge = ({ children, icon: Icon }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-red-400 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
    {Icon && <Icon className="text-sm animate-pulse" />} {children}
  </div>
);

export default function RiskWarning() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => setShowScroll(window.scrollY > 400);
  }, []);

  const riskData = [
    {
      title: "1. Extreme Market Volatility",
      icon: <FiTrendingDown className="text-red-500" />,
      content: (
        <>
          <p className="mb-4">
            TradeZem operates on a high-frequency, 1-second algorithmic execution model. Unlike traditional financial markets, our dynamic arenas experience instantaneous volatility. The algorithmic "Crash" or "Boom" triggers happen in milliseconds.
          </p>
          <p>
            You must be prepared for the possibility of rapid and total loss of your staked capital for any given round if you fail to execute your profit booking before the algorithmic threshold is met.
          </p>
        </>
      )
    },
    {
      title: "2. Total Loss of Capital",
      icon: <FiAlertOctagon className="text-red-500" />,
      content: (
        <>
          <p className="mb-4">
            Participation in TradeZem’s prediction arenas is strictly speculative. There is no guaranteed return on investment. The mathematical fairness of our decentralized pool ensures system integrity, but it does not guarantee individual profitability.
          </p>
          <p>
            <strong>Rule of Thumb:</strong> Never trade, stake, or predict with capital that you cannot afford to lose entirely. This platform should not be used as a primary source of income or a retirement strategy.
          </p>
        </>
      )
    },
    {
      title: "3. Technological & Latency Risks",
      icon: <FiWifiOff className="text-orange-500" />,
      content: (
        <>
          <p className="mb-4">
            Because TradeZem relies on sub-second execution, your personal internet connection latency (ping), hardware processing speed, and network stability play a critical role in your ability to interact with the platform effectively.
          </p>
          <p>
            TradeZem shall not be held liable for losses incurred due to delayed signal transmission, personal internet outages, browser crashes, or third-party blockchain network congestion delaying your deposits or withdrawals.
          </p>
        </>
      )
    },
    {
      title: "4. Regulatory & Legal Uncertainty",
      icon: <FiShieldOff className="text-orange-500" />,
      content: (
        <>
          <p className="mb-4">
            The regulatory framework governing cryptocurrencies, digital assets, and decentralized prediction markets is constantly evolving and varies significantly from one jurisdiction to another. 
          </p>
          <p>
            You are solely responsible for understanding and complying with the laws, tax regulations, and legal restrictions applicable in your country of residence. TradeZem reserves the right to terminate access to users from restricted jurisdictions without prior notice.
          </p>
        </>
      )
    },
    {
      title: "5. No Financial or Investment Advice",
      icon: <FiBookOpen className="text-gray-400" />,
      content: (
        <>
          <p className="mb-4">
            All information provided on the TradeZem platform, including yields, metrics, historical data, and interface notifications, is for informational purposes only. It does not constitute financial, investment, legal, or tax advice.
          </p>
          <p>
            You are making independent decisions based on your own risk appetite. We strongly recommend consulting with a certified financial advisor before engaging in high-velocity crypto trading.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="bg-[#050608] text-white selection:bg-red-500/30 overflow-x-hidden font-sans">
      
      {/* Dynamic Space Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Canvas>
          <Stars radius={120} depth={50} count={6000} factor={4} fade speed={1.5} />
          <Sparkles count={150} scale={20} size={4} speed={0.5} color="#ef4444" opacity={0.2} />
        </Canvas>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050608]/90 backdrop-blur-2xl border-b border-white/5 px-6 md:px-12 py-5 flex justify-between items-center">
        <a href="/" className="text-xl md:text-2xl font-black tracking-[0.3em] flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-1.5 h-6 md:h-7 bg-red-500 shadow-[0_0_20px_#ef4444]" />
          TRADE<span className="text-green-500">ZEM</span>
        </a>
        <a href="/" className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Return to Hub
        </a>
      </nav>

      {/* Header Section */}
      <header className="relative z-10 pt-40 pb-16 px-6 text-center max-w-5xl mx-auto border-b border-white/5">
        <Badge icon={FiAlertTriangle}>Crucial Information</Badge>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white">Risk <span className="text-red-500">Warning</span></h1>
        <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest">
          Effective Date: April 29, 2026
        </p>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
        <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 backdrop-blur-xl mb-16 shadow-2xl">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base font-medium">
                Trading on the TradeZem Protocol involves substantial risk and is not suitable for every investor. The high-velocity nature of our 1-second execution engine means that market dynamics can shift instantly. By proceeding to use our services, you formally acknowledge and accept the risks outlined below.
            </p>
        </div>

        <div className="space-y-12">
          {riskData.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              className="group p-8 md:p-12 rounded-[2.5rem] bg-gray-900/40 border border-white/5 hover:border-red-500/30 transition-all duration-500 backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-white/5 pb-8">
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-3xl flex-none group-hover:scale-110 group-hover:border-red-500/50 transition-all duration-500 shadow-inner">
                    {section.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-400 transition-colors">
                  {section.title}
                </h2>
              </div>
              <div className="text-gray-400 text-sm md:text-base leading-loose font-medium">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 text-center border-t border-white/5 bg-black/20 mt-20">
        <div className="text-xl font-black tracking-[0.8em] mb-6 opacity-20 uppercase">TradeZem Protocol</div>
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-black">
          Decentralized • High Velocity • Institutional Grade • © 2026
        </p>
      </footer>

      {/* Floating Action Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button 
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="fixed bottom-10 right-10 z-50 w-14 h-14 bg-red-500 text-white rounded-2xl flex items-center justify-center shadow-[0_15px_40px_rgba(239,68,68,0.3)] hover:bg-white hover:text-black transition-all active:scale-95"
          >
            <FiArrowUp className="text-xl font-black" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}