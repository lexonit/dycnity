import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. We will contact you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-10 px-4 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700"
      >
        <div className="flex flex-col lg:flex-row">
          
          {/* Contact Info (Left) */}
          <div className="lg:w-2/5 p-10 lg:p-16 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-40"></div>
            
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl font-bold mb-6"
              >
                Let's Discuss Your Project
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-slate-300 mb-12 text-lg"
              >
                Connect with our dedicated Sales Team at DYC and unlock a tailored experience designed to meet your business needs.
              </motion.p>

              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                   visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
                }}
                className="space-y-8"
              >
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Our Email</p>
                    <p className="font-semibold text-lg">dyc.itservices@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <p className="font-semibold text-lg">+971 566475979</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Visit Us</p>
                    <p className="font-semibold text-lg">123 Business Bay, Dubai, UAE</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:w-3/5 p-10 lg:p-16 bg-white dark:bg-slate-800">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Tell us more about your inquiry *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Project details, timeline, etc..."
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all flex justify-center items-center gap-2"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;