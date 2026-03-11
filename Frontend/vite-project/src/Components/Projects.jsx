import { Code, Globe, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Virtual Classroom',
    description:
      'An interactive online learning platform for live classes, assignments, resources, and personalized settings—making learning seamless and engaging!',
    image: 'https://d1axatwj9ytuu1.cloudfront.net/content/uploads/2019/06/12093307/seeAll.jpg',
    tags: ['React.js', 'JavaScript', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/narasimhaDln/VirtualClassRoom/tree/main/vite-project',
    demo: 'https://silly-bonbon-e1d209.netlify.app/login',
  },
  {
    title: 'AuthNotify',
    description:
      'AuthNotify is a full-stack MERN authentication system featuring secure user signup, login, and password recovery flows with real-time email notifications.',
    image: 'https://res.cloudinary.com/dbsg3chsc/image/upload/v1750656181/Screenshot_105_r4zhd5.png',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Zustand', 'Tailwind'],
    github: 'https://github.com/narasimhaDln/mernAuth',
    demo: 'https://mernauth-1-eicr.onrender.com/login',
  },
  
  {
    title: 'AI Assistant',
    description:
      'A smart assistant web application that interacts with users through voice, understands queries in multiple languages, and provides relevant spoken responses.',
    image: 'https://res.cloudinary.com/dbsg3chsc/image/upload/v1753881578/IMG_20250730_183134_mbtrsl.jpg',
    tags: ['React', 'CSS3', 'Netlify', 'Cloudinary'],
    github: 'https://github.com/narasimhaDln/VirtualClassRoom/tree/main/VS/vite-project',
    demo: 'https://spectacular-lolly-eb6dbe.netlify.app/',
  },
 {
   title:"MSCureChain",
  description:"Built a multi-tenant Hospital Management System enabling multiple hospitals to operate independently within a single platform using tenant-based data isolation. Implemented role-based access control (RBAC) with JWT authentication supporting various roles. Developed core healthcare workflows, designed tenant-aware backend architecture, and integrated real-time operational flow between departments.",
  tags:['Next.js','TypeScript','Node.js','Express.js','MongoDB','Tailwind CSS','JWT','Zustand','Git','Docker','Aws'],
  image:"https://res.cloudinary.com/dbsg3chsc/image/upload/v1773229844/hospital-management-software-development_echxzo.webp",
  demo:"https://www.mscurechain.com/"
 },
  {
   title:"MS Billing Softwares",
  description:"Developed 7 customized billing management systems for industries including retail, food service, electronics, and laboratories using the MERN stack and Next.js. Implemented modules for automated billing, product & inventory management, invoice generation, and role-based access. Built sales analytics dashboards and reporting features to track performance in real time.",
  tags:['Node.js','Express.js','MongoDB','Tailwind CSS','JWT','Git','React.js',"HTML 5","Next.js"],
  image:"https://res.cloudinary.com/dbsg3chsc/image/upload/v1773229727/billing_software_xceaxg.webp",
  demo:"https://billing-landing-page.vercel.app/"
 },
 {
   title:"SujanaGold",
  description:"Developed a full-stack jewellery billing and inventory management system using the MERN stack and Next.js. Implemented features including gold invoice generation with automatic weight-based calculations, inventory tracking, purchase management, and old-gold exchange handling. Built sales reporting modules to provide real-time business insights.",
  tags:['Node.js','Express.js','MongoDB','Tailwind CSS','JWT','Git','React.js','HTML 5','Next.js'],
  image:"https://res.cloudinary.com/dbsg3chsc/image/upload/v1773229679/gold_shop_z42us3.jpg",
  demo:"https://billing-landing-page.vercel.app/"
 },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16 flex flex-col scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">Featured <span className="text-blue-400">Projects</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-80 mb-6"></div>
          <p className="text-zinc-400 max-w-2xl leading-relaxed text-lg">
            A selection of recent projects that highlight my focus on scalable architecture and clean code.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6 sm:p-8">
              <h3 className="text-xl font-bold text-zinc-100 mb-3">{project.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto pt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] overflow-hidden text-sm"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Live Preview
                  </span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-transparent border-2 border-zinc-600 hover:border-blue-400 text-zinc-300 hover:text-white rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:bg-zinc-800/50 text-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Code className="w-4 h-4 text-zinc-400 group-hover:text-blue-300 transition-colors" />
                    Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
