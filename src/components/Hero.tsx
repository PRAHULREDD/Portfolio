import { motion } from 'motion/react';
import { ExternalLink, Github, Linkedin, Mail, FileText, Globe, Cpu, Database, Server } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import ParticleBackground from './ParticleBackground';
import DecryptText from './DecryptText';
import MagneticButton from './MagneticButton';

export default function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  const metrics = [
    { value: '98.7% Accuracy', label: 'Fraud Detection · Live' },
    { value: '93% Accuracy', label: 'Face Recognition · 6m range' },
  ];

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/PRAHULREDD', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/rahulreddypulicharla', label: 'LinkedIn' },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-11.71 11.593a1.378 1.378 0 0 0 0 1.98l1.726 1.73a1.38 1.38 0 0 0 1.98 0l11.593-11.71a1.384 1.384 0 0 0-.414-2.336L13.483 0zM6.761 11.445a.677.677 0 0 1 0-.958l1.458-1.459a.678.678 0 0 1 .959 0 .681.681 0 0 1 0 .959l-1.459 1.458a.678.678 0 0 1-.958 0zM16.24 6.472a.677.677 0 0 1 0-.958l1.459-1.459a.678.678 0 0 1 .958 0 .681.681 0 0 1 0 .959l-1.459 1.458a.675.675 0 0 1-.958 0zM3.452 14.754a.677.677 0 0 1 0-.958l1.459-1.459a.678.678 0 0 1 .958 0 .681.681 0 0 1 0 .959l-1.459 1.458a.675.675 0 0 1-.958 0zM12.93 9.783a.677.677 0 0 1 0-.958l1.459-1.459a.678.678 0 0 1 .958 0 .681.681 0 0 1 0 .959l-1.459 1.458a.675.675 0 0 1-.958 0z" />
        </svg>
      ),
      href: 'https://leetcode.com/u/PULICHARLARAHUL',
      label: 'LeetCode'
    },
    { icon: <Mail className="w-5 h-5" />, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rr0018619@gmail.com', label: 'Email' },
    { icon: <Globe className="w-5 h-5" />, href: '#', label: 'Portfolio' },
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 md:px-6 pt-20 pb-12 bg-[#0F172A]" id="home">
      <ParticleBackground />
      {/* Top-Center Radial Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Column (Text) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-8 flex-1 w-full max-w-2xl"
        >
          {/* Top-Left Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-wide uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm">Seeking Full-Time Roles  · Open to Relocation</span>
          </div>

          <div className="space-y-4 w-full">
            <h1 className="text-[32px] sm:text-[40px] md:text-[64px] font-bold tracking-tighter leading-tight text-white whitespace-nowrap font-headline flex gap-4">
              <DecryptText text="P. Rahul Reddy" />
            </h1>

            <p className="text-[18px] md:text-[24px] font-medium text-primary font-headline">
              <DecryptText text="Edge AI & Computer Vision Engineer" />
            </p>

            <p className="text-sm md:text-[16px] text-slate-400 leading-relaxed font-body">
              Deployed production deep learning models on Raspberry Pi 5 + Hailo-8L. Engineered 93% face recognition systems and built end-to-end 98.7% fraud detection architectures.
            </p>
          </div>

          {/* Metric Chips */}
          <div className="w-full overflow-x-auto scrollbar-hide pb-2">
            <div className="flex flex-nowrap gap-4 min-w-max md:min-w-0">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-[#1E293B]/80 backdrop-blur-md border border-primary/30 rounded-lg p-4 min-w-[220px] md:min-w-0 flex-1 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-primary font-bold text-xl mb-1 relative z-10">{metric.value}</div>
                  <div className="text-slate-400 text-xs font-medium uppercase tracking-wider relative z-10">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-4 mt-2 w-full md:w-auto relative z-10">
            <MagneticButton href="https://fraud-job-detection-ml.vercel.app">
              <span className="bg-primary text-black px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all font-headline">
                View Live Project <ExternalLink className="w-5 h-5" />
              </span>
            </MagneticButton>

            <MagneticButton onClick={(e) => { e.preventDefault(); onOpenResume(); }}>
              <span className="border border-white hover:border-primary hover:text-primary text-white px-8 py-4 rounded-md font-bold transition-all bg-[#0F172A] flex items-center justify-center gap-2 font-headline">
                View Resume <FileText className="w-5 h-5" />
              </span>
            </MagneticButton>
          </div>

          {/* Social Row */}
          <div className="flex gap-8 mt-2 relative z-10">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, color: '#22C55E' }}
                className="text-slate-400 transition-colors p-2 -m-2 group relative"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                  {social.label}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Column (Abstract Data Core Avatar) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="hidden lg:flex flex-1 justify-center items-center perspective-1000 relative w-full h-[500px]"
          role="img"
          aria-label="Abstract 3D glowing data core representing Edge AI logic processing"
        >
          {/* Interactive Mouse-Tracking Wrapper */}
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={800} className="relative w-full h-full flex justify-center items-center">
            {/* Supernova Aura */}
            <div className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

            {/* The Sun / Central AI Brain */}
            <div className="relative w-32 h-32 flex justify-center items-center pointer-events-none">
              <div className="absolute inset-0 bg-primary/20 border border-primary/50 shadow-[0_0_50px_rgba(34,197,94,0.5)] rounded-full animate-pulse" />
              {/* Wireframe Planet */}
              <div className="absolute inset-0 rounded-full border border-primary/40 transform-gpu animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-primary/40 transform-gpu rotate-x-[60deg] animate-[spin_12s_linear_infinite_reverse]" />
              <div className="absolute inset-0 rounded-full border border-primary/40 transform-gpu rotate-y-[60deg] animate-[spin_10s_linear_infinite]" />
              <Cpu className="w-10 h-10 text-primary z-10" />
            </div>

            {/* Orbit 1: Inner Ring (Hardware) */}
            <div className="absolute border border-white/10 rounded-full border-dashed animate-[spin_15s_linear_infinite] pointer-events-none flex items-center justify-center" style={{ width: '280px', height: '280px' }}>
                <div className="absolute top-0 -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse]">
                   <div className="bg-[#1E293B]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg pointer-events-auto hover:border-[#FFBD2E] transition-all cursor-crosshair">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E] animate-ping" />
                     <span className="text-[10px] font-mono text-[#FFBD2E] font-bold whitespace-nowrap">Hailo-8L NPU</span>
                   </div>
                </div>
                
                <div className="absolute bottom-0 translate-y-1/2 animate-[spin_15s_linear_infinite_reverse]">
                   <div className="bg-[#1E293B]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg pointer-events-auto hover:border-[#FFBD2E] transition-all cursor-crosshair">
                     <Cpu className="w-3 h-3 text-[#FFBD2E]" />
                     <span className="text-[10px] font-mono text-slate-300 font-bold whitespace-nowrap">Raspberry Pi 5</span>
                   </div>
                </div>
            </div>

            {/* Orbit 2: Middle Ring (Vision / Deep Learning) */}
            <div className="absolute border border-white/10 rounded-full animate-[spin_25s_linear_infinite_reverse] pointer-events-none flex items-center justify-center" style={{ width: '400px', height: '400px' }}>
                <div className="absolute bottom-0 translate-y-1/2 animate-[spin_25s_linear_infinite]">
                   <div className="bg-[#1E293B]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg pointer-events-auto hover:border-primary transition-all cursor-crosshair">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                     <span className="text-[10px] font-mono text-primary font-bold whitespace-nowrap">FaceNet / SCRFD</span>
                   </div>
                </div>
                
                <div className="absolute left-0 -translate-x-1/2 animate-[spin_25s_linear_infinite]">
                   <div className="bg-[#1E293B]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg pointer-events-auto hover:border-[#FF5F56] transition-all cursor-crosshair">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56] animate-ping" />
                     <span className="text-[10px] font-mono text-[#FF5F56] font-bold whitespace-nowrap">YOLOv8 Processing</span>
                   </div>
                </div>

                <div className="absolute top-0 -translate-y-1/2 animate-[spin_25s_linear_infinite]">
                   <div className="bg-[#1E293B]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg pointer-events-auto hover:border-blue-400 transition-all cursor-crosshair">
                     <Database className="w-3 h-3 text-blue-400" />
                     <span className="text-[10px] font-mono text-slate-300 font-bold whitespace-nowrap">PyTorch / ONNX</span>
                   </div>
                </div>
            </div>

            {/* Orbit 3: Outer Ring (Backend & NLP Server) */}
            <div className="absolute border border-white/5 rounded-full border-dashed animate-[spin_35s_linear_infinite] pointer-events-none flex items-center justify-center" style={{ width: '540px', height: '540px' }}>
                <div className="absolute right-0 translate-x-1/2 animate-[spin_35s_linear_infinite_reverse]">
                   <div className="bg-[#1E293B]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg pointer-events-auto hover:border-white transition-all cursor-crosshair">
                     <Globe className="w-3 h-3 text-white opacity-70" />
                     <span className="text-[10px] font-mono text-slate-300 font-bold whitespace-nowrap">FastAPI / React</span>
                   </div>
                </div>
                
                <div className="absolute left-0 -translate-x-1/2 animate-[spin_35s_linear_infinite_reverse]">
                   <div className="bg-[#1E293B]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg pointer-events-auto hover:border-teal-400 transition-all cursor-crosshair">
                     <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                     <span className="text-[10px] font-mono text-teal-400 font-bold whitespace-nowrap">SVM & NLP Engine</span>
                   </div>
                </div>
            </div>
            
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
