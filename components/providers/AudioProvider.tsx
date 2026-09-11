"use client";

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { config } from "@/lib/config";

interface AudioContextState {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  analyser: AnalyserNode | null;
  playing: boolean;
  togglePlay: () => void;
}

const AudioContext = createContext<AudioContextState | null>(null);

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}

export default function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  // Initialize Web Audio API on first interaction
  const initAudioContext = () => {
    if (!audioCtxRef.current && audioRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const newAnalyser = ctx.createAnalyser();
      newAnalyser.fftSize = 256; // Good size for frequency bars / beat detection
      newAnalyser.smoothingTimeConstant = 0.8;

      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(newAnalyser);
      newAnalyser.connect(ctx.destination);

      audioCtxRef.current = ctx;
      sourceRef.current = source;
      setAnalyser(newAnalyser);
    }
  };

  const playAudio = async () => {
    const el = audioRef.current;
    if (!el) return;

    initAudioContext();

    if (audioCtxRef.current?.state === "suspended") {
      await audioCtxRef.current.resume();
    }

    try {
      el.muted = false;
      el.volume = 1.0;
      await el.play();
      setPlaying(true);
    } catch (err) {
      console.error("Audio playback failed:", err);
      setPlaying(false);
    }
  };

  const togglePlay = async () => {
    const el = audioRef.current;
    if (!el) return;

    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      await playAudio();
    }
  };

  // Unlock audio context on the very first user click/tap anywhere
  useEffect(() => {
    const handleFirstInteraction = () => {
      initAudioContext();
      if (audioCtxRef.current?.state === "suspended") {
        audioCtxRef.current.resume().catch(() => {});
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  // Listen for PLAY_AUDIO and UNLOCK_AUDIO custom events from Intro / AppShell
  useEffect(() => {
    const handlePlayAudio = () => {
      playAudio();
    };
    const handleUnlockAudio = async () => {
      const el = audioRef.current;
      initAudioContext();
      if (audioCtxRef.current?.state === "suspended") {
        audioCtxRef.current.resume().catch(() => {});
      }
      if (el) {
        try {
          // Pre-activate audio element synchronously on tap so browser permits playback after intro
          const prevVol = el.volume;
          el.volume = 0;
          await el.play();
          el.pause();
          el.currentTime = 0;
          el.volume = prevVol || 1.0;
        } catch {
          // Ignore if already unlocked
        }
      }
    };

    window.addEventListener("PLAY_AUDIO", handlePlayAudio);
    window.addEventListener("UNLOCK_AUDIO", handleUnlockAudio);

    return () => {
      window.removeEventListener("PLAY_AUDIO", handlePlayAudio);
      window.removeEventListener("UNLOCK_AUDIO", handleUnlockAudio);
    };
  }, []);

  // Sync state if audio ends or loops
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    
    const handleEnded = () => setPlaying(false);
    const handlePause = () => setPlaying(false);
    const handlePlay = () => setPlaying(true);
    const handleTimeUpdate = () => {
      if (el.currentTime >= 54) {
        el.currentTime = 0;
      }
    };
    
    el.addEventListener("ended", handleEnded);
    el.addEventListener("pause", handlePause);
    el.addEventListener("play", handlePlay);
    el.addEventListener("timeupdate", handleTimeUpdate);
    
    return () => {
      el.removeEventListener("ended", handleEnded);
      el.removeEventListener("pause", handlePause);
      el.removeEventListener("play", handlePlay);
      el.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <AudioContext.Provider value={{ audioRef, analyser, playing, togglePlay }}>
      {config.musicSrc && (
        <audio 
          ref={audioRef} 
          src={config.musicSrc} 
          loop 
          preload="auto" 
        />
      )}
      {children}
    </AudioContext.Provider>
  );
}
