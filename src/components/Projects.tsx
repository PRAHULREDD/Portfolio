import { motion } from 'motion/react';
import { ExternalLink, Github, Monitor, Cpu, Activity, Lock } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function Projects() {
  const featuredStack = ['Python', 'FastAPI', 'React', 'SVM', 'TF-IDF', 'SMOTE', 'Scikit-learn', 'Vercel'];
  
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0F172A]" id="projects">
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
          >
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000} scale={1.01} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.05} glareColor="#ffffff" glarePosition="all" className="group relative bg-[#1E293B] rounded-xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] h-full">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                
                {/* Left Column - Details */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white font-headline">
                          JobSpark AI — Fraud Detection
                        </h3>
                        <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 shrink-0">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest hidden sm:inline-block">Live</span>
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
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 py-6 border-y border-white/5">
                    <div>
                      <div className="text-3xl lg:text-4xl font-bold text-primary mb-1 font-headline">98.7%</div>
                      <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-medium">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-3xl lg:text-4xl font-bold text-primary mb-1 font-headline">98.5%</div>
                      <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-medium">Precision</div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <div className="text-3xl lg:text-4xl font-bold text-primary mb-1 font-headline">17k+</div>
                      <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-medium">Postings Analysed</div>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-10 leading-relaxed font-body">
                    End-to-end ML pipeline detecting fraudulent job postings using Support Vector Machine (SVM) with TF-IDF vectorization and SMOTE oversampling. Built with a FastAPI REST backend and React (Vite) frontend.
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

                {/* Right Column - UI Mockup */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0F172A] shadow-2xl skew-y-2 lg:-skew-x-2 lg:skew-y-3 transform-gpu group-hover:skew-y-0 group-hover:skew-x-0 transition-transform duration-700 ease-out">
                    {/* Browser Header */}
                    <div className="bg-[#1E293B] border-b border-white/10 px-4 py-2.5 flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      <div className="mx-auto bg-black/40 rounded px-3 py-1 text-[9px] text-slate-500 font-mono truncate max-w-[150px]">
                        fraud-job-detection-ml.vercel.app
                      </div>
                    </div>
                    {/* Browser Body / Dashboard Mock */}
                    <div className="relative aspect-[4/3] bg-slate-900 w-full overflow-hidden flex flex-col p-4 gap-3">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
                      
                      {/* Mock UI Elements */}
                      <div className="w-1/2 h-4 bg-white/10 rounded overflow-hidden relative z-10 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent" />
                      
                      <div className="grid grid-cols-2 gap-3 relative z-10">
                        <div className="h-16 bg-primary/10 rounded border border-primary/20 flex flex-col justify-center px-3">
                          <div className="text-[8px] text-primary uppercase font-bold mb-1">Risk Score</div>
                          <div className="w-3/4 h-3 bg-primary/40 rounded" />
                        </div>
                        <div className="h-16 bg-white/5 rounded border border-white/5" />
                      </div>
                      
                      <div className="flex-1 bg-white/5 rounded border border-white/5 relative z-10 flex p-3 gap-3">
                        <div className="w-1/3 flex flex-col gap-2">
                          <div className="w-full h-2 bg-white/10 rounded" />
                          <div className="w-2/3 h-2 bg-white/10 rounded" />
                          <div className="w-4/5 h-2 bg-white/10 rounded" />
                        </div>
                        <div className="flex-1 bg-[#1E293B] rounded border border-white/10" />
                      </div>
                      
                      {/* Scanline Effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-4 w-full animate-[scan_3s_ease-in-out_infinite]" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
            </Tilt>
          </motion.div>

          {/* Smaller Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.05} glarePosition="all" className="group bg-[#1E293B] p-6 md:p-8 rounded-xl border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col h-full">
                
                {/* CSS Face Scanner Mockup */}
                <div 
                  className="w-full h-48 bg-[#0F172A] rounded-lg border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center"
                  role="img"
                  aria-label="CSS representation of a real-time face recognition scanner wireframe"
                >
                  <div className="absolute inset-0 bg-[#1E293B]/20" />
                  {/* Face Mesh Wireframe Simulation */}
                  <div className="relative w-24 h-28 border border-primary/30 rounded flex justify-center backdrop-blur-sm">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary rounded-tr" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary rounded-bl" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary rounded-br" />
                    
                    {/* Scanning line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_rgba(34,197,94,1)] animate-[scan_2s_ease-in-out_infinite]" />
                    
                    {/* Inner abstract facial points */}
                    <div className="absolute top-10 left-4 w-1.5 h-1.5 bg-white/60 rounded-full" />
                    <div className="absolute top-10 right-4 w-1.5 h-1.5 bg-white/60 rounded-full" />
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/30 rounded-full" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-1 bg-white/50 rounded-full" />
                  </div>
                  {/* Tracking overlay */}
                  <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-[9px] text-primary font-mono border border-primary/20 flex gap-2 items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" /> MATCH: 99.8%
                  </div>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col items-start gap-2">
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
                    93% accuracy · 6-metre range · +25pp
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-body flex-grow">
                  Multi-stage face recognition pipeline. Migrated from Haar Cascades to MTCNN + FaceNet, increasing accuracy from 70% to 93% at 6-metre operational range in real-time video streams.
                </p>
              </Tilt>
            </motion.div>

            {/* Card B */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.05} glarePosition="all" className="group bg-[#1E293B] p-6 md:p-8 rounded-xl border border-white/5 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col h-full">
                
                {/* CSS Edge Logic Mockup */}
                <div 
                  className="w-full h-48 bg-[#0F172A] rounded-lg border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center"
                  role="img"
                  aria-label="CSS representation of a Raspberry Pi and Hailo-8L logic board processing data"
                >
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px]" />
                  {/* Edge Device Abstract */}
                  <div className="relative w-40 h-24 bg-[#1E293B] border border-white/10 rounded-lg shadow-2xl flex overflow-hidden">
                    {/* Left "Chip" */}
                    <div className="w-1/3 bg-primary/5 border-r border-white/5 flex items-center justify-center relative inner-shadow">
                       <div className="w-6 h-6 bg-[#0F172A] border border-primary/20 rounded shadow-[0_0_10px_rgba(34,197,94,0.3)] flex items-center justify-center">
                         <div className="w-2 h-2 bg-primary rounded-sm animate-pulse" />
                       </div>
                    </div>
                    {/* Right "Data processing" */}
                    <div className="w-2/3 p-3 flex flex-col gap-2 justify-center">
                       <div className="w-full h-1.5 bg-white/5 rounded overflow-hidden relative">
                         <div className="absolute top-0 left-0 h-full w-[40%] bg-primary animate-[shimmer_2s_infinite]" />
                       </div>
                       <div className="w-4/5 h-1 bg-white/10 rounded" />
                       <div className="w-[85%] h-1 bg-white/10 rounded" />
                       <div className="w-[60%] h-1 bg-white/10 rounded" />
                    </div>
                  </div>
                  {/* Floating IO Points */}
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56] animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="absolute bottom-3 left-4 text-[9px] text-slate-500 font-mono tracking-widest">
                    ONNX→HAILO CONVERSION
                  </div>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col items-start gap-2">
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
                    Edge deployed · Hailo pipeline
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-body flex-grow">
                  Custom YOLO model deployed on Raspberry Pi 5 with Hailo-8L Accelerator. Built complete dataset pipeline (collection → augmentation → labelling). Real-time WebSocket alerting.
                </p>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
