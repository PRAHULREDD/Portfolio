import { motion } from 'motion/react';
import { ExternalLink, Github, Monitor, Cpu, Activity, Lock } from 'lucide-react';

export default function Projects() {
  const featuredStack = ['Python', 'FastAPI', 'React', 'SVM', 'TF-IDF', 'SMOTE', 'Scikit-learn', 'Vercel'];
  
  return (
    <section className="py-32 px-6 bg-[#0F172A]" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white font-headline"
            >
              Projects
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-body pl-5"
          >
            Production systems with measurable outcomes.
          </motion.p>
        </div>
        
        <div className="space-y-8">
          {/* Featured Project Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#1E293B] rounded-xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-headline">
                      JobSpark AI — Fake Job Detection System
                    </h3>
                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Live</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredStack.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        {tag} {tag !== featuredStack[featuredStack.length - 1] && "·"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metric Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 py-8 border-y border-white/5">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-bold text-primary mb-1 font-headline">98.7%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Accuracy</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-4xl font-bold text-primary mb-1 font-headline">98.5%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Precision</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-4xl font-bold text-primary mb-1 font-headline">17,880</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Real-world job postings analysed</div>
                </div>
              </div>

              <p className="text-slate-400 mb-10 leading-relaxed max-w-4xl font-body">
                End-to-end ML pipeline detecting fraudulent job postings using Support Vector Machine (SVM) with TF-IDF vectorization and SMOTE oversampling. FastAPI REST backend with React (Vite) + Tailwind CSS frontend deployed on Vercel.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a 
                  whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://fraud-job-detection-ml.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-black px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:brightness-110 transition-all text-sm"
                >
                  Live Demo <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/PRAHULREDD/fraud-job-detection-ml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:border-primary hover:text-primary transition-all text-sm"
                >
                  GitHub <Github className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Smaller Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-[#1E293B] p-8 rounded-xl border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 bg-slate-900 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded border border-white/5">
                    Internship · Pipra Solutions
                  </span>
                  <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[9px] font-bold uppercase tracking-widest rounded border border-white/10 flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5" /> Confidential / NDA
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-headline">Real-Time Face Recognition System</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {['SCRFD', 'FaceNet', 'ONNX Runtime', 'MTCNN', 'SVM', 'OpenCV'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-slate-500 uppercase">{tag}</span>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-md mb-6 w-fit">
                <Activity className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  93% accuracy · 6-metre range · +25pp improvement
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-body flex-grow">
                Multi-stage face recognition pipeline. Migrated from Haar Cascades to MTCNN + FaceNet, increasing accuracy from 70% to 93% at 6-metre operational range in real-time video streams.
              </p>
            </motion.div>

            {/* Card B */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-[#1E293B] p-8 rounded-xl border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 bg-slate-900 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded border border-white/5">
                    Internship · Pipra Solutions
                  </span>
                  <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[9px] font-bold uppercase tracking-widest rounded border border-white/10 flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5" /> Confidential / NDA
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-headline">Edge AI Object Detection System</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {['YOLO', 'Hailo-8L', 'Raspberry Pi 5', 'OpenCV', 'WebSocket', 'Label Studio'].map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-slate-500 uppercase">{tag}</span>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-md mb-6 w-fit">
                <Activity className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  Edge deployed · PyTorch→ONNX→Hailo pipeline
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-body flex-grow">
                Custom YOLO model deployed on Raspberry Pi 5 with Hailo-8L Accelerator. Built complete dataset pipeline (collection → augmentation → labelling). Real-time WebSocket alerting integrated with WarePro platform.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
