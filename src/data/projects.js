export const projects = [
  {
    id: 1,
    title: "Deep Learning for Deforestation Forecasting",
    description: "This dashboard provides a forecast for Indonesian deforestation by comparing advanced time-series models. Our results demonstrate that the GRU deep learning model delivers significantly more accurate predictions than the traditional ARIMAX statistical method for this complex environmental data.",
    image: "project1.png",
    technologies: ["Python", "Jupyter Notebook", "Streamlit", "TensorFlow", "Scikit-learn", "Seaborn", "Pandas"],
    category: "AI/ML",
    githubUrl: "https://github.com/bintangfikrif/Unnamed-Final_Project",
    liveUrl: "https://deforestation-analysis.streamlit.app/",
    featured: true,
    status: "Completed",
    year: "2025"
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A dynamic and fully responsive personal portfolio built with React and Tailwind CSS. This single-page application smoothly scrolls through dedicated sections for an introduction, about me, projects, and contact information. It features a clean, modern design with a dark mode toggle, and showcases a filterable and searchable gallery of projects to highlight skills and experience in web development.",
    image: "project2.png",
    technologies: ["React", "Tailwind CSS", "Lucide", "Framer Motion", "Post CSS"],
    category: "Web App",
    githubUrl: "https://github.com/bintangfikrif/Personal-Portofolio",
    liveUrl: "https://your-ai-chat-demo.vercel.app",
    featured: true,
    status: "Completed",
    year: "2025"
  },
  {
    id: 3,
    title: "Real-Time rPPG and Respiration Rate Tracker",
    description: "This project is a real-time health tracker that uses a webcam to measure heart rate and respiration rate without any physical contact. It analyzes subtle color changes on the forehead to estimate heart rate (rPPG) and tracks shoulder movements with MediaPipe to determine breathing rate. The Python application displays the live video, physiological signals, and calculated vitals in a user-friendly interface.",
    image: "project3.png",
    technologies: ["Python", "OpenCV", "Mediapipe", "PyQT5"],
    category: "Computer Vision",
    githubUrl: "https://github.com/bintangfikrif/DSP-Final-Project",
    featured: true,
    status: "Completed",
    year: "2025"
  },
  {
    id: 4,
    title: "Web Store App",
    description: "This is a ReactJS-based e-commerce web project that allows users to add items to the cart and proceed to checkout. Product data is retrieved from the Fake Store API.",
    image: "project4.png",
    technologies: ["React", "Fake Store API", "Context API", "CSS"],
    category: "Web App",
    githubUrl: "https://github.com/bintangfikrif/uts_pemrograman_web_122140008",
    liveUrl: "https://uts-pemrograman-web-122140008.vercel.app/",
    featured: false,
    status: "Completed",
    year: "2025"
  },
  {
    id: 5,
    title: "Stunt-Free App Design",
    description: "A mobile application design featuring various advanced elements is created to assist parents in preventing stunting in children. The design focuses on user-friendly navigation, informative content layout, and intuitive features to support early childhood growth and development.",
    image: "project5.png",
    technologies: ["Figma"],
    category: "UI/UX",
    liveUrl: "https://www.figma.com/proto/q8qSdY5C3qVNTliR550omZ/Stunt-Free?node-id=212-295&p=f&t=Eta07FcpVvPJKe7U-1&scaling=scale-down&content-scaling=fixed&page-id=156%3A181&starting-point-node-id=212%3A295",
    featured: false,
    status: "Completed",
    year: "2024"
  },
  {
    id: 6,
    title: "Ins-Edu App Design",
    description: "Ins-Edu is a skill development application concept designed specifically for Information Technology students to support self-learning and practical skill enhancement. The design focuses on an intuitive interface that integrates learning guides, mentorship access, AI-based consultations, and interactive exercises to prepare students for the evolving tech industry",
    image: "project6.png",
    technologies: ["Figma", "Canva"],
    category: "UI/UX",
    liveUrl: "https://www.figma.com/proto/fPc4hkrfjYDNpkfOzfTJQl/InsEdu?node-id=21-363&p=f&t=0tMc7ZEEQc8DlrOt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=21%3A363",
    featured: false,
    status: "Completed",
    year: "2024"
  },
  {
    id: 7,
    title: "Dukun vs Demit Game",
    description: "Dukun vs Demit (DvD) is a tower defense game developed in Python using the Pygame library. The game's structure is object-oriented, with classes for game elements like Dukun (the player character), Demit (the enemies), and Pendopo (the base to be defended). Key gameplay mechanics include aiming and shooting projectiles, managing resources like money and health, and progressing through increasingly difficult levels.",
    image: "project7.png",
    technologies: ["Python", "Pygame"],
    category: "Game",
    githubUrl: "https://github.com/TawakkalM/Koentji-Production",
    featured: false,
    status: "Completed",
    year: "2024"
  },
  {
    id: 8,
    title: "Personal Book Management Web",
    description: "Personal Book Management is a React-based web application design that enables users to log, organize, and track books they own, are currently reading, or plan to buy. The design features a clean and intuitive user interface, leveraging modern capabilities of React for a seamless experience.",
    image: "project8.png",
    technologies: ["React", "React Router", "CSS", "Context API"],
    category: "Web App",
    githubUrl: "https://github.com/bintangfikrif/pemrograman_web_itera_122140008/tree/main/Bintangfikrifauzan_122140008_pertemuan3",
    liveUrl: "https://aplikasi-manajemen-buku.vercel.app/",
    featured: false,
    status: "Completed",
    year: "2025"
  },
  {
    id: 9,
    title: "Student Financial Tracker",
    description: "Student Financial Tracker is a web application design created to help students manage their personal finances with ease. It allows users to record income and expenses, set monthly budgets, and view financial visualizations through charts to monitor their spending habits.",
    image: "project9.png",
    technologies: ["React", "React Router", "CSS", "Local Storage API"],
    category: "Web App",
    githubUrl: "https://github.com/bintangfikrif/pemrograman_web_itera_122140008/tree/main/Bintangfikrifauzan_122140008_pertemuan2/tugas",
    liveUrl: "https://tracker-keuangan.vercel.app/",
    featured: false,
    status: "Completed",
    year: "2025"
  }
];

export const categories = [
  "All",
  "UI/UX",
  "Web App",
  "AI/ML",
  "Computer Vision",
  "Game"
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