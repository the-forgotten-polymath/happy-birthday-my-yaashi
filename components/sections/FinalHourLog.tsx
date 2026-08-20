"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import { config } from "@/lib/config";

export default function FinalHourLog() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // We only want to show the final messages when they are available
  if (!config.finalHourMessages || config.finalHourMessages.length === 0) return null;

  return (
    <section className="relative z-10 py-24 sm:py-32 px-5 overflow-hidden">
      <div className="mx-auto max-w-3xl" ref={containerRef}>
        <Reveal direction="up" className="text-center mb-10">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white/90 mb-4">
            The Final Hour
          </h2>
          <p className="font-hand text-xl text-white/60 max-w-2xl mx-auto mb-8">
            Those 60 minutes before midnight were the longest of my life. You might have already seen these, but here is the permanent log of my thoughts while waiting for your birthday.
          </p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white/5 px-8 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition-all hover:bg-white/10 hover:ring-white/40"
          >
            <span>{isExpanded ? "Hide Messages" : "Read The Countdown Log"}</span>
            <motion.svg
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="h-4 w-4 opacity-70 group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </Reveal>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-6 sm:space-y-8 pt-8">
                {config.finalHourMessages.map((message, i) => {
                  // Handle both actual newlines and literal '\n' strings
                  const parts = message.includes("\\n") ? message.split("\\n") : message.split("\n");
                  const heading = parts.length > 1 ? parts[0] : `* ${60 - i} minutes to goo`;
                  const body = parts.length > 1 ? parts.slice(1).join(" ") : message;
                  
                  return (
                    <Reveal key={i} direction="up" delay={(i % 10) * 0.05} amount={0.3}>
                      <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
                        <h3 className="font-hand text-amber-300 text-lg sm:text-xl mb-3">
                          {heading}
                        </h3>
                        <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                          {body}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
