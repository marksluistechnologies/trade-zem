"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { 
  FiArrowUp, FiShield, FiFileText, FiAlertTriangle, 
  FiLock, FiCheckCircle, FiGlobe, FiServer, FiActivity
} from 'react-icons/fi';

// --- Shared Badge Component ---
const Badge = ({ children, icon: Icon }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-green-400 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
    {Icon && <Icon className="text-sm animate-pulse" />} {children}
  </div>
);

export default function TermsOfUse() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => setShowScroll(window.scrollY > 400);
  }, []);

  const termsData = [
    {
      title: "1. Acceptance of Terms & Global Applicability",
      icon: <FiGlobe className="text-green-500" />,
      content: (
        <>
          <p className="mb-4">
            By accessing, registering, or utilizing the TradeZem Protocol ("Platform", "we", "our", or "us"), you agree to be bound by these Terms of Use. These Terms constitute a legally binding agreement between you and TradeZem regarding your use of our high-velocity decentralized trading environment.
          </p>
          <p>
            TradeZem operates on a global scale. However, the availability of our services may be restricted in certain jurisdictions due to local regulatory frameworks regarding cryptocurrency and algorithmic trading. It is your sole responsibility to ensure that your participation complies with the laws of your country of residence.
          </p>
        </>
      )
    },
    {
      title: "2. User Eligibility & Jurisdictional Compliance",
      icon: <FiCheckCircle className="text-green-500" />,
      content: (
        <>
          <p className="mb-4">
            To access the TradeZem Terminal, you represent and warrant that you are at least eighteen (18) years of age, or the legal age of majority in your jurisdiction, and possess the legal capacity to enter into this agreement.
          </p>
          <p>
            You further guarantee that you are not a resident of, or accessing the platform from, any country subject to comprehensive international sanctions or embargoes. TradeZem reserves the right to implement geo-blocking technologies and KYC (Know Your Customer) protocols at its discretion to ensure international compliance.
          </p>
        </>
      )
    },
    {
      title: "3. High-Velocity Trading & Inherent Risks",
      icon: <FiActivity className="text-orange-500" />,
      content: (
        <>
          <p className="mb-4">
            TradeZem provides a proprietary 1-second high-frequency market execution engine. <strong>WARNING: Trading in high-velocity algorithmic arenas involves a significant degree of financial risk.</strong> The dynamic "Crash" mechanic is mathematically driven by the decentralized liquidity pool, and market directions can reverse in milliseconds.
          </p>
          <p>
            You acknowledge that failure to execute a "Lock Prediction" (profit booking) prior to the algorithmic crash trigger will result in the total loss of your staked capital for that specific round. Past performance of our indices is not indicative of future results. Never trade with capital you cannot afford to lose.
          </p>
        </>
      )
    },
    {
      title: "4. Decentralized Settlement & Blockchain Finality",
      icon: <FiServer className="text-green-500" />,
      content: (
        <>
          <p className="mb-4">
            All deposits, withdrawals, and internal settlements are executed via our Zero-Trust Crypto Gateway. Due to the immutable nature of blockchain technology, all completed transactions and executed trades are final and irreversible.
          </p>
          <p>
            TradeZem is not responsible for any loss of funds resulting from user error, including but not limited to: transferring funds to the wrong wallet address, network congestion, or selecting an incorrect blockchain network during deposit or withdrawal processes.
          </p>
        </>
      )
    },
    {
      title: "5. Account Security & Custodial Disclaimer",
      icon: <FiLock className="text-green-500" />,
      content: (
        <>
          <p className="mb-4">
            You are entirely responsible for maintaining the confidentiality of your account credentials, private keys, and two-factor authentication (2FA) mechanisms. TradeZem operates on a non-custodial framework for active arena settlements.
          </p>
          <p>
            In the event of unauthorized access to your account due to negligence or phishing attacks external to our protocol, TradeZem holds no liability. We will never ask for your private keys or seed phrases under any circumstances.
          </p>
        </>
      )
    },
    {
      title: "6. Prohibited Activities & AML Policy",
      icon: <FiAlertTriangle className="text-red-500" />,
      content: (
        <>
          <p className="mb-4">
            To maintain the integrity of the decentralized pool, the following activities are strictly prohibited and will result in immediate account termination and freezing of assets:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>The use of automated bots, scripts, or API manipulation to exploit the 1-second candle execution.</li>
            <li>Attempting to reverse-engineer, decompile, or launch DDoS attacks against the TradeZem servers.</li>
            <li>Engaging in money laundering, terrorist financing, or utilizing the platform to obscure the origin of illicit funds.</li>
            <li>Creating multiple accounts to exploit the Expert/Agent milestone network maliciously.</li>
          </ul>
        </>
      )
    },
    {
      title: "7. Limitation of Liability",
      icon: <FiShield className="text-gray-400" />,
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, TradeZem, its developers, partners, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising out of your use of the platform. This includes losses triggered by server downtime, internet connectivity issues, blockchain network forks, or algorithmic latency anomalies. The protocol is provided on an "as-is" and "as-available" basis without any warranties of uninterrupted operation.
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
        <Badge icon={FiFileText}>Legal Framework</Badge>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Terms of Use</h1>
        <p className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-widest">
          Effective Date: April 29, 2026
        </p>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
        <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/10 backdrop-blur-xl mb-16 shadow-2xl">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base font-medium">
                Welcome to the TradeZem Protocol. Please read these Terms of Use carefully before interacting with our trading terminal. By accessing our platform, connecting your wallet, or participating in the algorithmic liquidity arenas, you acknowledge that you have read, understood, and agreed to be legally bound by this document in its entirety.
            </p>
        </div>

        <div className="space-y-12">
          {termsData.map((section, idx) => (
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