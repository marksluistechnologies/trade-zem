"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { 
  FiArrowUp, FiShield, FiFileText, FiDatabase, 
  FiEye, FiShare2, FiLock, FiGlobe, FiActivity
} from 'react-icons/fi';

// --- Shared Badge Component ---
const Badge = ({ children, icon: Icon }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-green-400 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
    {Icon && <Icon className="text-sm animate-pulse" />} {children}
  </div>
);

export default function PrivacyPolicy() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => setShowScroll(window.scrollY > 400);
  }, []);

  const privacyData = [
    {
      title: "1. Information We Collect",
      icon: <FiDatabase className="text-green-500" />,
      content: (
        <>
          <p className="mb-4">
            At TradeZem, we adhere to a principle of data minimization. As a decentralized algorithmic trading protocol, we collect only the data strictly necessary to provide our services and ensure platform security. 
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Wallet Information:</strong> Public cryptographic wallet addresses used for deposits, withdrawals, and active arena predictions.</li>
            <li><strong>Technical Data:</strong> IP addresses, browser types, device identifiers, and operating system details required to prevent DDoS attacks and unauthorized access.</li>
            <li><strong>Usage Metrics:</strong> Aggregated, anonymized data regarding interaction with our indices to improve algorithmic latency and UI experience.</li>
          </ul>
        </>
      )
    },
    {
      title: "2. Blockchain Transparency & Public Ledgers",
      icon: <FiEye className="text-green-500" />,
      content: (
        <>
          <p className="mb-4">
            It is imperative to understand that TradeZem utilizes public blockchain networks for processing crypto gateway transactions. By the inherent nature of blockchain technology, all transaction histories, wallet balances, and timestamped activities are public, immutable, and fully transparent.
          </p>
          <p>
            We do not control these underlying networks (such as Ethereum, Binance Smart Chain, etc.) and cannot erase or modify transaction data once it has been broadcasted and confirmed on the distributed ledger.
          </p>
        </>
      )
    },
    {
      title: "3. How We Use Your Data",
      icon: <FiActivity className="text-green-500" />,
      content: (
        <>
          <p className="mb-4">
            The minimal data we do collect is utilized strictly for the following operational purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>To execute your high-velocity trades and process real-time settlement payouts via the automated pool.</li>
            <li>To detect, prevent, and mitigate malicious activities, including bot manipulations and sybil attacks on the Expert Network.</li>
            <li>To track and distribute multi-tiered rebate commissions to Agent nodes accurately.</li>
            <li>To comply with global regulatory frameworks and anti-money laundering (AML) guidelines where applicable.</li>
          </ul>
        </>
      )
    },
    {
      title: "4. Data Sharing & Third-Party Gateways",
      icon: <FiShare2 className="text-orange-500" />,
      content: (
        <>
          <p className="mb-4">
            TradeZem does not sell, rent, or trade your personal information. We only share necessary cryptographic data with trusted third-party node providers and crypto payment gateways solely for the purpose of executing your requested transactions.
          </p>
          <p>
            These third-party gateways are bound by their own stringent privacy policies and institutional-grade security measures. We may also disclose information if required to do so by international law enforcement agencies possessing a valid jurisdictional subpoena.
          </p>
        </>
      )
    },
    {
      title: "5. Security & Cryptographic Protection",
      icon: <FiLock className="text-green-500" />,
      content: (
        <>
          <p className="mb-4">
            We deploy institutional-grade security protocols to safeguard your interactions with the platform. This includes end-to-end SSL encryption for data transmission, advanced firewall architecture, and non-custodial cold-storage solutions for the foundational liquidity pools.
          </p>
          <p>
            However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, the ultimate responsibility for securing private keys and account access credentials lies entirely with the user.
          </p>
        </>
      )
    },
    {
      title: "6. Cookies & Tracking Technologies",
      icon: <FiGlobe className="text-gray-400" />,
      content: (
        <>
          <p>
            The TradeZem Terminal utilizes localized session cookies and similar tracking technologies to maintain your login state, remember your trading interface preferences, and analyze platform traffic. You have the right to disable non-essential cookies via your browser settings, though doing so may limit your ability to execute high-speed predictions efficiently.
          </p>
        </>
      )
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
        <a href="/" className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Return to Hub
        </a>
      </nav>

      {/* Header Section */}
      <header className="relative z-10 pt-40 pb-16 px-6 text-center max-w-5xl mx-auto border-b border-white/5">
        <Badge icon={FiShield}>Data Protection</Badge>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Privacy Policy</h1>
        <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest">
          Effective Date: April 29, 2026
        </p>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
        <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/10 backdrop-blur-xl mb-16 shadow-2xl">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base font-medium">
                At TradeZem Protocol, we prioritize the confidentiality and integrity of our users' data. This Privacy Policy outlines our transparent approach to data collection, utilization, and safeguarding within our decentralized high-velocity trading ecosystem. By accessing our platform, you consent to the practices described below.
            </p>
        </div>

        <div className="space-y-12">
          {privacyData.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              className="group p-8 md:p-12 rounded-[2.5rem] bg-gray-900/40 border border-white/5 hover:border-green-500/30 transition-all duration-500 backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-white/5 pb-8">
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-3xl flex-none group-hover:scale-110 group-hover:border-green-500/50 transition-all duration-500 shadow-inner">
                    {section.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-green-400 transition-colors">
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
            className="fixed bottom-10 right-10 z-50 w-14 h-14 bg-green-500 text-black rounded-2xl flex items-center justify-center shadow-[0_15px_40px_rgba(34,197,94,0.3)] hover:bg-white transition-all active:scale-95"
          >
            <FiArrowUp className="text-xl font-black" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}