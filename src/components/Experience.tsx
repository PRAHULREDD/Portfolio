import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';

export default function Experience() {
  const experiences = [
    {
      company: 'RealMeds Technologies Pvt. Ltd.',
      logo: 'RM',
      logoColor: 'bg-teal-500/20 text-teal-500',
      role: 'AI / ML Intern',
      duration: 'Oct 2025 – Dec 2025 · 2 months · Thiruvananthapuram, Kerala',
      tags: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Healthcare AI', 'EDA'],
      bullets: [
        'Developed AI-driven features for a healthcare platform using Python, Pandas, and NumPy within an agile workflow.',
        'Collaborated with cross-functional teams to integrate ML models into the RealMeds product pipeline, ensuring compatibility with healthcare data standards.',
        'Conducted exploratory data analysis (EDA) and standardised dataset pipeline, reducing preprocessing time and improving data quality for model training.'
      ]
    },
    {
      company: 'Pipra Solutions Pvt. Ltd.',
      logo: 'PS',
      logoColor: 'bg-primary/20 text-primary',
      role: 'AI / ML Intern',
      duration: 'Jul 2025 – Oct 2025 · 3 months · Hyderabad, India',
      tags: ['Python', 'YOLO', 'FaceNet', 'SCRFD', 'ONNX', 'Hailo-8L', 'Raspberry Pi 5', 'OpenCV', 'WebSocket'],
      metrics: [
        { label: '93% Face Recog. Accuracy' },
        { label: '+25pp Improvement' }
      ],
      bullets: [
        'Engineered real-time multi-stage face recognition system (SCRFD + ONNX FaceNet), achieving 93% accuracy at 6-metre operational range.',
        'Increased face recognition accuracy by 25 percentage points (70%→93%) by migrating from Haar Cascades to MTCNN + FaceNet.',
        'Deployed custom YOLO model on Raspberry Pi 5 with Hailo-8L Accelerator; implemented PyTorch → ONNX → Hailo conversion pipeline.',
        'Built complete dataset pipeline (collection → augmentation → labelling via Label Studio); integrated WarePro platform for session control.',
        'Implemented WebSocket-based real-time alerting for unauthorized personnel detection with mobile push notifications.'
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0F172A]" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white font-headline"
            >
              Work Experience
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary font-medium font-body pl-5"
          >
            5 months · 2 internships · Production systems shipped
          </motion.p>
        </div>
        
        <div className="relative space-y-12">
          {/* Timeline Vertical Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-6 h-6 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#22C55E]" />
              </div>

              {/* Experience Card */}
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000} scale={1.01} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.05} glareColor="#ffffff" glarePosition="all" className="bg-[#1E293B] p-6 md:p-8 rounded-xl border-l-4 border-primary shadow-xl hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-500 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${exp.logoColor}`}>
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-headline">{exp.company}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded border border-primary/20">
                          {exp.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-slate-400 text-sm font-medium mb-4 font-body">
                  {exp.duration}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-slate-500 uppercase tracking-wider bg-slate-800/50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {exp.metrics && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 py-4 border-y border-white/5">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="text-center md:text-left">
                        <div className="text-primary font-bold text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed font-body">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
