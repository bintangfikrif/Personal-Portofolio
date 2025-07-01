import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <div className="text-gray-600 dark:text-gray-400 text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} Bintang Fikri Fauzan. All rights reserved.
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