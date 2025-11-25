import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 rounded-t-[3rem] mt-20 mx-0 md:mx-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                <Rocket size={20} fill="currentColor" />
              </div>
              <span className="font-bold text-xl tracking-tight">DYCnity</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses to transform, optimize, and innovate through world-class technology consulting and enterprise solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>IT Consulting & Advisory</li>
              <li>Software Development</li>
              <li>QA & Test Automation</li>
              <li>Cloud & DevOps</li>
              <li>AI, Data & Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-0.5 text-indigo-400" size={18} />
                <span>123 Business Bay,<br />Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-indigo-400" size={18} />
                <a href="mailto:dyc.itservices@gmail.com" className="hover:text-white">dyc.itservices@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-indigo-400" size={18} />
                <span>+971 566475979</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} DYCnity Consulting & Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;