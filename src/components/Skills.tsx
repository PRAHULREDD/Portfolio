import { motion } from 'motion/react';

export default function Skills() {
  const coreSkills = [
    'Python', 'FastAPI', 'React', 'TypeScript',
    'OpenCV', 'FaceNet', 'YOLO', 'ONNX Runtime', 
    'PyTorch', 'TensorFlow', 'Scikit-learn', 'SVM',
    'Hailo-8L', 'Raspberry Pi 5', 'Docker', 'Vercel'
  ];
  
  const tier1 = ['Edge AI', 'Computer Vision', 'YOLO', 'OpenCV', 'FaceNet', 'SCRFD', 'MTCNN', 'ONNX Runtime', 'Hailo-8L', 'Raspberry Pi 5'];
  const tier2 = ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'SVM', 'Naive Bayes', 'CNN', 'SMOTE', 'TF-IDF'];

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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white font-headline"
            >
              Technical Arsenal
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary font-medium font-body"
          >
            Highly scannable, core production stack.
          </motion.p>
        </div>
        
        {/* Scannable Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {coreSkills.map((skill, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              key={i} 
              className="px-6 py-3 bg-[#1E293B]/80 backdrop-blur-md border border-white/5 hover:border-primary/50 text-slate-300 hover:text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:-translate-y-1 cursor-default tracking-wide font-headline"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
