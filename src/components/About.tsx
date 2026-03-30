import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { value: '93%', label: 'Face Recog Accuracy' },
    { value: '98.7%', label: 'Fraud Detection' },
    { value: '5 Mo.', label: 'Industry Experience' },
  ];

  return (
    <section className="py-32 px-6 bg-[#111827]" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <h2 className="text-4xl font-bold text-white font-headline">About Me</h2>
          </div>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              I am an Edge AI and Computer Vision specialist — one of the few undergraduates to deploy production deep learning models on resource-constrained hardware (Raspberry Pi 5 + Hailo-8L).
            </p>
            <p>
              With 5 months of industry internship experience, I've engineered real-time face recognition pipelines with 93% accuracy and NLP-based fraud detection systems with 98.7% accuracy. I am experienced across the full ML lifecycle: from data preprocessing and model training to REST API deployment and full-stack AI application delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-surface border border-outline/20 rounded-lg flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="text-primary text-3xl font-bold font-headline mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="aspect-square bg-surface rounded-lg vision-scan relative overflow-hidden group border border-outline/20 shadow-2xl">
            <img 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxo5gNUV6IvToPFhwC2W30Jq44re_FQ1Ay2iYZXgNWIEP3-1aU785zGlAcMIAy4WG5AJUzIPsDzznXEJNOnpYeJBVu4yklwKswYzRpxb159W3I24DtQ9bGdv6QLEVXpYtForEmJXQfatAQDaDMJgBQq5UOadNWh6owxVHhisPqGZKxeUPNUvp8K6qesobK3ANTc3-UIVRL3s7VVwNGRPoPWDy_pie9aC4vKsxMo4Z61V74SeD-A8NgCXlnZYVd7ZK3mqusJ1s0OUY" 
              alt="Rahul Reddy profile"
              referrerPolicy="no-referrer"
            />
            {/* Vision Scan Line */}
            <div className="absolute inset-0 pointer-events-none z-20 vision-scan-line" />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/80 backdrop-blur-md rounded border border-white/5 z-30">
              <div className="text-[10px] font-mono text-primary mb-1 uppercase tracking-tighter">System Health: Nominal</div>
              <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
