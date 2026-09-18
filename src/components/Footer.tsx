import { Github, Linkedin, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Footer({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <footer className="bg-surface/80 border-t border-primary/20 py-12 relative overflow-hidden">
      {/* Top gradient bleed from Contact */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Left - Branding */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-headline text-xl font-bold text-primary mb-2 inline-block hover:text-primary-hover transition-colors"
            >
              P. Rahul Reddy
            </a>
            <p className="text-sm text-text-secondary">
              Edge AI & Computer Vision Engineer
            </p>
            <p className="text-xs text-text-tertiary mt-2">
              Deploying deep learning pipelines on resource-constrained hardware
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <p className="text-caption text-text-tertiary font-mono mb-4">QUICK NAVIGATION</p>
            <div className="flex flex-col gap-2.5">
              <a href="#projects" className="text-sm text-text-secondary hover:text-primary transition-colors w-fit">
                Projects
              </a>
              <a href="#experience" className="text-sm text-text-secondary hover:text-primary transition-colors w-fit">
                Experience
              </a>
              <a href="#skills" className="text-sm text-text-secondary hover:text-primary transition-colors w-fit">
                Skills
              </a>
              <a href="#about" className="text-sm text-text-secondary hover:text-primary transition-colors w-fit">
                About
              </a>
              <button
                onClick={onOpenResume}
                className="text-sm text-text-secondary hover:text-primary transition-colors text-left w-fit"
              >
                Resume
              </button>
            </div>
          </div>

          {/* Right - Social */}
          <div>
            <p className="text-caption text-text-tertiary font-mono mb-4">CONNECT</p>
            <div className="flex gap-3">
              <MagneticButton intensity={30}>
                <a
                  href="https://github.com/PRAHULREDD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-background border border-border text-text-secondary hover:text-primary hover:border-primary transition-all flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </MagneticButton>

              <MagneticButton intensity={30}>
                <a
                  href="https://linkedin.com/in/rahulreddypulicharla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-background border border-border text-text-secondary hover:text-primary hover:border-primary transition-all flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </MagneticButton>

              <MagneticButton intensity={30}>
                <a
                  href="mailto:rahulreddyp24@gmail.com"
                  className="p-3 rounded-xl bg-background border border-border text-text-secondary hover:text-primary hover:border-primary transition-all flex items-center justify-center"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-border/80">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-text-tertiary">
            <div>
              © 2026 P. Rahul Reddy. Built with React + Vite + Motion.
            </div>
            <div>
              Chennai, India · Open to Relocation
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
