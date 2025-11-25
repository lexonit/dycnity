import React from 'react';
import { Target, Eye, Heart, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About DYCnity - Leading IT Consulting & Technology Solutions Company"
        description="Learn about DYCnity's mission, vision, and values. We deliver end-to-end digital transformation solutions with 15+ years of expertise across Banking, FinTech, Retail, and Healthcare."
        keywords="about DYCnity, IT consulting company, technology solutions, digital transformation experts, software development team"
        canonical="https://dycnity.com/about"
      />
      <div className="pt-10">
        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-slate-800 rounded-[3rem] p-8 md:p-16 shadow-xl border border-white/40 dark:border-slate-700 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10">
             <SectionHeader title="Who We Are" subtitle="About DYC" align="left" />
             <div className="text-lg text-slate-600 dark:text-slate-300 space-y-6 max-w-4xl">
               <p>
                 DYC IT Consulting & Services is a technology-driven consulting firm delivering end-to-end digital transformation solutions. With deep domain expertise and a strong engineering mindset, we empower businesses to modernize systems, increase efficiency, and deliver superior customer experiences.
               </p>
               <p>
                 We don't just write code; we solve business problems. Our team of expert consultants brings over 15 years of industry experience across Banking, FinTech, Retail, and Healthcare sectors.
               </p>
             </div>
           </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-900 rounded-[2.5rem] p-10 text-white shadow-lg"
          >
             <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Target size={32} />
             </div>
             <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
             <p className="text-indigo-100 text-lg leading-relaxed">
               To help organizations accelerate innovation through reliable, scalable, and intelligent technology solutions.
             </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 shadow-lg border border-slate-100 dark:border-slate-700"
          >
             <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 text-pink-500 dark:text-pink-400 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} />
             </div>
             <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our Vision</h3>
             <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
               To be the most trusted technology consulting and solutions partner in the region, known for excellence and integrity.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-900 dark:bg-slate-900 py-24 text-white rounded-t-[3rem] mx-0 md:mx-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-semibold tracking-wide uppercase">Culture</span>
            <h2 className="text-4xl font-bold mt-2">Core Values</h2>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Heart className="text-red-400" />, title: "Integrity", desc: "Do the right thing, always." },
              { icon: <Briefcase className="text-blue-400" />, title: "Accountability", desc: "We own our outcomes." },
              { icon: <Award className="text-yellow-400" />, title: "Excellence", desc: "Deliver quality without compromise." },
              { icon: <Target className="text-green-400" />, title: "Customer Success", desc: "Enable long-term partnerships." },
              { icon: <Eye className="text-purple-400" />, title: "Innovation", desc: "Build what’s next." },
            ].map((val, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="mb-4">{val.icon}</div>
                <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                <p className="text-slate-400">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;