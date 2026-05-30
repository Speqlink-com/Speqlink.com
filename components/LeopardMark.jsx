"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * LeopardMark — Wireframe leopard traced from the Speqlink favicon.
 * Side-profile leopard, head top-right, body left, neck/tail bottom.
 * Colors from favicon: primary #1582f8, mid #0654ec, deep #022289,
 *                      cyan #8cd9ec, lightCyan #b1ebf8, dark #171819
 */

const C = {
  primary:   "#1582f8",
  mid:       "#0654ec",
  deep:      "#022289",
  cyan:      "#8cd9ec",
  lightCyan: "#b1ebf8",
  dark:      "#171819",
  glow:      "#25a2fa",
};

const glow  = (c) => `drop-shadow(0 0 4px ${c}) drop-shadow(0 0 10px ${c})`;
const glow2 = (c) => `drop-shadow(0 0 2px ${c})`;

// Animate a path drawing itself in
const Trace = ({ d, color, width = 1.5, delay = 0, duration = 1.8, dash, opacity = 1, style = {} }) => (
  <motion.path
    d={d}
    stroke={color}
    strokeWidth={width}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray={dash}
    opacity={opacity}
    style={style}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity }}
    transition={{ duration, delay, ease: "easeInOut" }}
  />
);

// Animate a circle node popping in
const Node = ({ cx, cy, r = 2.5, color, delay = 0 }) => (
  <motion.circle
    cx={cx} cy={cy} r={r}
    fill={color}
    style={{ filter: glow(color) }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.4, type: "spring", stiffness: 200 }}
  />
);

export default function LeopardMark({ size = 200 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ─── OUTER SILHOUETTE ─────────────────────────────────────
          Traced from actual favicon outline data.
          Left edge goes: top of head → ear → forehead → face →
          chest → front legs → belly → back legs → tail tip.
          Right edge closes the shape.
      ──────────────────────────────────────────────────────────── */}

      {/* Main body outline — right side (back/rump/tail) */}
      <Trace
        d="M70,0 C80,2 90,6 100,12 C115,18 130,22 145,28
           C155,33 162,40 168,50 C174,58 180,68 184,78
           C187,86 188,94 190,104 C193,112 198,118 200,126
           C198,132 192,136 186,138 C180,140 176,144 180,150
           C180,154 178,158 124,158 C122,162 120,166 118,170
           C115,175 112,180 110,185 C107,190 104,195 98,200"
        color={C.primary}
        width={1.8}
        delay={0}
        duration={2.5}
        style={{ filter: glow(C.primary) }}
      />

      {/* Main body outline — left side (face/chest/belly/legs) */}
      <Trace
        d="M70,0 C68,4 68,8 68,12 C68,18 70,24 72,28
           C60,32 46,36 42,42 C40,46 82,48 16,52
           C11,56 10,60 46,64 C36,68 26,72 26,78
           C78,80 70,84 68,88 C62,92 42,96 20,100
           C5,104 1,108 0,112 C62,116 42,120 24,124
           C20,128 20,132 76,136 C62,140 50,144 48,150
           C48,154 74,158 74,162 C74,168 74,174 74,180
           C74,186 74,192 98,200"
        color={C.primary}
        width={1.8}
        delay={0.3}
        duration={2.5}
        style={{ filter: glow(C.primary) }}
      />

      {/* ─── HEAD DETAIL ─────────────────────────────────────────── */}

      {/* Skull dome */}
      <Trace
        d="M70,0 C72,2 80,4 90,8 C100,12 115,16 130,20
           C142,24 150,28 156,34 C162,40 166,46 168,52"
        color={C.cyan}
        width={1.4}
        delay={0.5}
        duration={1.5}
        style={{ filter: glow2(C.cyan) }}
      />

      {/* Ear — pointed triangle top-left of head */}
      <Trace
        d="M70,0 C66,4 64,10 68,16 C70,20 72,22 74,20 C76,18 76,12 74,8 C72,4 70,2 70,0"
        color={C.cyan}
        width={1.3}
        delay={0.2}
        duration={1.0}
        style={{ filter: glow2(C.cyan) }}
      />

      {/* Brow / forehead ridge */}
      <Trace
        d="M74,20 C82,22 92,24 104,26 C116,28 128,30 140,34"
        color={C.mid}
        width={1.2}
        delay={0.8}
        duration={1.0}
      />

      {/* Eye socket */}
      <motion.ellipse
        cx="82" cy="44" rx="10" ry="7"
        stroke={C.cyan} strokeWidth="1.4" fill="none"
        style={{ filter: glow(C.cyan) }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8, ease: "easeInOut" }}
      />
      {/* Eye iris */}
      <motion.ellipse
        cx="82" cy="44" rx="5" ry="4"
        stroke={C.lightCyan} strokeWidth="1.1" fill="none"
        style={{ filter: glow(C.lightCyan) }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeInOut" }}
      />
      {/* Eye pupil */}
      <Node cx={82} cy={44} r={2} color={C.lightCyan} delay={1.5} />

      {/* Eye glow pulse */}
      <motion.ellipse
        cx="82" cy="44" rx="10" ry="7"
        stroke="none" fill={C.cyan} fillOpacity={0.08}
        animate={{ fillOpacity: [0.08, 0.22, 0.08] }}
        transition={{ delay: 2.5, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Nose */}
      <Trace
        d="M110,58 C114,54 120,54 124,58 C120,64 114,64 110,58 Z"
        color={C.cyan}
        width={1.3}
        delay={1.2}
        duration={0.7}
        style={{ filter: glow2(C.cyan) }}
      />

      {/* Muzzle */}
      <Trace
        d="M100,60 C104,68 108,72 116,72 C124,72 130,68 134,62"
        color={C.mid}
        width={1.1}
        delay={1.3}
        duration={0.8}
      />

      {/* Mouth line */}
      <Trace
        d="M116,72 L116,78"
        color={C.mid}
        width={1.0}
        delay={1.5}
        duration={0.4}
      />

      {/* Whiskers left */}
      <Trace d="M100,62 L68,56" color={C.primary} width={0.9} delay={1.6} duration={0.5} opacity={0.7} />
      <Trace d="M100,66 L66,66" color={C.primary} width={0.9} delay={1.7} duration={0.5} opacity={0.7} />
      <Trace d="M100,70 L68,76" color={C.primary} width={0.9} delay={1.8} duration={0.5} opacity={0.7} />

      {/* Whiskers right */}
      <Trace d="M134,62 L162,56" color={C.primary} width={0.9} delay={1.6} duration={0.5} opacity={0.7} />
      <Trace d="M134,66 L164,66" color={C.primary} width={0.9} delay={1.7} duration={0.5} opacity={0.7} />
      <Trace d="M134,70 L162,76" color={C.primary} width={0.9} delay={1.8} duration={0.5} opacity={0.7} />

      {/* ─── BODY STRUCTURE LINES ────────────────────────────────── */}

      {/* Spine line */}
      <Trace
        d="M140,34 C150,50 160,70 170,90 C178,108 186,124 186,138"
        color={C.deep}
        width={1.0}
        delay={1.0}
        duration={1.5}
        dash="4 3"
        opacity={0.6}
      />

      {/* Chest / shoulder */}
      <Trace
        d="M42,42 C50,60 56,80 54,100 C52,116 46,128 48,148"
        color={C.mid}
        width={1.1}
        delay={1.2}
        duration={1.4}
        opacity={0.7}
      />

      {/* Belly line */}
      <Trace
        d="M20,100 C40,108 60,112 80,114 C100,116 120,116 140,114"
        color={C.mid}
        width={1.1}
        delay={1.4}
        duration={1.2}
        opacity={0.7}
      />

      {/* Front leg */}
      <Trace
        d="M48,148 C50,158 52,168 52,178 C52,186 54,192 58,196"
        color={C.primary}
        width={1.3}
        delay={1.6}
        duration={1.0}
        style={{ filter: glow2(C.primary) }}
      />
      {/* Front leg second */}
      <Trace
        d="M74,158 C74,168 74,178 74,188 C74,194 76,198 80,200"
        color={C.primary}
        width={1.3}
        delay={1.7}
        duration={1.0}
        style={{ filter: glow2(C.primary) }}
      />

      {/* Back leg */}
      <Trace
        d="M180,148 C182,156 182,164 180,172 C178,180 176,188 174,196"
        color={C.primary}
        width={1.3}
        delay={1.8}
        duration={1.0}
        style={{ filter: glow2(C.primary) }}
      />

      {/* Tail */}
      <Trace
        d="M186,138 C192,144 198,150 200,158 C200,166 196,174 190,180
           C184,186 178,190 172,196"
        color={C.cyan}
        width={1.2}
        delay={2.0}
        duration={1.2}
        style={{ filter: glow2(C.cyan) }}
      />

      {/* ─── LEOPARD SPOTS (dark clusters from favicon) ──────────── */}
      {/* Traced from actual dark pixel clusters in the favicon */}
      {[
        // Head/neck spots
        { cx: 62, cy: 32, rx: 5, ry: 3 },
        { cx: 50, cy: 38, rx: 6, ry: 3 },
        { cx: 68, cy: 40, rx: 4, ry: 3 },
        { cx: 44, cy: 46, rx: 4, ry: 3 },
        // Body spots upper
        { cx: 76, cy: 56, rx: 5, ry: 3 },
        { cx: 56, cy: 60, rx: 7, ry: 4 },
        { cx: 76, cy: 62, rx: 4, ry: 3 },
        { cx: 56, cy: 70, rx: 7, ry: 4 },
        // Mid body
        { cx: 84, cy: 80, rx: 6, ry: 4 },
        { cx: 76, cy: 86, rx: 5, ry: 3 },
        { cx: 68, cy: 92, rx: 5, ry: 3 },
        { cx: 76, cy: 102, rx: 5, ry: 3 },
        // Right body (back)
        { cx: 152, cy: 70, rx: 5, ry: 3 },
        { cx: 156, cy: 88, rx: 5, ry: 3 },
        { cx: 144, cy: 94, rx: 6, ry: 4 },
        { cx: 132, cy: 100, rx: 6, ry: 4 },
        { cx: 150, cy: 108, rx: 6, ry: 4 },
        { cx: 132, cy: 118, rx: 6, ry: 4 },
        { cx: 150, cy: 118, rx: 5, ry: 3 },
        { cx: 116, cy: 126, rx: 6, ry: 4 },
        { cx: 150, cy: 126, rx: 5, ry: 3 },
        { cx: 108, cy: 133, rx: 5, ry: 3 },
        { cx: 164, cy: 133, rx: 6, ry: 4 },
        { cx: 100, cy: 142, rx: 5, ry: 3 },
        { cx: 160, cy: 148, rx: 5, ry: 3 },
        { cx: 170, cy: 154, rx: 5, ry: 3 },
      ].map((s, i) => (
        <motion.ellipse
          key={`spot-${i}`}
          cx={s.cx} cy={s.cy} rx={s.rx} ry={s.ry}
          stroke={C.dark}
          strokeWidth="1.2"
          fill="none"
          opacity={0.85}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ delay: 1.8 + i * 0.04, duration: 0.4, ease: "easeOut" }}
        />
      ))}

      {/* ─── CIRCUIT NODES at key joints ─────────────────────────── */}
      {[
        { cx: 70,  cy: 0,   d: 0.0 },  // head top
        { cx: 82,  cy: 44,  d: 1.0 },  // eye
        { cx: 116, cy: 58,  d: 1.2 },  // nose
        { cx: 42,  cy: 42,  d: 1.4 },  // shoulder
        { cx: 20,  cy: 100, d: 1.6 },  // chest
        { cx: 48,  cy: 148, d: 1.8 },  // front knee
        { cx: 74,  cy: 158, d: 1.9 },  // front paw
        { cx: 186, cy: 138, d: 2.0 },  // rump
        { cx: 180, cy: 148, d: 2.1 },  // back knee
        { cx: 98,  cy: 200, d: 2.2 },  // tail tip
      ].map((n, i) => (
        <Node key={`node-${i}`} cx={n.cx} cy={n.cy} r={2.2} color={C.glow} delay={n.d} />
      ))}

      {/* ─── SCANNING LINE ───────────────────────────────────────── */}
      <motion.line
        x1="0" y1="0" x2="200" y2="0"
        stroke={C.lightCyan}
        strokeWidth="0.8"
        opacity={0}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, 200, 0], opacity: [0, 0.4, 0.4, 0] }}
        transition={{ delay: 3.0, duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ filter: glow(C.lightCyan) }}
      />
    </svg>
  );
}
