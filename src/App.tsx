/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import GithubStats from './components/GithubStats';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { Mail } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      
      <CustomCursor />
      <ScrollProgress />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationCertifications />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Contact Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=rr0018619@gmail.com"
        className="fixed bottom-8 left-8 z-[100] w-14 h-14 bg-primary rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(34,197,94,0.4)] group"
        title="Let's connect"
      >
        <Mail className="w-6 h-6" />
        <div className="absolute right-full mr-4 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          Let's connect
        </div>
      </motion.a>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <ScrollToTop />
    </div>
  );
}
