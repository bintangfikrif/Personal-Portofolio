export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration using Stripe.",
    longDescription: "This comprehensive e-commerce platform features a modern React frontend with Redux for state management, Node.js/Express backend, and MongoDB database. Includes admin dashboard, inventory management, order tracking, and secure payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT", "Tailwind CSS"],
    category: "Full Stack",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.netlify.app",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "An intelligent chatbot application powered by OpenAI's GPT API with real-time messaging and conversation history.",
    longDescription: "A sophisticated chat application that integrates OpenAI's GPT API to provide intelligent responses. Features include real-time messaging with Socket.io, conversation history, user authentication, and customizable chat themes.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Python", "FastAPI", "OpenAI API", "Socket.io", "PostgreSQL", "Docker"],
    category: "AI/ML",
    githubUrl: "https://github.com/yourusername/ai-chat-app",
    liveUrl: "https://your-ai-chat-demo.vercel.app",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "A collaborative project management tool with drag-and-drop functionality, team collaboration, and real-time updates.",
    longDescription: "A comprehensive project management solution featuring Kanban boards, task assignment, deadline tracking, team collaboration tools, and detailed analytics. Built with modern React patterns and real-time synchronization.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
    category: "Web App",
    githubUrl: "https://github.com/yourusername/task-management",
    liveUrl: "https://your-task-manager-demo.netlify.app",
    featured: true,
    status: "Completed",
    year: "2023"
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    longDescription: "A beautiful weather application that provides accurate forecasts using multiple weather APIs. Features include geolocation support, interactive weather maps, historical data, and customizable weather alerts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "JavaScript", "Weather API", "Chart.js", "Leaflet", "Vuetify"],
    category: "Web App",
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://your-weather-app-demo.netlify.app",
    featured: false,
    status: "Completed",
    year: "2023"
  },
  {
    id: 5,
    title: "Cryptocurrency Tracker",
    description: "Real-time cryptocurrency price tracking with portfolio management, price alerts, and market analysis tools.",
    longDescription: "A comprehensive crypto tracking application with real-time price updates, portfolio management, price alerts, market analysis, and historical chart data. Integrates with multiple cryptocurrency APIs for accurate data.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Python", "Django", "CoinGecko API", "Chart.js", "Redis", "Celery"],
    category: "Full Stack",
    githubUrl: "https://github.com/yourusername/crypto-tracker",
    liveUrl: "https://your-crypto-tracker-demo.vercel.app",
    featured: false,
    status: "Completed",
    year: "2023"
  },
  {
    id: 6,
    title: "Machine Learning Model API",
    description: "A REST API service for deploying and serving machine learning models with model versioning and monitoring.",
    longDescription: "A robust ML model serving platform built with FastAPI and Docker. Features include model versioning, A/B testing, performance monitoring, automatic scaling, and comprehensive API documentation.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "FastAPI", "TensorFlow", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
    category: "AI/ML",
    githubUrl: "https://github.com/yourusername/ml-api-service",
    liveUrl: "#",
    featured: false,
    status: "In Progress",
    year: "2024"
  }
];

export const categories = [
  "All",
  "Full Stack",
  "Web App",
  "AI/ML",
  "Mobile"
];

export const technologies = [
  "React",
  "Vue.js",
  "Node.js",
  "Python",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Firebase"
];