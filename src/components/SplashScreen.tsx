import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState('');
  const fullText = "System initializing...\n[FaceNet models loaded]\n[Hailo-8L accelerator connected]\n[Edge environment verified]\n\n-> Welcome Rahul.";

  useEffect(() => {
    let currentText = '';
    let currIndex = 0;
    
    // Slight initial delay
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        currentText += fullText[currIndex];
        setText(currentText);
        currIndex++;
        if (currIndex >= fullText.length) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // Pause to read before dismissing
        }
      }, 25); 
      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(startDelay);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] bg-[#0F172A] flex items-center justify-center font-mono text-primary p-6 md:text-lg"
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="whitespace-pre-wrap max-w-2xl w-full text-left">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2.5 h-5 bg-primary align-middle ml-1 -mt-1"
        />
      </div>
    </motion.div>
  );
}
