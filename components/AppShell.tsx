"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { track } from "@vercel/analytics/react";
import Intro from "@/components/sections/Intro";

/**
 * Controls the cinematic intro → page reveal flow.
 * While the intro is playing, the page content is hidden with overflow hidden
 * to prevent background scrolling. Once the intro completes, the page fades in.
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  const handleComplete = useCallback(() => {
    setReady(true);
    window.dispatchEvent(new CustomEvent("PLAY_AUDIO"));
    track("site_entered");
  }, []);

  // Track how long the user stays on the site
  useEffect(() => {
    if (!ready) return;
    
    let minutes = 0;
    const interval = setInterval(() => {
      minutes += 1;
      // Send a custom event to Vercel Analytics every minute they stay!
      track("time_spent", { minutes });
    }, 60000); // 60,000 ms = 1 minute

    return () => clearInterval(interval);
  }, [ready]);

  return (
    <>
      <AnimatePresence>
        {!ready && <Intro key="intro" onComplete={handleComplete} />}
      </AnimatePresence>
      <motion.div
        initial={false}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: ready ? "auto" : "none" }}
        className={!ready ? "fixed inset-0 overflow-hidden invisible" : ""}
      >
        {children}
      </motion.div>
    </>
  );
}
