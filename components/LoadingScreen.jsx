"use client";
import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Sparkles } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import TypingEffect from "./TypingEffect";
import Image from "next/image";

// ─── 3D SCENE COMPONENTS ──────────────────────────────────────────────────────

const BrightStars = () => (
  <>
    <Stars radius={100} depth={50} count={5000} factor={6} fade speed={0.5} />
    <Stars radius={80}  depth={30} count={1000} factor={8} fade speed={0.3} />
    <Sparkles count={200} scale={50} size={4} speed={0.4} opacity={1} color="#ffffff" />
  </>
);

const SpaceObject = ({ position, scale }) => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
    }
  });
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </mesh>
  );
};

// ─── SPEQLINK WORDMARK ────────────────────────────────────────────────────────
// Each letter animates in individually with a stagger
const letters = "SPEQLINK".split("");

const WordMark = () => (
  <div className="flex items-center gap-[2px]">
    {letters.map((letter, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-black tracking-[0.18em] text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(135deg, #b1ebf8 0%, #1582f8 40%, #0654ec 70%, #022289 100%)",
          textShadow: "0 0 20px rgba(21,130,248,0.6)",
        }}
      >
        {letter}
      </motion.span>
    ))}

    {/* Animated underline */}
    <motion.div
      className="absolute -bottom-1 left-0 h-[2px] rounded-full"
      style={{ background: "linear-gradient(90deg, #022289, #1582f8, #8cd9ec, #1582f8, #022289)" }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
    />
  </div>
);

// ─── MAIN LOADING SCREEN ──────────────────────────────────────────────────────

const LoadingScreen = ({ onComplete }) => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [progress, setProgress]             = useState(0);
  const [rotationSpeed, setRotationSpeed]   = useState(10);

  useEffect(() => {
    if (typingComplete) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete?.(), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 60);
      return () => clearInterval(interval);
    }
  }, [typingComplete, onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => setRotationSpeed(1.2), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      {/* ── 3D starfield ── */}
      <Canvas style={{ position: "absolute", inset: 0 }}>
        <BrightStars />
        <ambientLight intensity={0.6} />
        <pointLight position={[10,  10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10,-10, 10]} intensity={0.8} color="#a5b4fc" />
        <pointLight position={[0,    0, 15]} intensity={0.5} color="#c7d2fe" />
        <SpaceObject position={[ 4,  2,  0]} scale={[0.4, 0.4, 0.4]} />
        <SpaceObject position={[-3, -2,  3]} scale={[0.3, 0.3, 0.3]} />
        <SpaceObject position={[ 2,  3, -2]} scale={[0.25,0.25,0.25]} />
        <SpaceObject position={[-5,  1,  1]} scale={[0.2, 0.2, 0.2]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={rotationSpeed} enablePan={false} />
      </Canvas>

      {/* ── subtle radial vignette so center pops ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)" }}
      />

      {/* ── UI overlay ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center z-10 px-4">

        {/* Favicon + wordmark block */}
        <motion.div
          className="flex flex-col items-center gap-4"
          animate={{ scale: [1, 1.06, 1], y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          {/* Favicon with layered glow rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer pulse ring */}
            <motion.div
              className="absolute rounded-full border border-[#1582f8]/30"
              style={{ width: 180, height: 180 }}
              animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            {/* Inner glow ring */}
            <motion.div
              className="absolute rounded-full border border-[#8cd9ec]/20"
              style={{ width: 155, height: 155 }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeInOut" }}
            />
            {/* Soft glow blob */}
            <div className="absolute w-36 h-36 bg-[#1582f8]/15 rounded-full blur-2xl" />

            {/* Favicon image */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <Image
                src="/favicon.png"
                alt="Speqlink"
                width={130}
                height={130}
                className="relative z-10 drop-shadow-[0_0_28px_rgba(21,130,248,0.9)]"
                priority
              />
            </motion.div>
          </div>

          {/* SPEQLINK wordmark */}
          <div className="relative">
            <WordMark />
          </div>

          {/* Tagline — tiny, spaced */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.35em] text-[#8cd9ec]/70 font-medium"
          >
            Architecturing Intelligent Solutions
          </motion.p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
          className="w-48 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #1582f8, transparent)" }}
        />

        {/* Typing text */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-base font-medium text-white/80 tracking-wide drop-shadow-[0_0_10px_rgba(96,165,250,0.4)] min-h-[28px]"
        >
          <TypingEffect
            texts={["Initializing systems..."]}
            typingDelay={55}
            loop={false}
            onTypingComplete={() => setTypingComplete(true)}
          />
        </motion.div>

        {/* Progress bar */}
        <AnimatePresence>
          {typingComplete && (
            <motion.div
              className="w-72 space-y-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Bar track */}
              <div className="relative h-[3px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #022289, #1582f8, #8cd9ec)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25 }}
                />
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                />
              </div>

              {/* Percentage */}
              <div className="flex justify-between items-center px-0.5">
                <span className="text-[10px] uppercase tracking-widest text-[#8cd9ec]/50">Loading</span>
                <span className="text-[11px] font-bold text-[#8cd9ec] tabular-nums">
                  {progress}%
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style jsx>{`
        canvas {
          filter: brightness(1.2) contrast(1.1);
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
