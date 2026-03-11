import { useState } from 'react';
import { Code, Briefcase, Target, Award, Download } from 'lucide-react';
import profile from "../assets/profile.jpg"

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    const resumeUrl = 'https://drive.google.com/file/d/189g9UZjGCYF085_MXczi259TNAny84SV/view?usp=sharing';
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1hb85DulAtcAr6DEXyRAVeDxqGe--Izba';

    try {
      window.open(resumeUrl, '_blank');
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Devadurgam_Lakshmi_Narasimha_Resume.pdf';
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
    <section id="about" className="py-12 md:py-16 flex flex-col scroll-mt-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">About <span className="text-blue-400">Me</span></h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-80 mb-6"></div>
        <p className="text-zinc-400 max-w-2xl leading-relaxed text-lg">
          Full Stack Developer specializing in modern web technologies with a passion for creating efficient and scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Profile Image Offset */}
        <div className="w-full relative max-w-md mx-auto lg:mx-0">
          <img
            src={profile}
            alt="Profile"
            className="relative w-full aspect-[4/5] object-cover rounded-2xl border border-zinc-800 shadow-xl"
          />
        </div>

        {/* Info Blocks */}
        <div className="w-full space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-100">Professional Focus</h3>
            <p className="text-zinc-400 leading-relaxed text-base">
              Full Stack Web Developer with 2+ years of experience building scalable, responsive web applications using JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, and MongoDB.
            </p>
            <p className="text-zinc-400 leading-relaxed text-base">
              Skilled in RESTful API integration, backend logic, Git, and Agile practices, with a strong problem-solving mindset and a passion for real-world solutions. My expertise centers around the MERN stack and Next.js where I build intuitive UIs, responsive designs, and scalable backend architectures.
            </p>
            
            <div className="pt-6">
              <button
                onClick={handleResumeDownload}
                disabled={isDownloading}
                className={`group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] overflow-hidden ${
                  isDownloading ? 'opacity-75 cursor-wait' : ''
                }`}
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  <Download className={`w-5 h-5 ${isDownloading ? 'animate-bounce' : 'group-hover:translate-y-1 transition-transform'}`} />
                  {isDownloading ? 'Downloading...' : 'Download Resume'}
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900 transition-colors">
              <Code className="w-6 h-6 text-blue-400 mb-3" />
              <h4 className="text-zinc-100 font-semibold mb-1">Full Stack</h4>
              <p className="text-zinc-500 text-sm">React, Node.js, Express</p>
            </div>
            <div className="p-5 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900 transition-colors">
              <Briefcase className="w-6 h-6 text-cyan-400 mb-3" />
              <h4 className="text-zinc-100 font-semibold mb-1">Architecture</h4>
              <p className="text-zinc-500 text-sm">System Design, APIs</p>
            </div>
            <div className="p-5 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900 transition-colors">
              <Target className="w-6 h-6 text-purple-400 mb-3" />
              <h4 className="text-zinc-100 font-semibold mb-1">Problem Solving</h4>
              <p className="text-zinc-500 text-sm">Algorithms, Logic</p>
            </div>
            <div className="p-5 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900 transition-colors">
              <Award className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-zinc-100 font-semibold mb-1">Achievements</h4>
              <p className="text-zinc-500 text-sm">Hackathons & Commits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;