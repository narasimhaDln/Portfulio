import "../Styles/Projects.css"
import { Code, Globe } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-content">
        <h2 className="section-title">My Projects</h2>
        <div className="resume-download">
          <a
            href="https://drive.google.com/file/d/1hb85DulAtcAr6DEXyRAVeDxqGe--Izba/view?usp=sharing"
            download
            className="resume-btn"
          >
            Download My Resume
          </a>
        </div>
      </div>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-500"
            alt="Calculator Project"
            className="project-image"
          />
          <div className="project-content">
            <h3>Calculator Project</h3>
            <p>
              A basic calculator project built using HTML, CSS, and JavaScript.
              This project performs basic calculations and demonstrates a strong
              understanding of front-end development concepts.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/narasimhaDln/calculator-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code /> GitHub
              </a>
              <a
                href="https://calculator-project-xyd9.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe /> Live Demo
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-502"
            alt="Traffic Controller Project"
            className="project-image"
          />
          <div className="project-content">
            <h3>Traffic Controller Project</h3>
            <p>
              Traffic Controller is a modern web application that simulates
              traffic light control and provides real-time traffic flow data
              visualization.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/CoderRoyshub/TrafficController-9061"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code /> GitHub
              </a>
              <a
                href="https://traffic-controller.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
