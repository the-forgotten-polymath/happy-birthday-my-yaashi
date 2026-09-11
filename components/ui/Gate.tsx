"use client";

import { ReactNode, useState, useEffect } from "react";
import { config } from "@/lib/config";
import Balloons from "@/components/ui/Balloons";
import SVGPets from "@/components/ui/SVGPets";
import { useNow } from "@/lib/useNow";

export default function Gate({ children }: { children: ReactNode }) {
  const now = useNow();
  const [bypassed, setBypassed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration safety: render nothing or a safe fallback until client mounts
  if (!mounted || now === null) return null;

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-white overflow-hidden">
        <SVGPets />
        <Balloons count={10} className="z-[-1]" />
        
        <div className="relative z-10 glass p-8 rounded-3xl max-w-sm w-full mx-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-2 text-gradient">Locked</h2>
          <p className="text-white/60 mb-6 text-sm">Enter the secret password to continue</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (password.toLowerCase() === config.gate.bypassKey.toLowerCase()) {
              window.dispatchEvent(new CustomEvent("UNLOCK_AUDIO"));
              window.dispatchEvent(new CustomEvent("PLAY_AUDIO"));
              setIsAuthenticated(true);
            } else {
              setError(true);
              setTimeout(() => setError(false), 2000);
            }
          }}>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sun transition-all mb-4"
            />
            {error && <p className="text-red-400 text-sm mb-4">Incorrect password</p>}
            <button 
              type="submit"
              className="w-full bg-sun text-ink font-bold py-3 rounded-xl hover:bg-sun/90 transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  const targetDate = new Date(config.gate.targetDate).getTime();
  const isUnlocked = bypassed || now >= targetDate;

  if (isUnlocked) {
    return <>{children}</>;
  }

  const remainingMs = targetDate - now;

  // Final 60 minutes specific UI
  const isFinalHour = remainingMs > 0 && remainingMs <= 3600000;
  
  if (isFinalHour) {
    const minutesLeft = Math.ceil(remainingMs / 60000); // 1 to 60
    const messageIndex = 60 - minutesLeft; // 0 to 59
    const message = config.finalHourMessages?.[messageIndex] || "I can't wait anymore!";
    
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-transparent text-white overflow-hidden text-center px-6">
        <SVGPets />
        <Balloons count={10} className="z-[-1]" />
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none font-black mb-6 text-gradient">
            {minutesLeft} {minutesLeft === 1 ? 'minute' : 'minutes'}
          </h1>
          <p className="text-punch mb-8 text-sm tracking-[0.3em] uppercase">
            almost there
          </p>
          <div className="glass p-8 rounded-3xl">
            <p className="font-hand text-2xl sm:text-3xl text-white/90 leading-relaxed">
              {message}
            </p>
          </div>
        </div>
      </div>
    );
  }
  const d = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
  const h = Math.floor((remainingMs / (1000 * 60 * 60)) % 24);
  const m = Math.floor((remainingMs / 1000 / 60) % 60);
  const s = Math.floor((remainingMs / 1000) % 60);

  const handleBypass = () => {
    const pwd = prompt("Enter bypass key:");
    if (pwd === config.gate.bypassKey) {
      setBypassed(true);
    } else if (pwd !== null) {
      alert("Incorrect key.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-transparent text-white overflow-hidden">
      {/* SVGPets running around */}
      <SVGPets />

      {/* Interactive Balloons */}
      <Balloons count={10} className="z-[-1]" />

      {/* Invisible Bypass Button in Top Right */}
      <button 
        onClick={handleBypass}
        className="absolute top-0 right-0 h-24 w-24 opacity-0 cursor-default"
        aria-label="Secret Bypass"
      />

      <div className="relative z-10 text-center px-6">
        <p className="text-punch mb-6 text-sm tracking-[0.3em] uppercase">
          no peeking
        </p>
        <h1 className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-none font-black mb-12">
          Unlocks in
        </h1>
        
        <div className="flex justify-center gap-3 sm:gap-6 text-center font-display">
          <TimeBlock value={d} label="Days" />
          <span className="text-2xl sm:text-4xl text-white/20 pt-2 sm:pt-4">:</span>
          <TimeBlock value={h} label="Hours" />
          <span className="text-2xl sm:text-4xl text-white/20 pt-2 sm:pt-4">:</span>
          <TimeBlock value={m} label="Mins" />
          <span className="text-2xl sm:text-4xl text-white/20 pt-2 sm:pt-4">:</span>
          <TimeBlock value={s} label="Secs" />
        </div>
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center w-16 sm:w-24">
      <span className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-gradient leading-none">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mt-3 sm:mt-4">
        {label}
      </span>
    </div>
  );
}
