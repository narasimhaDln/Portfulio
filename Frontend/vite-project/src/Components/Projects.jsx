
import { useState, useEffect } from "react";
import { Code, Globe, Download } from "lucide-react";

const projects = [
  {
    title: "Virtual Classroom",
    description:
      "An interactive online learning platform for live classes, assignments, resources, and personalized settings—making learning seamless and engaging!.",
    image:
      "https://d1axatwj9ytuu1.cloudfront.net/content/uploads/2019/06/12093307/seeAll.jpg",
    tags: [
      "JavaScript",
      "CSS",
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "Responsive Design",
    ],
    github:
      "https://github.com/narasimhaDln/VirtualClassRoom/tree/main/vite-project",
    demo: "https://silly-bonbon-e1d209.netlify.app/login",
    featured: true,
  },
  {
    title: "AuthNotify",
    description:
      "AuthNotify is a full-stack MERN authentication system featuring secure user signup, login, and password recovery flows with real-time email notifications. It includes email verification, route protection, and a polished frontend dashboard. The app mimics production-level auth workflows and is fully deployed with modern CI/CD practices.",
    image:
      "https://res.cloudinary.com/dbsg3chsc/image/upload/v1750656181/Screenshot_105_r4zhd5.png",
    tags: [
      "React",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "MongoDb",
      "Zustand",
      "Tailwind CSS",
      "Render",
    ],
    github: "https://github.com/narasimhaDln/mernAuth",
    demo: "https://mernauth-1-eicr.onrender.com/login",
    featured: true,
  },
  {
    title: "AI Assistant",
    description:
      "I have developed a smart assistant web application that interacts with users through voice, understands queries in multiple languages, and provides relevant spoken responses. It offers a smooth, real-time conversational experience with a focus on user-friendly design and accessibility, making interactions intuitive and engaging.",
    image:
      "https://res.cloudinary.com/dbsg3chsc/image/upload/v1753881578/IMG_20250730_183134_mbtrsl.jpg",
    tags: ["React", "HTML5", "CSS3", "Netlify", "Cloudinary", "GoogleFont"],
    github:
      "https://github.com/narasimhaDln/VirtualClassRoom/tree/main/VS/vite-project",
    demo: "https://spectacular-lolly-eb6dbe.netlify.app/",
    featured: true,
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    const resumeUrl =
      "https://drive.google.com/file/d/1HN_9Ld4wSpMPwZGIh3WqTfrHedYHAt75/view?usp=sharing";
    const downloadUrl =
      "https://drive.google.com/uc?export=download&id=1hb85DulAtcAr6DEXyRAVeDxqGe--Izba";

    try {
      window.open(resumeUrl, "_blank");
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "Devadurgam_Lakshmi_Narasimha_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  // Auto-cycle through projects every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Explore my latest work and personal projects. Each project represents
            my passion for creating meaningful and innovative solutions.
          </p>
          <button
            onClick={handleResumeDownload}
            disabled={isDownloading}
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 ${
              isDownloading ? "opacity-75 cursor-wait" : ""
            }`}
          >
            <Download
              className={`w-5 h-5 ${isDownloading ? "animate-bounce" : ""}`}
            />
            {isDownloading ? "Downloading..." : "Download Resume"}
          </button>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full flex justify-center">
                <div className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 w-full max-w-2xl">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
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
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentProjectIndex === index
                    ? "bg-blue-500 scale-125"
                    : "bg-slate-600"
                }`}
                onClick={() => setCurrentProjectIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
