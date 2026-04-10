import { motion, AnimatePresence } from 'motion/react';
import { X, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-4 md:inset-10 max-w-5xl mx-auto bg-[#0F172A]/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(34,197,94,0.15)] flex flex-col rounded-2xl overflow-hidden mt-20 md:mt-10"
          >
            {/* Elegant Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <h3 className="text-white font-headline font-bold tracking-wider text-sm">P_RAHUL_REDDY_RESUME.PDF</h3>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf?v=2`}
                  download="P_Rahul_Reddy_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all rounded-md font-bold text-xs uppercase tracking-widest"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 w-full bg-black/40 overflow-hidden relative p-4 md:p-8 flex justify-center">
              <div className="w-full h-full max-w-4xl bg-slate-900 rounded-lg overflow-hidden border border-white/10 shadow-2xl relative">
                <iframe 
                  src={`${import.meta.env.BASE_URL}resume.pdf?v=2#toolbar=0`} 
                  className="absolute inset-0 w-full h-full border-none"
                  title="Resume PDF Viewer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
