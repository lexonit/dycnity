import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Code, Settings, Cloud, BarChart3, Users, 
  CheckCircle2, TrendingUp, Globe
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const dataSuccess = [
  { name: 'Success', value: 98 },
  { name: 'Remaining', value: 2 },
];
const dataGrowth = [
  { name: 'Q1', value: 400 },
  { name: 'Q2', value: 600 },
  { name: 'Q3', value: 800 },
  { name: 'Q4', value: 1200 },
];

const COLORS = ['#10B981', '#E2E8F0'];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-purple-200 via-pink-200 to-indigo-200 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-full blur-3xl opacity-50 -z-10" />
      
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-20 lg:py-32 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-8">
            Empowering Businesses With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              Intelligent IT Solutions
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            At DYC, we help organizations transform, optimize, and innovate through world-class technology consulting, enterprise solutions, and scalable digital platforms.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 hover:shadow-xl transition-all flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Dashboard / Stats Section (Visual Reference Match) */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/50 dark:border-slate-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Stat Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-slate-700 dark:text-slate-200">Client Satisfaction</h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded-full font-bold">+18%</span>
              </div>
              <div className="h-40 relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={dataSuccess}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      startAngle={90}
                      endAngle={-270}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {dataSuccess.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold text-slate-800 dark:text-white">98%</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Success</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 text-center">Based on 500+ delivered projects</p>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all"
            >
               <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-slate-700 dark:text-slate-200">Business Impact</h3>
                <TrendingUp size={20} className="text-indigo-500" />
              </div>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataGrowth}>
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                     <Tooltip 
                        cursor={{fill: 'transparent'}} 
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                     />
                    <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 text-center">Optimizing efficiency across quarters</p>
            </motion.div>

            {/* Stat Card 3 (Text based) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-indigo-900 dark:to-slate-900 p-8 rounded-3xl shadow-lg text-white flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold mb-2">Why DYC?</h3>
              <ul className="space-y-4 mt-4">
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg"><Users size={16} /></div>
                  <span className="text-sm">15+ Years Expert Team</span>
                </li>
                 <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg"><Globe size={16} /></div>
                  <span className="text-sm">Global Delivery Model</span>
                </li>
                 <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg"><ShieldCheck size={16} /></div>
                  <span className="text-sm">Enterprise Security</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Offerings */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Our Core Offerings" subtitle="What We Do" />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { 
              icon: <Settings className="text-purple-500" size={32} />, 
              title: "IT Consulting", 
              desc: "Enterprise transformation, solution architecture, IT strategy, and project governance." 
            },
            { 
              icon: <Code className="text-blue-500" size={32} />, 
              title: "Software Development", 
              desc: "Mobile, web, API, ERP extensions, enterprise systems, and product engineering." 
            },
            { 
              icon: <CheckCircle2 className="text-green-500" size={32} />, 
              title: "QA & Automation", 
              desc: "Manual, automation, performance, security, TCOE setup, and DevOps CI/CD testing." 
            },
            { 
              icon: <Cloud className="text-sky-500" size={32} />, 
              title: "Cloud & DevOps", 
              desc: "Cloud migration, containerization, infrastructure automation, and monitoring." 
            },
            { 
              icon: <BarChart3 className="text-pink-500" size={32} />, 
              title: "AI & Analytics", 
              desc: "AI-powered platforms, data strategy, dashboards, and ML automation." 
            },
            { 
              icon: <Users className="text-orange-500" size={32} />, 
              title: "Staff Augmentation", 
              desc: "Flexible engagement models providing expert talent for your critical projects." 
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-200/30 dark:bg-indigo-900/20 blur-3xl rounded-full -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
               <SectionHeader title="Consult. Build. Deliver. Improve." subtitle="Our Approach" align="left" />
               <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                 We combine technology with business understanding to deliver scalable, future-ready solutions. Our agile methodology ensures transparency and measurable outcomes at every stage.
               </p>
               <ul className="space-y-4">
                 {['Agile Project Execution', 'Cost-effective Delivery Models', 'Full-stack Expertise'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 font-medium text-slate-800 dark:text-slate-200">
                     <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                       <CheckCircle2 size={14} />
                     </div>
                     {item}
                   </li>
                 ))}
               </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 mt-8">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg border border-slate-50 dark:border-slate-700">
                   <h4 className="font-bold text-3xl text-indigo-600 dark:text-indigo-400 mb-1">15+</h4>
                   <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Years Experience</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-indigo-600 p-6 rounded-3xl shadow-lg text-white">
                   <h4 className="font-bold text-3xl mb-1">200+</h4>
                   <p className="text-sm opacity-80 font-medium">Projects Delivered</p>
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-pink-500 p-6 rounded-3xl shadow-lg text-white">
                   <h4 className="font-bold text-3xl mb-1">50+</h4>
                   <p className="text-sm opacity-80 font-medium">Expert Consultants</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg border border-slate-50 dark:border-slate-700">
                   <h4 className="font-bold text-3xl text-pink-500 mb-1">10+</h4>
                   <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Global Locations</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;