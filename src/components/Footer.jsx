import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <div className="text-gray-600 dark:text-gray-400 text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>

        {/* Center: Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
          >
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-400" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-pink-900 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-all duration-300"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;