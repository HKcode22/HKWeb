import { motion } from "framer-motion";
import React from "react";
import { FloatingLogos } from "./components/FloatingLogos";

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const skills = [
  "Python",
  "C++",
  "C",
  "Java",
  "R",
  "SQL",
  "JavaScript",
  "HTML",
  "CSS",
  "JSON",
  "XML",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "ggplot2",
  "dplyr",
  "tidyr",
  "LangChain",
  "OpenAI",
  "LLMs",
  "Ollama",
  "RAG",
  "Docker",
  "Git",
  "Linux",
  "AWS",
  "GCP",
  "Tableau",
  "Power BI",
  "Excel",
  "Google Sheets",
  "Jupyter Notebook",
  "Google Colab",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "REST APIs",
  "Shiny",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "NoSQL",
  "Selenium",
  "JDBC",
  "JSP"
];

const projects = [
  {
    name: "AI Stress Testing Framework",
    url: "https://github.com/harisj739/mit-ai-hackathon",
    description:
      "Adversarial stress-testing framework for LLMs built at the MIT AI Hackathon, with automated pipelines, dashboards, and coverage across multiple models."
  },
  {
    name: "Bay Area Startup Predictive Analysis",
    url: "https://github.com/HKcode22/DSFinalYearProject",
    description:
      "Predictive analytics dashboard surfacing early-stage startup success signals using ML models and interactive visualizations."
  },
  {
    name: "Full-Stack 'Circle' Community App",
    url: "https://github.com/HKcode22/YourCircle",
    description:
      "Full-stack web platform for communities with Java/Spring Boot APIs, Python services, React/Next.js frontend, and OpenAI-powered features."
  },
  {
    name: "Web-based Database Application",
    url: "https://github.com/HKcode22/Database-Application",
    description:
      "Relational database web app built with Java (JDBC, JSP) and JavaScript, from schema design to production-ready queries."
  },
  {
    name: "Walmart Sales Forecasting",
    url: "https://github.com/HKcode22/MLPredictiveAnalysisStoreProject",
    description:
      "Time-series and ML models (Random Forest, XGBoost, LSTM, Prophet, ARIMA) for Walmart sales forecasting and promotional impact analysis."
  }
];

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <div className="noise-overlay" />

      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-mark">HK</span>
            <span className="brand-text">Hamza A. Khan</span>
          </div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#connect">Connect</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <FloatingLogos />
          <div className="hero-gradient" />
          <div className="hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <p className="hero-kicker">
                San Jose, CA · Data Science · AI Systems
              </p>
              <h1>
                Hamza A. Khan —{" "}
                <span className="accent">
                  Data Scientist & AI Solutions Engineer
                </span>
              </h1>
              <p className="hero-subtitle">
                Building resilient AI systems from San Jose, CA — from LLM
                stress testing and quantization to full-stack, production-grade
                ML applications.
              </p>
              <div className="hero-actions">
                <a href="#services" className="btn-primary">
                  Work With Me
                </a>
                <a
                  href="https://github.com/HKcode22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  View GitHub
                </a>
              </div>
              <div className="hero-contact">
                <span>San Jose Bay Area</span>
                <span>·</span>
                <a href="tel:+12097405634">209-740-5634</a>
                <span>·</span>
                <a href="mailto:hk84164@gmail.com">hk84164@gmail.com</a>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          className="section"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <p className="section-kicker">Grit & Persistence</p>
            <h2>The 48-Hour Mindset</h2>
          </div>
          <div className="section-body two-column">
            <p className="muted">
              I don&apos;t just start projects; I finish them. At the MIT AI
              Hackathon, despite my team being out of time and facing constant
              roadblocks, I refused to stop. I pushed through the final hours to
              complete our AI Stress Testing framework. When my mind is set on a
              goal, I don&apos;t give up until it&apos;s delivered.
            </p>
            <div className="about-highlights">
              <div>
                <h3>What I bring</h3>
                <ul>
                  <li>End-to-end ownership from prototype to deployment.</li>
                  <li>
                    Comfort with ambiguity, deadlines, and production
                    constraints.
                  </li>
                  <li>
                    Ability to translate research ideas into working systems.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Recent focus</h3>
                <ul>
                  <li>LLM robustness, adversarial testing, and evaluation.</li>
                  <li>Quantization (SPQR, GPTQ) and efficient inference.</li>
                  <li>Predictive analytics and decision-support dashboards.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="services"
          className="section"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-header">
            <p className="section-kicker">Services</p>
            <h2>Work With Me</h2>
          </div>
          <div className="cards-grid">
            <motion.article
              className="card"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <h3>LLM Optimization</h3>
              <p>
                Quantization strategies like GPTQ and SPQR to compress models
                while preserving accuracy, unlocking efficient inference on
                constrained hardware.
              </p>
              <ul className="card-list">
                <li>Model size reduction with &lt; 1% accuracy loss.</li>
                <li>Benchmarking across tasks and datasets.</li>
                <li>Ollama, custom Python tooling, and GPU workflows.</li>
              </ul>
            </motion.article>

            <motion.article
              className="card"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <h3>Full-Stack AI Applications</h3>
              <p>
                Production-ready AI products using Next.js, Python, and
                FastAPI—bridging robust backends with responsive, modern
                frontends.
              </p>
              <ul className="card-list">
                <li>LLM-powered workflows and assistants.</li>
                <li>Secure APIs, auth, and observability.</li>
                <li>Deployment to AWS, GCP, or custom infrastructure.</li>
              </ul>
            </motion.article>

            <motion.article
              className="card"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <h3>Predictive Analytics</h3>
              <p>
                Custom ML dashboards for business forecasting, experimentation,
                and decision support tailored to your data stack.
              </p>
              <ul className="card-list">
                <li>Time-series forecasting and what-if analysis.</li>
                <li>Interactive visualizations in Tableau, Power BI, or web.</li>
                <li>End-to-end pipelines from ETL to insight delivery.</li>
              </ul>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="section"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-header">
            <p className="section-kicker">Selected Work</p>
            <h2>Projects</h2>
          </div>
          <div className="cards-grid">
            {projects.map((project) => (
              <motion.article
                key={project.name}
                className="card project-card"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  View on GitHub
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="section"
          variants={SECTION_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-header">
            <p className="section-kicker">Capabilities</p>
            <h2>Technical Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className="skill-pill"
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>
      </main>

      <footer id="connect" className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-name">Hamza A. Khan</p>
            <p className="footer-location">San Jose Bay Area</p>
          </div>
          <div className="footer-links">
            <a
              href="mailto:hk84164@gmail.com"
              className="footer-link"
            >
              hk84164@gmail.com
            </a>
            <a href="tel:+12097405634" className="footer-link">
              209-740-5634
            </a>
            <a
              href="https://linkedin.com/in/hamza-khan-ds"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/HKcode22"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
          </div>
        </div>
        <p className="footer-meta">
          Data Scientist & AI Solutions Engineer · LLMs · Full-Stack AI ·
          Predictive Analytics
        </p>
      </footer>
    </div>
  );
};

