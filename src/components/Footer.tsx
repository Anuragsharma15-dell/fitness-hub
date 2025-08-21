import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-emerald-400 mb-4">
              <Activity size={28} />
              <span className="text-xl font-bold">FitWell Hub</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted source for fitness, nutrition, and wellness advice. We provide evidence-based information to help you achieve your health goals naturally and sustainably.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Fitness Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Nutrition</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Wellness</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Get the latest fitness and wellness tips delivered to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-white"
              />
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors font-medium flex items-center space-x-2">
                <Mail size={16} />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 FitWell Hub. All rights reserved. | Made with ❤️ for your health journey.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;