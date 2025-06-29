import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  User, 
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
// Import library EmailJS
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_k284i0a';
    const templateID = 'template_b5n6uqb';
    const userID = '3ixIUjN82P2XldWLU';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus({ submitted: true, success: true, message: 'Message Sent!' });
        setFormData({ name: '', email: '', message: '' }); 
      }, (err) => {
        console.log('FAILED...', err);
        setFormStatus({ submitted: true, success: false, message: 'Failed to send message. Please try again.' });
      });
  };

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
            Have any questions or want to work together? Feel free to reach out through the form below or connect with me on social media below.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>

           {/* Form Status Message */}
           {formStatus.submitted && (
            <div className={`mt-6 p-4 rounded-lg flex items-center ${formStatus.success ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
              {formStatus.success ? 
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" /> :
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3" />
              }
              <p className={`${formStatus.success ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                {formStatus.message}
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;