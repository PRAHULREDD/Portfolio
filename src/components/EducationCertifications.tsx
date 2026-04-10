import { motion } from 'motion/react';
import { Award, GraduationCap } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function EducationCertifications() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0F172A]" id="education">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-white font-headline">Education</h2>
            </div>
            
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.05} glarePosition="all" className="bg-[#1E293B] p-8 rounded-xl border border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-headline">Saveetha School of Engineering, Chennai</h3>
                  <p className="text-primary font-medium text-sm mt-1">B.Tech — Artificial Intelligence and Data Science</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="text-slate-400 text-sm font-mono">
                  2023 – 2027
                </div>
                <div className="text-center md:text-right">
                  <div className="text-4xl font-bold text-white font-headline">8.5 <span className="text-lg text-slate-500">/ 10</span></div>
                  <div className="text-xs uppercase tracking-widest text-primary font-bold mt-1">Current CGPA</div>
                </div>
              </div>
            </Tilt>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-white font-headline">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} scale={1.03} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.05} glarePosition="all" className="p-6 bg-[#1E293B] rounded-xl border border-white/5 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all group overflow-hidden relative">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-all">
                  <Award className="w-5 h-5 text-primary group-hover:text-inherit" />
                </div>
                <h4 className="font-bold text-white text-sm mb-2 leading-tight">NPTEL — Introduction to Internet of Things (IoT)</h4>
                <p className="text-xs text-slate-500 mb-4">Jan – Apr 2025</p>
                <div className="inline-block px-2.5 py-1 bg-slate-900 rounded text-xs font-bold text-primary border border-primary/20">
                  IIT / NPTEL Badge
                </div>
              </Tilt>
              
              <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} scale={1.03} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.05} glarePosition="all" className="p-6 bg-[#1E293B] rounded-xl border border-white/5 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all group overflow-hidden relative">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-all">
                  <Award className="w-5 h-5 text-primary group-hover:text-inherit" />
                </div>
                <h4 className="font-bold text-white text-sm mb-2 leading-tight">Internship Completion Certificate</h4>
                <p className="text-xs text-slate-500 mb-1">Pipra Solutions Pvt. Ltd.</p>
                <p className="text-xs text-slate-400 mb-3">AI/ML Intern · Jul – Dec 2025</p>
                <div className="inline-block px-2.5 py-1 bg-primary/20 rounded text-xs font-bold text-primary border border-primary/20">
                  Remark: Outstanding
                </div>
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
