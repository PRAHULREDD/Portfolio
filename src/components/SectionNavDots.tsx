import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

const SECTIONS = [
  { id: 'home', label: 'Hero' },
  { id: 'jobspark', label: 'JobSpark' },
  { id: 'face-rec', label: 'Face Rec' },
  { id: 'edge-ai', label: 'Edge AI' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionNavDots() {
  const [activeId, setActiveId] = useState('home');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveId(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-2.5 p-2 rounded-full bg-surface/70 backdrop-blur-md border border-border/60 shadow-xl"
    >
      {SECTIONS.map((section) => {
        const isActive = activeId === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            aria-label={section.label}
            aria-current={isActive ? 'location' : undefined}
            className="group relative flex items-center justify-center p-1 cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {/* Tooltip on hover */}
            <span className="absolute right-7 px-2.5 py-1 rounded-md bg-surface-raised border border-border/80 text-[10px] font-mono text-text-primary uppercase tracking-wider font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              {section.label}
            </span>

            {/* Dot Indicator */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2 h-5 bg-primary shadow-[0_0_10px_#00D9C0]'
                  : 'w-2 h-2 bg-text-tertiary/40 group-hover:bg-primary/70 group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
