import { Code, Globe, ExternalLink, Download } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    // https://d1axatwj9ytuu1.cloudfront.net/content/uploads/2019/06/12093307/seeAll.jpg
    title: "Virtual Classroom",
    description: "An interactive online learning platform for live classes, assignments, resources, and personalized settings—making learning seamless and engaging!.",
    image: "https://d1axatwj9ytuu1.cloudfront.net/content/uploads/2019/06/12093307/seeAll.jpg",
    tags: ["JavaScript", "CSS", "React.js", "Firebase", "Tailwind CSS", "Responsive Design"],
    github: "https://github.com/narasimhaDln/VirtualClassRoom/tree/main/vite-project",
    demo: "https://silly-bonbon-e1d209.netlify.app/login",
    featured: true
  },
  {
    title: "Tic Tac Toe",
    description: "An interactive Tic Tac Toe game built with React. Features include real-time gameplay, intelligent move validation, score tracking, and a beautiful responsive interface.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Hooks", "Game Logic", "HTML5", 'CSS3'],
    github: "https://github.com/narasimhaDln/Portfulio/tree/main/Game/tic-tac-toe",
    demo: "https://portfulio-pcu8.vercel.app/",
    featured: true
  }
];

const Projects = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    const resumeUrl = "https://drive.google.com/file/d/1mT9Cab8TYI61SvMiZXLMiFrW5DV6Mx2n/view?usp=sharing";
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1hb85DulAtcAr6DEXyRAVeDxqGe--Izba";
    
    try {
      // Open resume in new tab
      window.open(resumeUrl, '_blank');
      
      // Create a temporary link for download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = "Devadurgam_Lakshmi_Narasimha_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Explore my latest work and personal projects. Each project represents my passion for creating 
            meaningful and innovative solutions.
          </p>
          <button
            onClick={handleResumeDownload}
            disabled={isDownloading}
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 ${isDownloading ? 'opacity-75 cursor-wait' : ''}`}
          >
            <Download className={`w-5 h-5 ${isDownloading ? 'animate-bounce' : ''}`} />
            {isDownloading ? 'Downloading...' : 'Download Resume'}
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white bg-slate-700/50 hover:bg-slate-700 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Code className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;