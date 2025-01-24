import { Code, Globe, ExternalLink } from 'lucide-react';
import "../Styles/Projects.css"

const projects = [
  {
    title: "Calculator Project",
    description: "A sophisticated calculator application built with modern web technologies. Features include advanced calculations, keyboard support, and a sleek design that adapts to any device.",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=1000",
    tags: [ "JavaScript", "CSS", "Responsive Design"],
    github: "https://github.com/narasimhaDln/calculator-project",
    demo: "https://calculator-project-xyd9.vercel.app/",
    featured: true
  },
  {
    title: "Tic Tac Toe",
    description: "An interactive Tic Tac Toe game built with React. Features include real-time gameplay, intelligent move validation, score tracking, and a beautiful responsive interface.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=1000",
    tags: ["React","Hooks", "Game Logic","HTML5",'CSS3'],
    github: "https://github.com/narasimhaDln/Portfulio/tree/main/Game/tic-tac-toe",
    demo: "https://portfulio-pcu8.vercel.app/",
    featured: true
  }
];

function App() {
  return (
    <div className="app">
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-description">
            Explore my latest work and personal projects. Each project represents my passion for creating 
            meaningful and innovative solutions.
          </p>
          <a
            href="https://drive.google.com/file/d/1hb85DulAtcAr6DEXyRAVeDxqGe--Izba/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            <ExternalLink className="button-icon" />
            Download Resume
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay" />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    <Code className="button-icon" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-button"
                  >
                    <Globe className="button-icon" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;