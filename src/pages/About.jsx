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
    { name: 'Python', level: 90, color: 'bg-yellow-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-400' },
    { name: 'React', level: 88, color: 'bg-blue-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'MongoDB', level: 75, color: 'bg-green-600' },
    { name: 'C++', level: 70, color: 'bg-blue-600' },
    { name: 'AI/ML', level: 65, color: 'bg-purple-500' },
    { name: 'Git', level: 85, color: 'bg-orange-500' }
  ];

  const techStack = [
    { category: 'Frontend', icon: Globe, techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', icon: Database, techs: ['Node.js', 'Python', 'Express', 'Django', 'FastAPI'] },
    { category: 'Database', icon: Database, techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
    { category: 'AI/ML', icon: Brain, techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API'] }
  ];

  const githubStats = {
    totalRepos: 42,
    totalStars: 128,
    totalForks: 35,
    contributions: 847
  };

  const interests = [
    { icon: Code, title: 'Web Development', description: 'Creating responsive and interactive web applications' },
    { icon: Brain, title: 'Artificial Intelligence', description: 'Exploring machine learning and deep learning concepts' },
    { icon: Database, title: 'Database Design', description: 'Optimizing data structures and query performance' },
    { icon: Globe, title: 'Open Source', description: 'Contributing to community projects and sharing knowledge' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a passionate full-stack developer with over 3 years of experience in creating 
                  web applications that solve real-world problems. My journey began with curiosity 
                  about how websites work, and it has evolved into a deep passion for technology and innovation.
                </p>
                <p>
                  I specialize in modern web technologies and have a particular interest in 
                  artificial intelligence and machine learning. I believe in writing clean, 
                  maintainable code and creating user experiences that truly matter.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge through blog posts and tutorials.
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Your City, Country</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Available for work</span>
                </div>
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Trophy className="w-6 h-6 text-yellow-500 mr-3" />
                GitHub Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Code className="w-6 h-6 text-blue-500 mr-2" />
                    <span className="text-2xl font-bold text-blue-600">{githubStats.totalRepos}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Repositories</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-yellow-500 mr-2" />
                    <span className="text-2xl font-bold text-yellow-600">{githubStats.totalStars}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stars</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <GitFork className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-2xl font-bold text-green-600">{githubStats.totalForks}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Forks</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Eye className="w-6 h-6 text-purple-500 mr-2" />
                    <span className="text-2xl font-bold text-purple-600">{githubStats.contributions}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Contributions</p>
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
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
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