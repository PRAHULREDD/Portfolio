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
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1E293B]">
              <h3 className="text-white font-headline font-bold text-lg">P. Rahul Reddy — Resume</h3>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="P_Rahul_Reddy_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-black transition-colors rounded-md font-bold text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 w-full bg-slate-900 overflow-hidden relative">
              <iframe 
                src="/resume.pdf#toolbar=0" 
                className="absolute inset-0 w-full h-full border-none"
                title="Resume PDF Viewer"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
