import React from 'react';
import { motion, useTransform, useReducedMotion, MotionValue, transform } from 'motion/react';
import { Sparkles, ArrowUpRight, Github, Cpu, Database, Layers, Server, Layout, Zap, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import PinSection from './motion/PinSection';
import MagneticButton from './MagneticButton';

/**
 * Pinned scroll-driven flagship showcase for JobSpark AI.
 * 320vh pinned scroll driving a 5-phase camera-like product story:
 * Phase 1: Product Arrival (0.00–0.20)
 * Phase 2: 98.7% Flagship Moment (0.18–0.40)
 * Phase 3: Inference Pipeline (0.38–0.66)
 * Phase 4: Engineering Proof (0.64–0.84)
 * Phase 5: Product Close & Action (0.82–1.00)
 */
export default function ProjectShowcase() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <FallbackStatic />;
  }

  return (
    <PinSection heightInVh={220} className="bg-background">
      {(scrollYProgress: MotionValue<number>) => (
        <ShowcaseContent progress={scrollYProgress} />
      )}
    </PinSection>
  );
}

function ShowcaseContent({ progress }: { progress: MotionValue<number> }) {
  // ═══ HUD PROGRESS & PHASE TRACKER ═══
  const hudProgressWidth = useTransform(progress, [0, 1], ['0%', '100%']);
  const phaseLabel = useTransform(progress, (v) => {
    if (v < 0.20) return 'ACT 01 // PRODUCT ARRIVAL';
    if (v < 0.40) return 'ACT 02 // 98.7% FLAGSHIP MOMENT';
    if (v < 0.65) return 'ACT 03 // ML INFERENCE PIPELINE';
    if (v < 0.83) return 'ACT 04 // ENGINEERING PROOF';
    return 'ACT 05 // SPECIFICATION & DEPLOYMENT';
  });

  // Helper function transform to prevent Motion v12 from offloading to buggy document-level ScrollTimeline
  const tf = <T extends string | number>(rangeIn: number[], rangeOut: T[]) =>
    (v: number): T => transform(v, rangeIn, rangeOut);

  // ═══ PHASE 1: PRODUCT ARRIVAL (0.00–0.22) — Visible on initial entry ═══
  const p1Opacity = useTransform(progress, tf([0.0, 0.16, 0.22], [1, 1, 0]));
  const p1Scale = useTransform(progress, tf([0.0, 0.16, 0.22], [1, 1, 0.94]));
  const p1Y = useTransform(progress, tf([0.0, 0.16, 0.22], [0, 0, -35]));
  const p1Pointer = useTransform(p1Opacity, (v) => (v > 0.4 ? 'auto' : 'none'));

  // ═══ PHASE 2: 98.7% FLAGSHIP MOMENT (0.18–0.42) — 3D Camera Push-in ═══
  const p2Opacity = useTransform(progress, tf([0.18, 0.24, 0.36, 0.42], [0, 1, 1, 0]));
  const p2Scale = useTransform(progress, tf([0.18, 0.26, 0.34, 0.42], [0.82, 1.15, 1.15, 0.85]));
  const p2Y = useTransform(progress, tf([0.18, 0.24, 0.36, 0.42], [35, 0, 0, -35]));
  const p2Glow = useTransform(progress, tf([0.20, 0.30, 0.40], [0.15, 0.85, 0.15]));
  const p2Pointer = useTransform(p2Opacity, (v) => (v > 0.4 ? 'auto' : 'none'));

  // Validation badges appear AFTER main metric establishes itself (0.26–0.40)
  const valOpacity = useTransform(progress, tf([0.26, 0.30, 0.36, 0.42], [0, 1, 1, 0]));
  const valY = useTransform(progress, tf([0.26, 0.30, 0.36, 0.42], [15, 0, 0, -10]));

  // ═══ PHASE 3: ML INFERENCE PIPELINE (0.38–0.68) — Camera moves along data bus ═══
  const p3Opacity = useTransform(progress, tf([0.38, 0.44, 0.62, 0.68], [0, 1, 1, 0]));
  const p3Y = useTransform(progress, tf([0.38, 0.44, 0.62, 0.68], [35, 0, 0, -35]));
  const p3Scale = useTransform(progress, tf([0.38, 0.44, 0.62, 0.68], [0.94, 1, 1, 0.94]));
  const p3Pointer = useTransform(p3Opacity, (v) => (v > 0.4 ? 'auto' : 'none'));

  // 5 Pipeline Stages Activate Sequentially
  const s0o = useTransform(progress, tf([0.39, 0.42, 0.46, 0.49], [0.35, 1, 1, 0.35]));
  const s0s = useTransform(progress, tf([0.39, 0.42, 0.46, 0.49], [0.96, 1.05, 1.05, 0.96]));

  const s1o = useTransform(progress, tf([0.45, 0.48, 0.52, 0.55], [0.35, 1, 1, 0.35]));
  const s1s = useTransform(progress, tf([0.45, 0.48, 0.52, 0.55], [0.96, 1.05, 1.05, 0.96]));

  const s2o = useTransform(progress, tf([0.51, 0.54, 0.58, 0.61], [0.35, 1, 1, 0.35]));
  const s2s = useTransform(progress, tf([0.51, 0.54, 0.58, 0.61], [0.96, 1.05, 1.05, 0.96]));

  const s3o = useTransform(progress, tf([0.57, 0.60, 0.64, 0.67], [0.35, 1, 1, 0.35]));
  const s3s = useTransform(progress, tf([0.57, 0.60, 0.64, 0.67], [0.96, 1.05, 1.05, 0.96]));

  const s4o = useTransform(progress, tf([0.63, 0.66, 0.68, 0.70], [0.35, 1, 1, 0.35]));
  const s4s = useTransform(progress, tf([0.63, 0.66, 0.68, 0.70], [0.96, 1.05, 1.05, 0.96]));

  // Traveling data packet pulse
  const pulseLeft = useTransform(progress, tf([0.40, 0.67], ['0%', '100%']));

  // ═══ PHASE 4: ENGINEERING PROOF (0.64–0.85) — Progressive Telemetry Evidence ═══
  const p4Opacity = useTransform(progress, tf([0.64, 0.70, 0.81, 0.85], [0, 1, 1, 0]));
  const p4Y = useTransform(progress, tf([0.64, 0.70, 0.81, 0.85], [35, 0, 0, -30]));
  const p4Scale = useTransform(progress, tf([0.64, 0.70, 0.81, 0.85], [0.94, 1, 1, 0.95]));
  const p4Pointer = useTransform(p4Opacity, (v) => (v > 0.4 ? 'auto' : 'none'));

  // Progressive Telemetry reveals
  const proof1o = useTransform(progress, tf([0.66, 0.70], [0, 1]));
  const proof2o = useTransform(progress, tf([0.70, 0.74], [0, 1]));
  const proof3o = useTransform(progress, tf([0.74, 0.78], [0, 1]));
  const proof4o = useTransform(progress, tf([0.78, 0.82], [0, 1]));

  // ═══ PHASE 5: PRODUCT CLOSE (0.82–1.00) — JobSpark Returns with CTAs ═══
  const p5Opacity = useTransform(progress, tf([0.82, 0.88, 1.0], [0, 1, 1]));
  const p5Y = useTransform(progress, tf([0.82, 0.88, 1.0], [30, 0, 0]));
  const p5Scale = useTransform(progress, tf([0.82, 0.88, 1.0], [0.95, 1, 1]));
  const p5Pointer = useTransform(p5Opacity, (v) => (v > 0.4 ? 'auto' : 'none'));

  const pipelineStages = [
    {
      num: '01',
      title: 'INPUT STREAM',
      spec: '17,880 Postings',
      desc: 'Raw employment listings & descriptions ingested',
      icon: <Database className="w-5 h-5" />,
      opacity: s0o,
      scale: s0s,
    },
    {
      num: '02',
      title: 'PREPROCESS',
      spec: 'TF-IDF + SMOTE',
      desc: 'Synthetic minority oversampling balancing 50:50 ratio',
      icon: <Layers className="w-5 h-5" />,
      opacity: s1o,
      scale: s1s,
    },
    {
      num: '03',
      title: 'ML MODEL',
      spec: 'SVM Dual Hyperplane',
      desc: 'Maximum-margin classifier eliminating false negatives',
      icon: <Cpu className="w-5 h-5" />,
      opacity: s2o,
      scale: s2s,
    },
    {
      num: '04',
      title: 'REST API',
      spec: 'FastAPI Async ASGI',
      desc: 'Lightweight microservice serving <12ms responses',
      icon: <Server className="w-5 h-5" />,
      opacity: s3o,
      scale: s3s,
    },
    {
      num: '05',
      title: 'RESULT',
      spec: '98.7% Verified',
      desc: 'Real-time threat classification & confidence score',
      icon: <Layout className="w-5 h-5" />,
      opacity: s4o,
      scale: s4s,
    },
  ];

  const handleSkipCinematic = () => {
    const el = document.getElementById('jobspark');
    if (el) {
      const topPos = el.getBoundingClientRect().top + window.scrollY;
      const target = topPos + (el.offsetHeight - window.innerHeight) * 0.95;
      window.scrollTo({ top: target, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* ═══ MASTER CINEMATIC PRODUCT CHASSIS ═══ */}
      <div className="relative rounded-3xl border border-primary/40 bg-surface/90 backdrop-blur-2xl p-4 sm:p-6 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.75)] overflow-hidden">
        {/* Chassis Top HUD & Story Tracker */}
        <div className="border-b border-border/80 pb-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-micro font-mono">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <motion.span className="text-primary font-bold tracking-widest uppercase">
                {phaseLabel}
              </motion.span>
            </div>
            <div className="flex items-center gap-3 text-text-tertiary">
              <button
                type="button"
                onClick={handleSkipCinematic}
                className="text-primary hover:text-primary-hover underline underline-offset-4 decoration-primary/40 hover:decoration-primary font-mono text-[11px] font-bold transition-colors cursor-pointer rounded px-2.5 py-2 min-h-[44px] inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                title="Skip to final specification and deployment links"
              >
                Skip cinematic intro ↓
              </button>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-primary font-bold">JOBSPARK AI</span>
            </div>
          </div>
          {/* Active Story Progress Track */}
          <div className="w-full h-1 bg-border/60 rounded-full mt-3 overflow-hidden relative">
            <motion.div
              style={{ width: hudProgressWidth }}
              className="h-full bg-gradient-to-r from-primary/60 via-primary to-secondary rounded-full shadow-[0_0_10px_#00D9C0]"
            />
          </div>
        </div>

        {/* Ambient Stage Lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[160px]" />
          <div className="absolute -bottom-32 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D9C008_1px,transparent_1px),linear-gradient(to_bottom,#00D9C008_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        {/* ═══ UNIFIED SINGLE-STAGE FOCAL ARENA ═══ */}
        <div className="relative min-h-[480px] md:min-h-[520px] flex items-center justify-center">

          {/* ─────────────────────────────────────────────────────────────
              PHASE 1: PRODUCT ARRIVAL (0.00 – 0.22)
              Arrives seamlessly from Hero with JobSpark central visual present
             ───────────────────────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: p1Opacity, scale: p1Scale, y: p1Y, pointerEvents: p1Pointer }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="inline-flex items-center gap-2 text-micro font-mono text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 font-bold tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" /> FLAGSHIP 01 // PRODUCTION ML
            </div>

            <h3 className="text-5xl sm:text-6xl md:text-7xl font-headline font-black text-text-primary tracking-tight mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              JobSpark AI
            </h3>

            <p className="text-lg md:text-xl text-text-secondary font-medium max-w-xl mx-auto mb-8">
              Autonomous Fraud Detection Engine for Employment Listings
            </p>

            {/* Central AI Inference Core Visual Anchor */}
            <div className="relative p-6 rounded-2xl bg-surface-raised/80 border border-primary/40 backdrop-blur-xl max-w-md w-full shadow-2xl">
              <div className="flex items-center justify-between text-micro font-mono text-primary mb-3 pb-2 border-b border-border/80">
                <span className="flex items-center gap-1.5 font-bold">
                  <Zap className="w-3.5 h-3.5" /> AI INFERENCE CORE
                </span>
                <span className="text-text-tertiary">STANDBY // READY</span>
              </div>
              <div className="text-sm font-mono text-text-secondary">
                SVM Hyperplane · SMOTE Rebalancing · TF-IDF N-Grams
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-text-tertiary">
                <span>DATASET: 17,880 POSTINGS</span>
                <span className="text-primary font-bold">SCROLL TO INSPECT ↓</span>
              </div>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              PHASE 2: 98.7% FLAGSHIP MOMENT (0.18 – 0.42)
              Camera pushes in toward the 98.7% metric in 3D perspective
             ───────────────────────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: p2Opacity, scale: p2Scale, y: p2Y, pointerEvents: p2Pointer }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="relative [perspective:1000px] w-full max-w-lg">
              {/* Supporting Single Holographic Ring */}
              <div className="absolute -inset-14 pointer-events-none flex items-center justify-center z-0 opacity-35">
                <svg className="w-[130%] h-[130%] animate-[spin_24s_linear_infinite]" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="88" fill="none" stroke="#00D9C0" strokeWidth="0.8" strokeDasharray="6 8" opacity="0.5" />
                </svg>
              </div>

              {/* Calibrated Soft Glow Aura */}
              <motion.div
                style={{ opacity: p2Glow }}
                className="absolute -inset-8 bg-primary/15 rounded-3xl blur-3xl pointer-events-none"
              />

              <div className="relative bg-surface/95 border-2 border-primary/50 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,217,192,0.25)] overflow-hidden">
                <div className="text-micro font-mono text-primary font-bold tracking-widest mb-1 flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 text-primary" /> EMPIRICAL BENCHMARK RESULT
                </div>

                <div className="text-7xl sm:text-8xl md:text-9xl font-black text-primary font-headline tracking-tighter drop-shadow-[0_0_40px_rgba(0,217,192,0.45)] my-2">
                  98.7%
                </div>

                <div className="text-sm md:text-base text-text-primary font-headline font-bold uppercase tracking-widest mb-4">
                  Fraud Detection Accuracy
                </div>

                {/* Validation Evidence fades in smoothly AFTER main metric */}
                <motion.div
                  style={{ opacity: valOpacity, y: valY }}
                  className="grid grid-cols-2 gap-4 pt-4 border-t border-border/80 font-mono text-xs max-w-sm mx-auto"
                >
                  <div className="bg-surface-raised p-2.5 rounded-xl border border-border/80">
                    <div className="text-text-tertiary text-[10px]">F1-SCORE</div>
                    <div className="text-base font-bold text-text-primary">0.978</div>
                  </div>
                  <div className="bg-surface-raised p-2.5 rounded-xl border border-border/80">
                    <div className="text-text-tertiary text-[10px]">PRECISION</div>
                    <div className="text-base font-bold text-text-primary">98.5%</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              PHASE 3: INFERENCE PIPELINE (0.38 – 0.68)
              Data moving through 5 compute blocks, sequentially activated
             ───────────────────────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: p3Opacity, scale: p3Scale, y: p3Y, pointerEvents: p3Pointer }}
            className="absolute inset-0 flex flex-col items-center justify-center w-full px-2"
          >
            <div className="w-full max-w-3xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 text-micro font-mono text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/30 font-bold tracking-widest mb-2">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> COMPUTE DATA BUS // PIPELINE FLOW
                </div>
                <p className="text-2xl md:text-3xl font-headline font-bold text-text-primary">
                  Inference Architecture
                </p>
              </div>

              {/* Pipeline Energy Channel Track */}
              <div className="relative mb-4">
                <div className="h-1 bg-border/80 rounded-full overflow-hidden relative">
                  <motion.div
                    style={{ left: pulseLeft }}
                    className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_#00D9C0]"
                  />
                </div>
              </div>

              {/* 5 Spatially Connected Stages */}
              <div className="space-y-2 sm:space-y-2.5">
                {pipelineStages.map((stage) => (
                  <motion.div
                    key={stage.title}
                    style={{ opacity: stage.opacity, scale: stage.scale }}
                    className="flex items-center justify-between gap-2 sm:gap-4 p-2.5 sm:p-3.5 rounded-2xl bg-surface/90 border border-primary/30 transition-all shadow-lg"
                  >
                    <div className="flex items-center gap-2 sm:gap-3.5 min-w-0">
                      <span className="text-xs font-mono font-bold text-primary/70 w-5 sm:w-6 shrink-0">
                        {stage.num}
                      </span>
                      <div className="p-1.5 sm:p-2 rounded-xl bg-primary/15 text-primary shrink-0">
                        {stage.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold font-headline text-text-primary truncate">
                          {stage.title}
                        </div>
                        <div className="text-xs text-text-secondary hidden sm:block truncate">
                          {stage.desc}
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-block text-[10px] sm:text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg whitespace-nowrap">
                        {stage.spec}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              PHASE 4: ENGINEERING PROOF (0.64 – 0.85)
              Telemetry/proof progressively revealed with scroll
             ───────────────────────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: p4Opacity, scale: p4Scale, y: p4Y, pointerEvents: p4Pointer }}
            className="absolute inset-0 flex flex-col items-center justify-center w-full px-4 text-center"
          >
            <div className="w-full max-w-3xl">
              <div className="inline-flex items-center gap-2 text-micro font-mono text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/30 font-bold tracking-widest mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" /> EMPIRICAL PROOF & MITIGATION
              </div>

              <p className="text-2xl md:text-3xl font-headline font-black text-text-primary mb-2">
                Engineering Evidence & Telemetry
              </p>
              <p className="text-sm text-text-secondary max-w-xl mx-auto mb-8">
                Mitigating severe class imbalance without false positive degradation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 text-left">
                {/* 1. Corpus scale */}
                <motion.div
                  style={{ opacity: proof1o }}
                  className="p-3.5 sm:p-5 rounded-2xl bg-surface-raised/90 border border-border/80 shadow-md"
                >
                  <div className="text-caption text-primary font-mono mb-1 font-bold">
                    CORPUS DATASET SCALE
                  </div>
                  <div className="text-base sm:text-lg font-headline font-bold text-text-primary mb-0.5 sm:mb-1">
                    17,880 Annotated Postings
                  </div>
                  <div className="text-xs text-text-secondary leading-relaxed">
                    Extracted dense unigram and bigram TF-IDF vocabulary across full production dataset.
                  </div>
                </motion.div>

                {/* 2. Severe Class Imbalance */}
                <motion.div
                  style={{ opacity: proof2o }}
                  className="p-3.5 sm:p-5 rounded-2xl bg-surface-raised/90 border border-border/80 shadow-md"
                >
                  <div className="text-caption text-primary font-mono mb-1 font-bold">
                    POSITIVE CLASS SPARSITY
                  </div>
                  <div className="text-base sm:text-lg font-headline font-bold text-text-primary mb-0.5 sm:mb-1">
                    &lt;5% Fraud Class Imbalance
                  </div>
                  <div className="text-xs text-text-secondary leading-relaxed">
                    Overcame critical risk where naive classifiers falsely achieve high accuracy by predicting all negative.
                  </div>
                </motion.div>

                {/* 3. SMOTE Rebalancing */}
                <motion.div
                  style={{ opacity: proof3o }}
                  className="p-3.5 sm:p-5 rounded-2xl bg-surface-raised/90 border border-border/80 shadow-md"
                >
                  <div className="text-caption text-primary font-mono mb-1 font-bold">
                    SMOTE FEATURE REBALANCING
                  </div>
                  <div className="text-base sm:text-lg font-headline font-bold text-text-primary mb-0.5 sm:mb-1">
                    Normalized 5:95 → 50:50
                  </div>
                  <div className="text-xs text-text-secondary leading-relaxed">
                    Synthesized minority fraud vectors in embedding space without row duplication or overfitting.
                  </div>
                </motion.div>

                {/* 4. SVM & FastAPI Latency */}
                <motion.div
                  style={{ opacity: proof4o }}
                  className="p-3.5 sm:p-5 rounded-2xl bg-surface-raised/90 border border-border/80 shadow-md"
                >
                  <div className="text-caption text-primary font-mono mb-1 font-bold">
                    SVM &amp; FASTAPI INFERENCE
                  </div>
                  <div className="text-base sm:text-lg font-headline font-bold text-text-primary mb-0.5 sm:mb-1">
                    &lt;12ms ASGI Serving Latency
                  </div>
                  <div className="text-xs text-text-secondary leading-relaxed">
                    Dual formulation hyperplane evaluated under 12ms per request on lightweight asynchronous API.
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              PHASE 5: PRODUCT CLOSE & ACTION (0.82 – 1.00)
              Hierarchy returns to JobSpark with verified CTAs
             ───────────────────────────────────────────────────────────── */}
          <motion.div
            style={{ opacity: p5Opacity, scale: p5Scale, y: p5Y, pointerEvents: p5Pointer }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="w-full max-w-2xl">
              <div className="inline-flex items-center gap-2 text-micro font-mono text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/30 font-bold tracking-widest mb-4">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> PRODUCTION VERIFIED SPECIFICATION
              </div>

              <h3 className="text-4xl md:text-5xl font-headline font-black text-text-primary tracking-tight mb-3">
                JobSpark AI
              </h3>

              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
                End-to-end production ML pipeline solving fraudulent posting detection under extreme class imbalance with 98.7% empirical accuracy and 98.5% precision.
              </p>

              {/* Technology Stack Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {['Python', 'FastAPI', 'React', 'SVM Classifier', 'Scikit-learn', 'TF-IDF', 'SMOTE'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-semibold px-3 py-1.5 rounded-xl bg-surface-raised border border-border/80 text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Prominent Action CTAs with physical click feedback */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <MagneticButton intensity={30}>
                  <a
                    href="https://fraud-job-detection-ml.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2.5 text-base font-bold px-8 py-4 rounded-full shadow-2xl shadow-primary/30 group active:scale-95 transition-transform"
                  >
                    <span>Launch Live Demo</span>
                    <div className="w-7 h-7 rounded-full bg-background/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRight className="w-4 h-4 text-background" />
                    </div>
                  </a>
                </MagneticButton>

                <MagneticButton intensity={30}>
                  <a
                    href="https://github.com/PRAHULREDD/fraud-job-detection-ml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2.5 text-base font-bold px-8 py-4 rounded-full backdrop-blur-md group active:scale-95 transition-transform"
                  >
                    <span>Inspect Source Code</span>
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Github className="w-4 h-4 text-primary" />
                    </div>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

/** Reduced-motion accessible static fallback: clean 5-act stacked-card layout without scroll-jacking */
function FallbackStatic() {
  const pipelineStages = [
    {
      num: '01',
      title: 'INPUT STREAM',
      spec: '17,880 Postings',
      desc: 'Raw employment listings & descriptions ingested',
      icon: <Database className="w-5 h-5" />,
    },
    {
      num: '02',
      title: 'PREPROCESS',
      spec: 'TF-IDF + SMOTE',
      desc: 'Synthetic minority oversampling balancing 50:50 ratio',
      icon: <Layers className="w-5 h-5" />,
    },
    {
      num: '03',
      title: 'ML MODEL',
      spec: 'SVM Hyperplane',
      desc: 'Linear dual optimization with calibrated probability threshold',
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      num: '04',
      title: 'REST API',
      spec: 'FastAPI ASGI',
      desc: '<12ms inference latency under concurrent production load',
      icon: <Server className="w-5 h-5" />,
    },
    {
      num: '05',
      title: 'DECISION DISPATCH',
      spec: '98.7% Verified',
      desc: 'Zero data leakage with 10-fold cross-validation',
      icon: <Layout className="w-5 h-5" />,
    },
  ];

  return (
    <div className="section-padding bg-background pt-6">
      <div className="container-custom max-w-5xl space-y-8">
        {/* ACT 01: PRODUCT ARRIVAL */}
        <div className="rounded-3xl border border-primary/40 bg-surface/90 p-8 md:p-10 shadow-xl text-center">
          <div className="inline-flex items-center gap-2 text-micro font-mono text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 font-bold tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" /> FLAGSHIP 01 // PRODUCTION ML
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black text-text-primary tracking-tight mb-4">
            JobSpark AI
          </h3>
          <p className="text-lg md:text-xl text-text-secondary font-medium max-w-xl mx-auto mb-8">
            Autonomous Fraud Detection Engine for Employment Listings
          </p>
          <div className="p-6 rounded-2xl bg-surface-raised/80 border border-primary/40 max-w-md mx-auto text-left shadow-lg">
            <div className="flex items-center justify-between text-micro font-mono text-primary mb-3 pb-2 border-b border-border/80">
              <span className="flex items-center gap-1.5 font-bold">
                <Zap className="w-3.5 h-3.5" /> AI INFERENCE CORE
              </span>
              <span className="text-text-tertiary">STANDBY // READY</span>
            </div>
            <div className="text-sm font-mono text-text-secondary">
              SVM Hyperplane · SMOTE Rebalancing · TF-IDF N-Grams
            </div>
            <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-text-tertiary">
              <span>DATASET: 17,880 POSTINGS</span>
              <span className="text-primary font-bold">PRODUCTION READY</span>
            </div>
          </div>
        </div>

        {/* ACT 02: 98.7% FLAGSHIP MOMENT */}
        <div className="rounded-3xl border-2 border-primary/50 bg-surface/95 p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
          <div className="text-micro font-mono text-primary font-bold tracking-widest mb-2 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-primary" /> EMPIRICAL BENCHMARK RESULT
          </div>
          <div className="text-7xl sm:text-8xl md:text-9xl font-black text-primary font-headline tracking-tighter my-3">
            98.7%
          </div>
          <div className="text-caption sm:text-sm font-headline text-text-primary font-extrabold uppercase tracking-wider mb-6">
            Verified Classification Accuracy
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-raised/90 border border-primary/30 text-xs font-mono text-text-primary">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span>F1-Score: 0.978</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-raised/90 border border-primary/30 text-xs font-mono text-text-primary">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Precision: 98.5%</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-raised/90 border border-primary/30 text-xs font-mono text-text-primary">
              <Activity className="w-3.5 h-3.5 text-primary" />
              <span>Zero Data Leakage</span>
            </div>
          </div>
        </div>

        {/* ACT 03: ML INFERENCE PIPELINE */}
        <div className="rounded-3xl border border-primary/40 bg-surface/90 p-8 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <div className="text-micro font-mono text-primary font-bold tracking-widest uppercase mb-1">
              PIPELINE CHOREOGRAPHY // 5 STAGES
            </div>
            <p className="text-2xl font-bold font-headline text-text-primary mb-2">
              End-to-End Production ML Data Bus
            </p>
            <p className="text-sm text-text-secondary max-w-xl mx-auto">
              Raw postings ingested, synthetically balanced, classified via dual hyperplane, and served via FastAPI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {pipelineStages.map((stage) => (
              <div
                key={stage.num}
                className="p-4 rounded-2xl bg-surface-raised/90 border border-primary/40 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-primary font-bold">
                  <span>{stage.num}</span>
                  {stage.icon}
                </div>
                <div className="text-xs font-mono font-bold text-text-primary mb-1">
                  {stage.title}
                </div>
                <div className="text-[11px] font-mono text-primary/80 mb-2">
                  {stage.spec}
                </div>
                <div className="text-[11px] text-text-tertiary leading-snug">
                  {stage.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACT 04: ENGINEERING PROOF */}
        <div className="rounded-3xl border border-primary/40 bg-surface/90 p-8 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <div className="text-micro font-mono text-primary font-bold tracking-widest uppercase mb-1">
              METHODOLOGY & RIGOR // TELEMETRY PROOF
            </div>
            <p className="text-2xl font-bold font-headline text-text-primary mb-2">
              Solving Extreme Class Imbalance (&lt;5% Fraud)
            </p>
            <p className="text-sm text-text-secondary max-w-xl mx-auto">
              Empirical benchmarks across real-world recruitment datasets
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-surface-raised/80 border border-border">
              <div className="text-xs font-mono text-primary font-bold mb-1">17,880 POSTINGS CORPUS</div>
              <div className="text-xs text-text-secondary leading-relaxed">
                Extracted unigram and bigram TF-IDF n-grams with sublinear term frequency scaling across real-world job titles, requirements, and descriptions.
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-surface-raised/80 border border-border">
              <div className="text-xs font-mono text-primary font-bold mb-1">POSITIVE CLASS SPARSITY</div>
              <div className="text-xs text-text-secondary leading-relaxed">
                Addressed severe positive-class sparsity (&lt;5% fraud class distribution) that causes standard classifiers to collapse into majority-class collapse.
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-surface-raised/80 border border-border">
              <div className="text-xs font-mono text-primary font-bold mb-1">SMOTE SYNTHETIC RESAMPLING</div>
              <div className="text-xs text-text-secondary leading-relaxed">
                Applied Synthetic Minority Over-sampling to normalize the 5:95 class imbalance to a 50:50 distribution in high-dimensional feature space.
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-surface-raised/80 border border-border">
              <div className="text-xs font-mono text-primary font-bold mb-1">FASTAPI ASGI INFERENCE</div>
              <div className="text-xs text-text-secondary leading-relaxed">
                Integrated vectorized model with asynchronous ASGI server achieving &lt;12ms inference latency under concurrent production workloads.
              </div>
            </div>
          </div>
        </div>

        {/* ACT 05: SPECIFICATION & CTAS */}
        <div id="jobspark-act-05" className="rounded-3xl border border-primary/40 bg-surface/90 p-8 md:p-12 shadow-xl text-center">
          <div className="inline-flex items-center gap-2 text-micro font-mono text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 font-bold tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> FLAGSHIP 01 // DEPLOYED SYSTEM
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-headline font-black text-text-primary tracking-tight mb-4">
            JobSpark AI
          </h3>
          <p className="text-base sm:text-lg text-text-secondary font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            End-to-end production ML pipeline detecting fraudulent job postings with 98.7% accuracy. Deployed with FastAPI, Scikit-learn, and React.
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-10">
            {['Python', 'FastAPI', 'React', 'SVM', 'Scikit-learn', 'TF-IDF', 'SMOTE'].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono font-semibold text-text-secondary bg-surface-raised px-4 py-2 rounded-xl border border-border/80"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://fraud-job-detection-ml.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2.5 text-base font-bold px-8 py-4 rounded-full shadow-2xl shadow-primary/30"
            >
              <span>Launch Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/PRAHULREDD/fraud-job-detection-ml"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2.5 text-base font-bold px-8 py-4 rounded-full"
            >
              <span>Inspect Source Code</span>
              <Github className="w-4 h-4 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
