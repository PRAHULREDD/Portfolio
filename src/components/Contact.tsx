import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Code2, Send } from 'lucide-react';
import MagneticButton from './MagneticButton';


export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);

    // Using the user's Web3Forms access key
    formData.append("access_key", "81825cc6-e229-4cbd-857b-0a7169469473");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        (event.target as HTMLFormElement).reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Form submission failed!");
    }
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0F172A]" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-10 bg-primary rounded-full" />
            <h2 className="text-5xl font-bold text-white tracking-tight font-headline">
              Get In Touch
            </h2>
          </div>
          <p className="text-slate-400 text-lg mb-8 font-body leading-relaxed">
            Open to entry-level roles in Machine Learning Engineering, Computer Vision, or AI Development. Based in India — open to remote and relocation.
          </p>
          
          <div className="mt-12 flex gap-6">
            <motion.a 
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-2" 
              href="https://github.com/PRAHULREDD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all">
                <Github className="w-5 h-5 text-slate-400 group-hover:text-primary" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-primary">GitHub</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-2" 
              href="https://linkedin.com/in/rahulreddypulicharla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all">
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-primary" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-primary">LinkedIn</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-2" 
              href="https://leetcode.com/u/PULICHARLARAHUL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all">
                <Code2 className="w-5 h-5 text-slate-400 group-hover:text-primary" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-primary">LeetCode</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 bg-[#1E293B] p-8 rounded-xl border border-white/5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div className="relative group">
              <input type="text" name="name" id="name" required className="peer w-full bg-transparent border-b-2 border-white/10 p-2 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-primary transition-colors focus:bg-primary/5" placeholder="Your name" />
              <label htmlFor="name" className="absolute left-2 top-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest">Name</label>
            </div>
            
            <div className="relative group">
              <input type="email" name="email" id="email" required className="peer w-full bg-transparent border-b-2 border-white/10 p-2 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-primary transition-colors focus:bg-primary/5" placeholder="your.email@example.com" />
              <label htmlFor="email" className="absolute left-2 top-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest">Email</label>
            </div>

            <div className="relative group">
              <textarea name="message" id="message" required rows={4} className="peer w-full bg-transparent border-b-2 border-white/10 p-2 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-primary transition-colors focus:bg-primary/5 resize-none" placeholder="How can I help you?"></textarea>
              <label htmlFor="message" className="absolute left-2 top-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest">Message</label>
            </div>

            <MagneticButton className="mt-2 w-full" intensity={20}>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-black font-bold py-4 rounded-md flex justify-center items-center gap-2 hover:brightness-110 transition-all font-headline"
              >
                Send Message <Send className="w-4 h-4" />
              </motion.button>
            </MagneticButton>
            <span className={`text-sm text-center font-medium mt-2 ${result.includes("Success") ? "text-primary" : "text-yellow-500"}`}>{result}</span>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
