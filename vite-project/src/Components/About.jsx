import "../Styles/About.css"
const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
            alt="Profile"
            className="about-image"
          />
          <div>
            <h3 className="section-subtitle">My Journey</h3>
            <p>
              I am a passionate developer eager to build modern web
              applications. As a fresher, I have honed my skills through
              hands-on projects and hackathons, gaining experience in
              developing user-friendly interfaces, solving real-world
              challenges, and collaborating with teams. I am enthusiastic
              about contributing to impactful projects and continuously
              growing my expertise in web development.
            </p>
            <p>
              My focus is on creating clean, efficient, and user-friendly
              solutions that solve real-world problems. I'm constantly
              learning and staying up-to-date with the latest technologies and
              best practices in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
