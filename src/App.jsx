import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiScikitlearn,
  SiTensorflow,
  SiNumpy,
  SiOpencv, 
  SiBookstack} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <SiJavascript /> },
  { name: "C/C++", icon: <SiCplusplus /> },
  { name: "Machine Learning", icon: <SiScikitlearn /> },
  { name: "Deep Learning", icon: <SiTensorflow /> },
  { name: "NLP", icon: <SiNumpy /> }, 
  { name: "Computer Vision", icon: <SiOpencv /> },
  { name: "More to Learn", icon: <SiBookstack /> },

];

const projects = [
  {
    name: "OptiCode",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnv-TbMYKH3hV6PZPG1ED4lRXNS2Upf701Zg&s",
    description: "AI Based Code Reviewer with GeminiAI API that reads the code and gives error and correct code and optimization.",
    codeLink: "https://github.com/jagrat-phugat/OptiCode",
    liveLink: "",
  },
  {
    name: "Code Sphere",
    image: "https://assets.wpdeveloper.com/2022/03/Best-Online-Code-Editor-To-Use-In-2022.png",
    description: "Online Code Editor IDE that takes compiler from node.js. Different languages like JavaScript, HTML can be compiled and saved on database.",
    codeLink: "https://github.com/jagrat-phugat/Code-Sphere",
    liveLink: "https://codesphere-udb2.onrender.com",
  },
  {
    name: "UserFlow-Management",
    image: "data:image/jpeg;base64,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",
    description: "A personal portfolio built with React and Framer Motion.The UserFlow Management is a web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on user data. It is built using Node.js, Express, and EJS templating engine for server-side rendering.",
    codeLink: "https://github.com/jagrat-phugat/UserFlow-Management",
    liveLink: "",
  },
  {
    name: "Fit Sense",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFK-ocrNedgElTKU1HWWwdj1j1ELU1rUGkg&s",
    description: "A full-featured Fitness Tracker App that helps users stay on top of their health goals. With integrated BMI calculation, contact support, and plans for future upgrades like online courses and calorie tracking, this app is your digital fitness companion!",
    codeLink: "https://github.com/jagrat-phugat/FitSense",
    liveLink: "",
  },
  {
    name: "Stone Paper Scissors",
    image: "data:image/png;base64,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",
    description: "Game of Stone Paper Scissors based on HTML, CSS and JavaScript.",
    codeLink: "https://github.com/jagrat-phugat/Stone-Paper-Scissor",
    liveLink: "",
  },
  {
    name: "Crypto Quant",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcz5L-MLOOnEOUk31hOPcI48VbvJWFppxdQ&s",
    description: "A quantitative analysis and trading strategy simulation platform for cryptocurrencies. Built with a focus on data-driven insights, visualization, and strategy backtesting to help you explore market behavior and develop intelligent crypto trading strategies.",
    codeLink: "https://github.com/jagrat-phugat/CryptoQuant",
    liveLink: "",
  },
  {
    name: "Face Metrics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxB1LTINCLerCydTX0bWq74ujKHkZgBAZiQ&s",
    description: "This project is an AI-powered Age and Gender Recognition system using deep learning. It utilizes Convolutional Neural Networks (CNNs) to predict the age and gender of individuals based on facial images.",
    codeLink: "https://github.com/jagrat-phugat/FaceMetrics",
    liveLink: "",
  },
  {
    name: "Spell Fix",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9JlHSqF9KyPGZ0IjtzgDddECUE9nxKKHTw&s",
    description: "AutoCorrector is an NLP-based spelling correction system that utilizes Natural Language Processing techniques to identify and correct misspelled words in text input. This project explores different approaches to spelling correction, including frequency-based methods and probabilistic models.",
    codeLink: "https://github.com/jagrat-phugat/SpellFix",
    liveLink: "",
  },
  {
    name: "Stock Vision",
    image: "data:image/jpeg;base64,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",
    description: "This project aims to predict stock prices using machine learning techniques. It leverages historical stock market data to build predictive models that assist traders and investors in making informed decisions.",
    codeLink: "https://github.com/jagrat-phugat/StockVision",
    liveLink: "",
  },

];

const experiences = [
  {
    role: "Software Development Intern",
    company: "BlueStock.in",
    duration: "Oct 2024 - Dec 2024",
    description: "Built responsive web components using React and Tailwind CSS. Collaborated with backend team for API integrations. Done web scraping and did data analysis on wide data of Finance and Stocks."
  }
];

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
        <ul className="flex justify-center space-x-6 p-4 text-lg">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center flex-col pt-24">
        <motion.img
          src="../images/avatar.jpg"
          alt="Avatar"
          className="rounded-full mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl font-bold"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm JAGRAT PHUGAT
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mt-2"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I'm a passionate developer and AI/ML Enthusiaist.
        </motion.p>
      </section>

      <section id="about" className="py-20 px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-300">
            <li>🎓 Enthusiastic learner with a love for coding</li>
            <li>💻 Specialized in MERN Stack Web Development</li>
            <li>🌐 Enjoys working JavaScript and NodeJS</li>
            <li>🤖 AI/ML Enthusiast with good knowledge in scikit-learn and keras.</li>
            <li>💻 Practicing DSA and Core SDE concepts.</li>
            <li>📚 Always exploring new technologies</li>
          </ul>
        </motion.div>
      </section>

      <section id="skills" className="py-20 px-8">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center text-2xl">
          {skills.map(skill => (
            <div key={skill.name} className="flex flex-col items-center hover:text-cyan-400 transition-transform transform hover:scale-110">
              {skill.icon}
              <span className="text-sm mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20 px-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map(project => (
            <motion.div
              key={project.name}
              className="bg-gray-800 p-4 rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.name} className="rounded mb-4" />
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <div className="flex space-x-4">
                <a href={project.codeLink} target="_blank" className="text-cyan-400 hover:underline">Source Code</a>
                <a href={project.liveLink} target="_blank" className="text-cyan-400 hover:underline">Live Site</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="py-20 px-8">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
              <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="education" className="py-20 px-8">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <ul className="space-y-4 text-gray-300">
          <li><strong>Graduation:</strong>Doing B.Tech in Mechanical Engineering - IIT Ropar</li>
          <li><strong>Senior Secondary:</strong> Taxsila Public School, 2022</li>
          <li><strong>Secondary:</strong> Taxsila Public School, 2020</li>
        </ul>
      </section>

      <section id="contact" className="py-20 px-8">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="flex space-x-8 text-3xl justify-center">
          <a href="https://github.com/jagrat-phugat" target="_blank" className="hover:text-cyan-400"><FaGithub /></a>
          <a href="https://linkedin.com/in/jagrat-phugat-916aa4253" target="_blank" className="hover:text-cyan-400"><FaLinkedin /></a>
          <a href="mailto:jagratphugat111@gmail.com" className="hover:text-cyan-400"><FaEnvelope /></a>
        </div>
      </section>

      <footer className="bg-gray-800 py-6 text-center text-gray-400">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Thank you for visiting!
        </motion.p>
      </footer>
    </div>
  );
}
