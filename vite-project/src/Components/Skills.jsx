
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-content">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {/* Skill Items */}
          {[
            { src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", name: "HTML5" },
            { src: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "CSS3" },
            { src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", name: "JavaScript" },
            { src: "https://cdn-icons-png.flaticon.com/512/732/732245.png", name: "DOM" },
            { src: "https://cdn-icons-png.flaticon.com/512/919/919851.png", name: "React" },
            { src: "https://cdn-icons-png.flaticon.com/512/733/733553.png", name: "GitHub" },
          ].map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.src} alt={skill.name} className="skill-icon" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
