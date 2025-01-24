import { User, Briefcase, Code } from 'lucide-react';
import '../Styles/About.css';
import profile from "../assets/profile.jpg"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <img
            src={profile}
            alt="Profile"
            className="about-image"
          />
          <div className="about-info">
            <h3 className="section-subtitle">My Journey</h3>
            <div className="info-item">
              <User className="info-icon" />
              <p>
                I am a passionate developer eager to build modern web
                applications. As a fresher, I have honed my skills through
                hands-on projects and hackathons.
              </p>
            </div>
            <div className="info-item">
              <Briefcase className="info-icon" />
              <p>
                My focus is on creating clean, efficient, and user-friendly
                solutions that solve real-world problems.
              </p>
            </div>
            <div className="info-item">
              <Code className="info-icon" />
              <p>
                I'm constantly learning and staying up-to-date with the latest
                technologies and best practices in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;