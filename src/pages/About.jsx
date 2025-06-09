import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Brain, 
  Star, 
  GitFork, 
  Eye,
  Trophy,
  Calendar,
  MapPin,
  Heart
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', level: 80, color: 'bg-yellow-500' },
    { name: 'Figma', level: 80, color: 'bg-pink-500' },
    { name: 'Git', level: 80, color: 'bg-orange-500' },
    { name: 'React', level: 75, color: 'bg-blue-500' },
    { name: 'C++', level: 70, color: 'bg-blue-600' },
    { name: 'JavaScript', level: 55, color: 'bg-yellow-400' },
    { name: 'AI/ML', level: 50, color: 'bg-purple-500' }
  ];

  const techStack = [
    { category: 'Frontend', icon: Globe, techs: ['HTML', 'React', 'TypeScript', 'Tailwind CSS'] },
    { category: 'AI/ML', icon: Brain, techs: ['TensorFlow', 'Scikit-learn', 'OpenCV'] },
    { category: 'UI/UX', icon: Eye, techs: ['Figma'] }
  ];

  const githubStats = {
    totalRepos: 42,
    totalStars: 128,
    totalForks: 35,
    contributions: 847
  };

  const interests = [
    { icon: Code, title: 'Front-End Web Development', description: 'Creating responsive and interactive web applications' },
    { icon: Brain, title: 'Artificial Intelligence', description: 'Exploring machine learning and deep learning concepts' },
    { icon: Eye, title: 'UI/UX Design', description: 'Designing intuitive and visually appealing user interfaces' },
    { icon: Globe, title: 'Open Source', description: 'Contributing to community projects and sharing knowledge' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A curious Informatics student passionate about AI, front-end development, and continuously learning through hands-on projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 justify-center items-center">
          {/* Personal Info */}
          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-xl w-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Hi, I’m Bintang — an Informatics Engineering student at Institut Teknologi Sumatera.
                  I’m passionate about exploring how technology can solve real-world problems, especially
                  through the lens of Artificial Intelligence and Machine Learning.
                </p>
                <p>
                  While AI is my main area of interest, I also enjoy diving into front-end development and UI/UX design.
                  I find joy in building clean, functional interfaces and understanding how users interact with digital products.
                </p>
                <p>
                  I’m a curious learner who’s always excited to try new things and grow through hands-on projects. 
                  This portfolio is a place where I share what I’ve built, what I’m learning, and the journey I’m on as a developer.
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Bekasi, Indonesia</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      {/* <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span> */}
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Technology Stack</h3>
              <div className="space-y-6">
                {techStack.map((stack) => (
                  <div key={stack.category} className="space-y-3">
                    <div className="flex items-center">
                      <stack.icon className="w-5 h-5 text-blue-600 mr-3" />
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">{stack.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-8">
                      {stack.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What I'm Passionate About</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                  <interest.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {interest.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together!</h3>
          <p className="text-lg mb-6 opacity-90">
            I'm always excited to take on new challenges and collaborate on interesting projects.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;