import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Instagram, 
  Github, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question, proposal, or just want to say hello? Reach out via social links below!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;