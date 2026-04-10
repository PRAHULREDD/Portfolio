import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Massive CTA */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12vw] sm:text-6xl md:text-8xl font-black text-white font-headline tracking-tighter mb-12 leading-tight"
        >
          LET'S BUILD SOMETHING <br />
          <span className="text-primary italic pr-4">EXTRAORDINARY.</span>
        </motion.h2>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <MagneticButton href="https://mail.google.com/mail/?view=cm&fs=1&to=rr0018619@gmail.com">
            <span className="inline-flex items-center gap-2 bg-primary text-black px-10 py-5 rounded-full font-bold text-lg hover:brightness-110 transition-all font-headline tracking-wide uppercase shadow-[0_0_40px_rgba(34,197,94,0.3)]">
              Start a Conversation
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Actual Footer Base */}
      <div className="bg-slate-950 py-12 border-t border-white/5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
          <div className="text-primary font-bold text-lg font-headline">
            P. Rahul Reddy
          </div>
          <div className="text-sm text-slate-500 text-center md:text-left font-body">
            Edge AI & Computer Vision Engineer · Built with React + Vite · 2026
          </div>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="https://linkedin.com/in/rahulreddypulicharla" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="https://github.com/PRAHULREDD" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
