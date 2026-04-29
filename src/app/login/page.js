"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles, Float } from '@react-three/drei';
import Link from 'next/link';
import { 
  FiMail, FiLock, FiUser, FiUserPlus, 
  FiArrowRight, FiKey, FiShield 
} from 'react-icons/fi';

// --- Background 3D Visual ---
const BackgroundVisual = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[0, 0, -2]}>
        <icosahedronGeometry args={[3, 1]} />
        <meshStandardMaterial color="#22c55e" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
};

// --- Custom Input Component ---
const InputField = ({ icon: Icon, type, placeholder, name }) => (
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-green-500 transition-colors">
      <Icon className="text-lg" />
    </div>
    <input
      type={type}
      name={name}
      className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all"
      placeholder={placeholder}
      required
    />
  </div>
);

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-green-500/30 overflow-hidden font-sans flex flex-col">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <BackgroundVisual />
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1.5} />
          <Sparkles count={100} scale={10} size={4} speed={0.4} color="#22c55e" opacity={0.4} />
        </Canvas>
      </div>

      {/* Simple Navbar */}
      <nav className="relative z-10 w-full p-6 md:p-10 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-[0.3em] flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-1.5 h-6 bg-green-500 shadow-[0_0_15px_#22c55e]" />
          TRADE<span className="text-green-500">ZEM</span>
        </Link>
        <Link href="/" className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Return to Hub
        </Link>
      </nav>

      {/* Auth Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          
          {/* Glass Card */}
          <div className="bg-gray-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-green-500 rounded-b-full shadow-[0_0_20px_#22c55e]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'register'}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-500">
                    <FiShield className="text-2xl" />
                  </div>
                  <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">
                    {isLogin ? 'Access Terminal' : 'Create Account'}
                  </h1>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    {isLogin ? 'Enter your credentials to continue' : 'Join the high-velocity arena'}
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  
                  {!isLogin && (
                    <InputField icon={FiUser} type="text" name="name" placeholder="Full Name" />
                  )}
                  
                  <InputField icon={FiMail} type="email" name="email" placeholder="Email Address" />
                  <InputField icon={FiLock} type="password" name="password" placeholder="Password" />
                  
                  {!isLogin && (
                    <>
                      <InputField icon={FiLock} type="password" name="confirmPassword" placeholder="Confirm Password" />
                      <InputField icon={FiKey} type="text" name="referral" placeholder="Referral Code (Optional)" />
                      
                      <div className="flex items-start gap-3 mt-4 px-1">
                        <input type="checkbox" id="terms" className="mt-1 accent-green-500 bg-black/50 border-white/10" required />
                        <label htmlFor="terms" className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                          I agree to the <Link href="/terms" className="text-green-500 hover:underline">Terms of Use</Link> and <Link href="/privacy" className="text-green-500 hover:underline">Privacy Policy</Link>.
                        </label>
                      </div>
                    </>
                  )}

                  {isLogin && (
                    <div className="flex justify-end px-1">
                      <Link href="#" className="text-[10px] text-green-500 hover:text-green-400 uppercase tracking-widest font-bold transition-colors">
                        Forgot Password?
                      </Link>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="w-full py-4 mt-6 bg-green-500 text-black font-black rounded-xl uppercase tracking-[0.2em] text-xs hover:bg-green-400 transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(34,197,94,0.2)]"
                  >
                    {isLogin ? 'Initialize Session' : 'Register Node'} <FiArrowRight className="text-lg" />
                  </button>
                </form>

                {/* Toggle Login/Register */}
                <div className="mt-8 text-center border-t border-white/5 pt-6">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                  </p>
                  <button 
                    onClick={() => setIsLogin(!isLogin)}
                    className="mt-2 text-xs text-white font-black uppercase tracking-[0.2em] hover:text-green-400 transition-colors flex items-center justify-center gap-2 mx-auto"
                  >
                    {isLogin ? (
                      <><FiUserPlus /> Create an account</>
                    ) : (
                      <><FiUser /> Access Terminal</>
                    )}
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Footer Note */}
          <div className="text-center mt-8 opacity-50">
             <p className="text-[9px] text-gray-400 uppercase tracking-[0.4em] font-black">
               TradeZem Protocol • Secure Gateway
             </p>
          </div>

        </div>
      </main>
    </div>
  );
}