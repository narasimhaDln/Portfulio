import { ArrowDown } from 'lucide-react';
import '../Styles/Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Devadurgam Lakshmi Narasimha</h1>
        <p>Full Stack Web Developer & Design Thinker
        </p>
        <button 
          onClick={scrollToProjects}
          className="scroll-button"
          aria-label="Scroll to projects"
        >
          <br></br>
          <ArrowDown className="scroll-icon" />
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;