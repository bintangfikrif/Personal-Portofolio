import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const handleGoHome = () => {
    // Scroll to home section if available, otherwise redirect to "/"
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 flex flex-col items-center">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mb-6" />
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={handleGoHome}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;