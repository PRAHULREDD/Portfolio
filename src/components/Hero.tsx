import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion, useMotionTemplate } from 'motion/react';
import { ExternalLink, Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';
import TextReveal from './motion/TextReveal';
import Reveal from './motion/Reveal';
import MagneticButton from './MagneticButton';
import SpotlightCard from './motion/SpotlightCard';

export default function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for cinematic compression
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroBlur = useTransform(scrollYProgress, [0.35, 0.85], [0, 8]);
  const heroBlurStr = useMotionTemplate`blur(${heroBlur}px)`;

  // Grid scroll parallax
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0.05]);

  // Ambient lighting
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0]);

  // Subtle interactive parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 22 });

  const bg1X = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const bg1Y = useTransform(springY, [-0.5, 0.5], [-4, 4]);
  const contentX = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const metricX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const metricY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || shouldReduceMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 pb-24 overflow-hidden bg-background"
      id="home"
    >
      {/* ═══ Background Atmosphere ═══ */}
      <motion.div style={{ x: bg1X, y: bg1Y }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,217,192,0.10),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(0,112,243,0.06),transparent_70%)]" />
      </motion.div>

      {/* ═══ Technical Grid ═══ */}
      <motion.div
        style={{ translateY: gridY, opacity: gridOpacity }}
        className="absolute inset-0 pointer-events-none z-[1]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D9C012_1px,transparent_1px),linear-gradient(to_bottom,#00D9C012_1px,transparent_1px)] bg-[size:48px_48px]" />
      </motion.div>

      {/* Ambient Pulsing Orbs */}
      <motion.div
        style={{ scale: orbScale, opacity: orbOpacity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        style={{ scale: orbScale, opacity: orbOpacity }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* ═══ PLANE 4: Main Content (Scroll Compression) ═══ */}
      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          y: heroY,
          filter: shouldReduceMotion ? undefined : heroBlurStr,
          x: contentX,
        }}
        className="container-custom max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Stage 0.05s — Technical Launch Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 py-2.5 rounded-full border border-primary/40 bg-surface/90 backdrop-blur-xl shadow-2xl shadow-primary/10 hover:border-primary transition-all">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-micro font-mono text-primary font-bold tracking-widest">
                SYSTEM: DEPLOYMENT READY
              </span>
            </div>
            <span className="text-border hidden sm:inline">|</span>
            <span className="text-micro font-mono text-text-secondary font-semibold">
              EDGE AI & VISION ARCHITECT
            </span>
            <span className="text-border hidden sm:inline">|</span>
            <span className="text-micro font-mono text-text-tertiary">
              RELOCATION AVAILABLE · CHENNAI, IN
            </span>
          </div>
        </motion.div>

        {/* Stage 0.30s — Name (Character-level TextReveal with engineering subhead) */}
        <div className="mb-3">
          <div className="text-micro font-mono text-primary/70 tracking-[0.25em] uppercase mb-2">
            ENGINEERING PORTFOLIO // 2025–2026
          </div>
          <TextReveal
            text="P. Rahul Reddy"
            el="h1"
            className="text-hero font-headline text-text-primary tracking-tight font-black justify-center drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            mode="character"
            delay={0.25}
            stagger={0.03}
          />
        </div>

        {/* Stage 0.45s — Role & Technical Domain Signature */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 space-y-3"
        >
          <p className="text-subsection font-headline bg-gradient-to-r from-primary via-primary-hover to-secondary bg-clip-text text-transparent font-extrabold tracking-tight">
            AI / ML & Computer Vision Engineer
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-micro font-mono text-text-tertiary">
            <span className="px-2.5 py-1 rounded-md bg-surface-raised border border-border/80 text-text-secondary">
              HAILO-8L NPU (13 TOPS)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-surface-raised border border-border/80 text-text-secondary">
              YOLOv8 + FACENET
            </span>
            <span className="px-2.5 py-1 rounded-md bg-surface-raised border border-border/80 text-text-secondary">
              INT8 QUANTIZATION
            </span>
            <span className="px-2.5 py-1 rounded-md bg-surface-raised border border-border/80 text-text-secondary">
              FASTAPI ML SERVING
            </span>
          </div>
        </motion.div>

        {/* Stage 0.60s — Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
            Deploying production machine learning & real-time computer vision on resource-constrained hardware.
            Specialized in <span className="text-text-primary font-semibold">SCRFD + FaceNet</span>,{' '}
            <span className="text-text-primary font-semibold">YOLOv8 INT8</span>, and{' '}
            <span className="text-primary font-bold">Hailo-8L NPU acceleration</span> under 5W power.
          </p>
        </motion.div>

        {/* ═══ PLANE 5: Telemetry Console Deck (4 Core Technical Anchors) ═══ */}
        <motion.div style={{ x: metricX, y: metricY }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14 max-w-5xl mx-auto">
            {[
              {
                value: '98.7%',
                label: 'Fraud Detection Accuracy',
                sub: 'SVM · SMOTE · F1 0.978',
                target: 'projects',
                delay: 0.7,
              },
              {
                value: '93%',
                label: 'Face Recognition @ 6M',
                sub: 'SCRFD + FaceNet ONNX',
                target: 'projects',
                delay: 0.76,
              },
              {
                value: '13 TOPS',
                label: 'Hailo-8L NPU Accel',
                sub: 'INT8 Quantized · RPi5',
                target: 'projects',
                delay: 0.82,
              },
              {
                value: '6 Mo',
                label: 'Production ML Shipped',
                sub: 'Pipra & RealMeds Intern',
                target: 'experience',
                delay: 0.88,
              },
            ].map((metric) => (
              <motion.div
                key={metric.value}
                initial={{ opacity: 0, y: 35, scale: 0.9, rotateX: -12 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ delay: metric.delay, duration: 0.6, type: 'spring', damping: 18 }}
                style={{ perspective: '600px' }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => {
                  const element = document.getElementById(metric.target);
                  if (element) {
                    const topPos = element.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: topPos, behavior: 'smooth' });
                  }
                }}
                className="cursor-pointer"
              >
                <SpotlightCard className="!p-5 text-center border-primary/30 hover:border-primary shadow-xl h-full flex flex-col justify-between group">
                  <div className="text-4xl md:text-5xl font-black text-primary font-headline mb-1.5 tracking-tighter drop-shadow-[0_0_20px_rgba(0,217,192,0.35)] group-hover:scale-105 transition-transform">
                    {metric.value}
                  </div>
                  <div>
                    <div className="text-caption text-text-primary font-bold tracking-wider mb-1">
                      {metric.label}
                    </div>
                    <div className="text-[10px] font-mono text-text-tertiary group-hover:text-primary transition-colors">
                      {metric.sub}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stage 0.95s — CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-14">
            <MagneticButton intensity={35}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('projects');
                  if (element) {
                    const topPos = element.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: topPos, behavior: 'smooth' });
                  }
                }}
                className="btn-primary flex items-center justify-center gap-2.5 text-base font-bold px-9 py-4 rounded-full shadow-xl shadow-primary/25 hover:shadow-primary/40 group"
              >
                <span>View Projects</span>
                <div className="w-7 h-7 rounded-full bg-background/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ExternalLink className="w-4 h-4 text-background" />
                </div>
              </button>
            </MagneticButton>

            <MagneticButton intensity={35}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onOpenResume();
                }}
                className="btn-secondary flex items-center justify-center gap-2.5 text-base font-bold px-9 py-4 rounded-full backdrop-blur-md group"
              >
                <span>View Resume</span>
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
              </button>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Stage 1.0s — Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex gap-6 justify-center items-center">
            <MagneticButton intensity={45}>
              <a
                href="https://github.com/PRAHULREDD"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-surface/80 border border-border text-text-secondary hover:text-primary hover:border-primary transition-all flex items-center justify-center shadow-lg"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </MagneticButton>

            <MagneticButton intensity={45}>
              <a
                href="https://linkedin.com/in/rahulreddypulicharla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-surface/80 border border-border text-text-secondary hover:text-primary hover:border-primary transition-all flex items-center justify-center shadow-lg"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </MagneticButton>

            <MagneticButton intensity={45}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulreddyp24@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-surface/80 border border-border text-text-secondary hover:text-primary hover:border-primary transition-all flex items-center justify-center shadow-lg"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-16 inline-block"
        >
          <motion.a
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('projects');
              if (element) {
                const topPos = element.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: topPos, behavior: 'smooth' });
              }
            }}
            className="text-text-tertiary hover:text-primary transition-colors p-2 flex flex-col items-center gap-1.5 group"
            aria-label="Scroll to Projects"
          >
            <span className="text-micro font-mono tracking-widest text-text-tertiary group-hover:text-primary font-bold">
              EXPLORE WORK
            </span>
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ═══ Seamless Atmosphere Bridge into Projects ═══ */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none z-[2]" />
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />
    </section>
  );
}
