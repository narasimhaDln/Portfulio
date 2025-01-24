import { useState } from 'react';
import '../Styles/Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { 
      src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", 
      name: "HTML5",
      description: "Semantic markup, accessibility, modern HTML features"
    },
    { 
      src: "https://cdn-icons-png.flaticon.com/512/732/732190.png", 
      name: "CSS3",
      description: "Flexbox, Grid, Animations, Responsive design"
    },
    { 
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", 
      name: "JavaScript",
      description: "ES6+, DOM manipulation, Async programming"
    },
    { 
      src: "https://cdn-icons-png.flaticon.com/512/919/919851.png", 
      name: "React",
      description: "Hooks, Context, State management, Components"
    },
    { 
      src: "https://cdn-icons-png.flaticon.com/512/733/733553.png", 
      name: "GitHub",
      description: "Version control, Collaboration, CI/CD"
    },
    {
      src:"https://www.ui-tools.com/Content/images/3a85dc35-chakra-ui.jpg",
      name:"Chakra UI"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-content">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              className="skill-item"
              key={index}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img src={skill.src} alt={skill.name} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
              {hoveredSkill === index && (
                <div className="skill-description">
                  {skill.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;