import { motion } from 'motion/react';
import { useRef, useMemo } from 'react';
import { Network } from 'lucide-react';

export default function Skills() {
  const constraintsRef = useRef(null);
  
  const coreSkills = [
    'Python', 'FastAPI', 'React', 'TypeScript',
    'OpenCV', 'FaceNet', 'YOLO', 'ONNX Runtime', 
    'PyTorch', 'TensorFlow', 'Scikit-learn', 'SVM',
    'Hailo-8L', 'Raspberry Pi 5', 'Docker', 'Vercel'
  ];
  
  const tier1 = ['Edge AI', 'Computer Vision', 'YOLO', 'OpenCV', 'FaceNet', 'SCRFD', 'MTCNN', 'ONNX Runtime', 'Hailo-8L', 'Raspberry Pi 5'];
  const tier2 = ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'SVM', 'Naive Bayes', 'CNN', 'SMOTE', 'TF-IDF'];

  // Calculate physics properties once so they don't snap on re-render.
  const nodes = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const boundsX = isMobile ? 200 : 500;
    const boundsY = isMobile ? 350 : 300;

    return coreSkills.map(skill => ({
      name: skill,
      initialX: (Math.random() - 0.5) * boundsX, 
      initialY: (Math.random() - 0.5) * boundsY, 
      floatY: [Math.random() * 40 - 20, Math.random() * -40 + 20, Math.random() * 40 - 20],
      floatX: [Math.random() * 40 - 20, Math.random() * -40 + 20, Math.random() * 40 - 20],
      duration: Math.random() * 5 + 5,
    }));
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 bg-[#0F172A] overflow-hidden" id="skills">
      {/* Background radial pacing */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Background Marquee (Faded) */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center opacity-[0.03] pointer-events-none -rotate-6 scale-110">
        <div className="flex whitespace-nowrap animate-marquee" style={{ animationDuration: '40s' }}>
          {[...tier1, ...tier1, ...tier1, ...tier1].map((skill, i) => (
             <span key={i} className="text-6xl md:text-8xl font-black text-white px-8">{skill}</span>
          ))}
        </div>
        <div className="flex whitespace-nowrap animate-marquee mt-10" style={{ animationDuration: '50s', animationDirection: 'reverse' }}>
          {[...tier2, ...tier2, ...tier2, ...tier2].map((skill, i) => (
             <span key={i} className="text-6xl md:text-8xl font-black text-white px-8">{skill}</span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="mb-12 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-headline">
              Technical Arsenal
            </h2>
            <div className="w-1 h-10 bg-primary rounded-full hidden md:block" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium font-body text-sm"
          >
            <Network className="w-4 h-4" /> Physics Engine: Grab & Toss the Nodes
          </motion.div>
        </div>
        
        {/* Physics Interactive Container */}
        <motion.div 
          ref={constraintsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] md:h-[600px] rounded-3xl border border-white/10 bg-[#1E293B]/30 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl inner-shadow"
        >
          {/* Subtle grid background to look like a canvas */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          
          {nodes.map((node, i) => (
            <motion.div 
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              whileInView={{ 
                x: node.initialX, 
                y: node.initialY, 
                opacity: 1, 
                scale: 1 
              }}
              viewport={{ once: true }}
              animate={{ 
                y: node.floatY, 
                x: node.floatX
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: i * 0.05 },
                scale: { type: "spring", delay: i * 0.05 },
                x: { 
                  duration: node.duration, 
                  repeat: Infinity, 
                  repeatType: "mirror", 
                  ease: "easeInOut" 
                },
                y: { 
                  duration: node.duration * 1.1, 
                  repeat: Infinity, 
                  repeatType: "mirror", 
                  ease: "easeInOut" 
                }
              }}
              whileHover={{ scale: 1.15, zIndex: 50, borderColor: "rgba(34, 197, 94, 0.5)", backgroundColor: "rgba(30, 41, 59, 1)" }}
              whileTap={{ scale: 0.95, cursor: "grabbing" }}
              key={i} 
              className="absolute px-6 py-4 bg-[#1E293B]/80 backdrop-blur-md border border-white/10 text-white font-bold rounded-full cursor-grab tracking-wide font-headline select-none shadow-[0_5px_15px_rgba(0,0,0,0.3)] flex items-center gap-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_#22C55E]" />
              {node.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
