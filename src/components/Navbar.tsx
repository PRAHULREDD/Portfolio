import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenResume }: { onOpenResume: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="glass-nav fixed top-0 w-full z-50 border-b border-white/5 shadow-2xl">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-headline text-xl font-bold text-primary tracking-tighter"
          >
            P. Rahul Reddy
          </a>
          
          <div className="hidden lg:flex items-center gap-2 bg-[#1E293B] border border-white/10 px-3 py-1.5 rounded-full cursor-default select-none shadow-lg">
             <div className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
             </div>
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Open to Opportunities</span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center font-headline tracking-wider uppercase text-xs font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`transition-colors hover:text-primary ${
                activeSection === link.href.replace('#', '') ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400"
              }`}
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-black px-5 py-2 rounded-md font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              onOpenResume();
            }}
          >
            Resume
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 font-headline tracking-wider uppercase text-xs font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`transition-colors ${
                    activeSection === link.href.replace('#', '') ? "text-primary" : "text-slate-400"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button
                className="bg-primary text-black px-5 py-3 rounded-md font-bold text-center uppercase tracking-widest cursor-pointer w-full"
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
              >
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
