import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { 
      src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", 
      name: "HTML5",
      description: "Expert in semantic HTML5, accessibility best practices, and modern web standards. Experience with SEO optimization and structured data.",
      color: "from-orange-400 to-red-500"
    },
    { 
      src: "https://cdn-icons-png.flaticon.com/512/732/732190.png", 
      name: "CSS3",
      description: "Advanced CSS3 skills including Flexbox, Grid, animations, and responsive design. Proficient in modern CSS features and cross-browser compatibility.",
      color: "from-blue-400 to-blue-600"
    },
    { 
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", 
      name: "JavaScript",
      description: "Strong expertise in modern JavaScript (ES6+), async programming, DOM manipulation, and web APIs. Experience with performance optimization.",
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", 
      name: "React",
      description: "Proficient in React ecosystem including Hooks, Context API, Redux, and React Router. Experience building scalable component architectures.",
      color: "from-cyan-400 to-cyan-600"
    },
    { 
      src: "https://cdn-icons-png.flaticon.com/512/733/733553.png", 
      name: "GitHub",
      description: "Experienced in Git workflow, collaboration, pull requests, and CI/CD pipelines. Familiar with GitHub Actions and project management.",
      color: "from-purple-400 to-purple-600"
    },
    {
      src: "https://files.raycast.com/4dnlt8m2mcb98bzc4zb8pggc4csi", 
      name: "Tailwind CSS",
      description: "Proficient in utility-first CSS framework, component design, and responsive layouts. Experience with custom configurations and optimizations.",
      color: "from-cyan-400 to-teal-600"
    },
    {
      src: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
      name: "Chakra UI",
      description: "Skilled in building accessible and responsive interfaces using Chakra UI components. Experience with theme customization and component composition.",
      color: "from-teal-400 to-cyan-400"
    },
    {
      src: "https://nodejs.org/static/images/logo.svg",
      name: "Node.js",
      description: "Strong backend development skills with Node.js, including REST APIs, authentication, and database integration. Experience with Express.js and middleware.",
      color: "from-green-400 to-green-600"
    },
    {
      src: "https://tse2.mm.bing.net/th?id=OIP.mbGqG9oLZIhHr4KoESQtIAHaJ4&pid=Api&P=0&h=220",
      name: "Express.js",
      description: "Experienced in building RESTful APIs, middleware implementation, and server-side routing. Proficient in handling HTTP requests and responses.",
      color: "from-gray-400 to-gray-600"
    },
    {
      src: "https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png",
      name: "MongoDB",
      description: "Skilled in NoSQL database design, CRUD operations, aggregation pipelines, and data modeling. Experience with MongoDB Atlas and performance optimization.",
      color: "from-green-500 to-green-700"
    },
    // {
    //   src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    //   name: "TypeScript",
    //   description: "Proficient in TypeScript development, type systems, interfaces, and generics. Experience with strict type checking and code documentation.",
    //   color: "from-blue-500 to-blue-700"
    // },
    {
      src: "https://redux.js.org/img/redux.svg",
      name: "Redux",
      description: "Expert in state management with Redux, including Redux Toolkit, middleware, and async actions. Experience with complex application state flows.",
      color: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Skill Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 p-2 rounded-lg bg-slate-700/50 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className="w-12 h-12 object-contain filter brightness-95 group-hover:brightness-110 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400">
                    {skill.name}
                  </h3>
                  
                  {/* Description Tooltip */}
                  {hoveredSkill === index && skill.description && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full w-64 p-3 bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700/50 text-sm text-slate-300 z-20 animate-fade-in">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-slate-800"></div>
                      {skill.description}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;