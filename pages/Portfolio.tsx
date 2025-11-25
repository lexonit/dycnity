import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  desc: string;
  image: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "FinTech Mobile App Modernization",
      category: "Mobile Development",
      desc: "Delivered a new-gen mobile banking experience using scalable microservices, automation, and cloud hosting.",
      image: "https://picsum.photos/id/1/800/600",
      tags: ["React Native", "Node.js", "AWS"]
    },
    {
      title: "ERP Implementation",
      category: "Enterprise Systems",
      desc: "Supported a large enterprise in implementing Oracle Fusion with QA governance, reducing process time by 40%.",
      image: "https://picsum.photos/id/3/800/600",
      tags: ["Oracle Fusion", "QA", "Consulting"]
    },
    {
      title: "Automation Framework Setup",
      category: "QA & Testing",
      desc: "Established a Test Center of Excellence using Playwright & Appium across web, API & mobile platforms.",
      image: "https://picsum.photos/id/180/800/600",
      tags: ["Playwright", "Appium", "CI/CD"]
    },
    {
      title: "E-Commerce Analytics Dashboard",
      category: "Data & AI",
      desc: "Built a real-time sales dashboard with predictive ML models for inventory management.",
      image: "https://picsum.photos/id/20/800/600",
      tags: ["Python", "PowerBI", "Azure"]
    }
  ];

  return (
    <div className="pt-10 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <SectionHeader title="Our Recent Work" subtitle="Portfolio" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="group relative bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600 px-2 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Client Logo Strip (Visual Filler) */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 font-medium mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
            >
               {/* Placeholders for logos */}
               <div className="text-2xl font-bold font-sans text-slate-800 dark:text-slate-200">Acme Corp</div>
               <div className="text-2xl font-bold font-sans text-slate-800 dark:text-slate-200">GlobalBank</div>
               <div className="text-2xl font-bold font-sans text-slate-800 dark:text-slate-200">TechFlow</div>
               <div className="text-2xl font-bold font-sans text-slate-800 dark:text-slate-200">DataSys</div>
               <div className="text-2xl font-bold font-sans text-slate-800 dark:text-slate-200">NextGen</div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;