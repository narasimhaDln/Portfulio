import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { 
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", 
      name: "JavaScript",
      description: "ES6+, async programming, and modern DOM manipulation.",
      color: "group-hover:border-yellow-500/50"
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", 
      name: "TypeScript",
      description: "Static typing, interfaces, and enhanced developer tooling.",
      color: "group-hover:border-blue-500/50"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      name: "React.js",
      description: "Hooks, Context, component architecture, and state management.",
      color: "group-hover:border-cyan-500/50"
    },
    { 
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png", 
      name: "Next.js",
      description: "Server-side rendering, static site generation, and fast routing.",
      color: "group-hover:border-zinc-500/50"
    },
    {
      src: "https://nodejs.org/static/images/logo.svg",
      name: "Node.js",
      description: "Asynchronous REST APIs, auth, and robust backend infrastructure.",
      color: "group-hover:border-green-500/50"
    },
    {
      src: "https://tse2.mm.bing.net/th?id=OIP.mbGqG9oLZIhHr4KoESQtIAHaJ4&pid=Api&P=0&h=220",
      name: "Express.js",
      description: "Middleware routing, and efficient server-side development.",
      color: "group-hover:border-zinc-400/50"
    },
    {
      src: "https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png",
      name: "MongoDB",
      description: "NoSQL schema design, referencing, and aggregation pipelines.",
      color: "group-hover:border-green-600/50"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      name: "PostgreSQL",
      description: "Relational database modeling, complex queries, and transactions.",
      color: "group-hover:border-blue-400/50"
    },
    { 
      src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", 
      name: "HTML5",
      description: "Semantic HTML5, accessibility, SEO optimization.",
      color: "group-hover:border-orange-500/50"
    },
    { 
      src: "https://cdn-icons-png.flaticon.com/512/732/732190.png", 
      name: "CSS3",
      description: "Flexbox, Grid, animations, and responsive design.",
      color: "group-hover:border-blue-500/50"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", 
      name: "Tailwind CSS",
      description: "Utility-first CSS, custom setups, and rapid UI development.",
      color: "group-hover:border-teal-500/50"
    },
    {
      src: "https://v4.mui.com/static/logo.png",
      name: "Material UI",
      description: "Accessible component libraries, theming, and consistent UI.",
      color: "group-hover:border-blue-400/50"
    },
    {
      src: "https://redux.js.org/img/redux.svg",
      name: "Redux",
      description: "Centralized state management and Redux Toolkit.",
      color: "group-hover:border-purple-500/50"
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/8112/8112527.png",
      name: "RESTful APIs",
      description: "Designing, building, and securing scalable API endpoints.",
      color: "group-hover:border-cyan-600/50"
    },
    { 
      src: "https://cdn-icons-png.flaticon.com/512/733/733553.png", 
      name: "Git & GitHub",
      description: "Version control, branching strategies, and collaboration.",
      color: "group-hover:border-zinc-500/50"
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      name: "Java",
      description: "Object-oriented programming and standard problem-solving algorithms.",
      color: "group-hover:border-red-500/50"
    }
  ];

  return (
    <section id="skills" className="py-12 md:py-16 flex flex-col scroll-mt-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">Technical <span className="text-blue-400">Skills</span></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-80 mb-6"></div>
        <p className="text-zinc-400 max-w-2xl leading-relaxed text-lg">
          The core tools and technologies I use to bring products to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-300 ${skill.color} hover:bg-zinc-800/80`}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 p-2 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 shadow-sm">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                />
              </div>
              <h3 className="text-lg font-bold text-zinc-100">{skill.name}</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;