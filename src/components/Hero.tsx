import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, FileText, Globe } from 'lucide-react';

export default function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  const metrics = [
    { value: '98.7% Accuracy', label: 'Fraud Detection · Live' },
    { value: '93% Accuracy', label: 'Face Recognition · 6m range' },
    { value: 'Raspberry Pi 5 + Hailo-8L', label: 'Edge Deployed' },
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
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:rr0018619@gmail.com', label: 'Email' },
    { icon: <Globe className="w-5 h-5" />, href: '#', label: 'Portfolio' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 bg-[#0F172A]" id="home">
      {/* Top-Center Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
        }}
      />
      
      <div className="relative z-10 max-w-5xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-8"
        >
          {/* Top-Left Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-wide uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Seeking Full-Time Roles · Open to Relocation
          </div>
          
          <div className="space-y-4 w-full">
            <h1 className="text-[32px] sm:text-[40px] md:text-[72px] font-bold tracking-tighter leading-tight text-white whitespace-nowrap font-headline">
              P. Rahul Reddy
            </h1>
            
            <p className="text-[18px] md:text-[28px] font-medium text-primary font-headline">
              Edge AI & Computer Vision Engineer
            </p>
            
            <p className="text-sm md:text-[16px] text-slate-400 max-w-4xl leading-relaxed font-body md:whitespace-nowrap">
              Deployed production deep learning models on Raspberry Pi 5 + Hailo-8L · 93% face recognition accuracy · 98.7% fraud detection accuracy
            </p>
          </div>

          {/* Metric Chips */}
          <div className="w-full overflow-x-auto scrollbar-hide pb-2">
            <div className="flex flex-nowrap md:flex-wrap gap-4 min-w-max md:min-w-0">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="bg-surface border border-primary/30 rounded-lg p-4 min-w-[240px] md:min-w-0 flex-1"
                >
                  <div className="text-primary font-bold text-lg mb-1">{metric.value}</div>
                  <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Row */}
          <div className="flex flex-wrap gap-4 mt-4 w-full md:w-auto">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-black px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all group flex-1 md:flex-none"
              href="https://fraud-job-detection-ml.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Project
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white hover:border-primary hover:text-primary text-white px-8 py-4 rounded-md font-bold transition-all bg-transparent flex items-center justify-center gap-2 flex-1 md:flex-none cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                onOpenResume();
              }}
            >
              View Resume
              <FileText className="w-5 h-5" />
            </motion.button>
          </div>
          
          {/* Social Row */}
          <div className="flex gap-8 mt-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, color: '#22C55E' }}
                className="text-slate-400 transition-colors"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
