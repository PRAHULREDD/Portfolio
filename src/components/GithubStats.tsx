import { motion } from 'motion/react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubStats() {
  return (
    <section className="py-20 px-6 bg-[#0F172A]" id="github-stats">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <h2 className="text-4xl font-bold text-white tracking-tight font-headline">
              Days I Code
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-body">Daily activity on GitHub shows consistency and dedication.</p>
        </motion.div>

        <motion.div
          className="bg-[#1E293B] p-6 md:p-10 rounded-xl border border-white/5 overflow-x-auto w-full max-w-full flex justify-center hover:border-primary/40 transition-colors"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GitHubCalendar 
            username="PRAHULREDD" 
            colorScheme="dark"
            theme={{
              dark: ['#0F172A', '#064e3b', '#047857', '#10b981', '#22C55E'],
            }}
            blockSize={14}
            blockMargin={5}
            fontSize={14}
          />
        </motion.div>
      </div>
    </section>
  );
}
