import React from 'react';
import { Settings, Code, Shield, Cloud, Database, Users, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const ServiceDetailCard: React.FC<{
  title: string;
  items: string[];
  icon: React.ReactNode;
  colorClass: string;
  darkColorClass: string;
}> = ({ title, items, icon, colorClass, darkColorClass }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-lg border border-slate-100 dark:border-slate-700 h-full flex flex-col group hover:border-indigo-100 dark:hover:border-indigo-900 transition-all"
  >
    <div className={`w-14 h-14 ${colorClass} ${darkColorClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{title}</h3>
    <ul className="space-y-3 flex-grow">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
          <Check size={18} className="text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
          <span className="text-sm font-medium">{item}</span>
        </li>
      ))}
    </ul>
    <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-700">
      <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:gap-3 transition-all">
        Learn More <ArrowRight size={16} />
      </button>
    </div>
  </motion.div>
);

const Services: React.FC = () => {
  const allServices = [
    {
      title: "IT Consulting & Advisory",
      icon: <Settings className="text-purple-600 dark:text-purple-400" size={28} />,
      colorClass: "bg-purple-100",
      darkColorClass: "dark:bg-purple-900/30",
      items: [
        "Digital transformation roadmaps",
        "Solution architecture & system design",
        "IT governance & PMO setup",
        "Vendor evaluation & RFP management",
        "ERP advisory (Oracle Fusion, SAP)",
        "Cloud strategy & modernization"
      ]
    },
    {
      title: "Custom Software Development",
      icon: <Code className="text-blue-600 dark:text-blue-400" size={28} />,
      colorClass: "bg-blue-100",
      darkColorClass: "dark:bg-blue-900/30",
      items: [
        "Web apps (React, Angular, .NET, Node.js)",
        "Mobile apps (iOS, Android, Flutter)",
        "API development & microservices",
        "Legacy modernization",
        "Enterprise integrations",
        "FinTech solutions"
      ]
    },
    {
      title: "QA & Test Automation",
      icon: <Shield className="text-green-600 dark:text-green-400" size={28} />,
      colorClass: "bg-green-100",
      darkColorClass: "dark:bg-green-900/30",
      items: [
        "End-to-end QA outsourcing",
        "TCOE setup & test governance",
        "Automation (Playwright, Selenium)",
        "API & Performance testing",
        "Security testing & compliance audits",
        "Test data management"
      ]
    },
    {
      title: "Cloud & DevOps Engineering",
      icon: <Cloud className="text-sky-600 dark:text-sky-400" size={28} />,
      colorClass: "bg-sky-100",
      darkColorClass: "dark:bg-sky-900/30",
      items: [
        "AWS / Azure cloud migration",
        "Kubernetes & containerization",
        "CI/CD pipelines (GitHub, Jenkins)",
        "Automated deployments",
        "Monitoring & observability setup",
        "Serverless development"
      ]
    },
    {
      title: "Data, AI & Analytics",
      icon: <Database className="text-pink-600 dark:text-pink-400" size={28} />,
      colorClass: "bg-pink-100",
      darkColorClass: "dark:bg-pink-900/30",
      items: [
        "BI dashboards (Power BI, Tableau)",
        "Data engineering & ETL pipelines",
        "AI chatbot automation",
        "Machine learning models",
        "Process automation (RPA tools)"
      ]
    },
    {
      title: "Tech Talent & Managed Services",
      icon: <Users className="text-orange-600 dark:text-orange-400" size={28} />,
      colorClass: "bg-orange-100",
      darkColorClass: "dark:bg-orange-900/30",
      items: [
        "Onsite/offshore staffing",
        "Dedicated developers & QA teams",
        "Managed IT support",
        "24/7 operations & maintenance",
        "Flexible engagement models"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="DYCnity Services - IT Consulting, Software Development & Cloud Solutions"
        description="Explore DYCnity's comprehensive IT services: IT consulting, custom software development, QA automation, cloud & DevOps, AI & data analytics, and managed tech talent solutions."
        keywords="IT consulting services, software development, QA automation, cloud migration, DevOps services, AI solutions, data analytics, managed IT services, tech staffing"
        canonical="https://dycnity.com/services"
      />
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="bg-indigo-900 dark:bg-slate-900 py-20 text-center relative overflow-hidden rounded-b-[3rem] mb-16 mx-0 md:mx-4 text-white border-b border-indigo-800 dark:border-slate-800">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-indigo-200 text-lg">Comprehensive technology solutions tailored to your business needs.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader title="End-to-End Capabilities" subtitle="Expertise" />
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allServices.map((service, idx) => (
            <ServiceDetailCard key={idx} {...service} />
          ))}
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default Services;