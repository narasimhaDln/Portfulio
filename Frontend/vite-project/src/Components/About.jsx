import { GraduationCap, Code, Briefcase, Target, Award, Coffee } from 'lucide-react';
import profile from "../assets/profile.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer specializing in modern web technologies with a passion for creating 
            efficient, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative">
              <img
                src={profile}
                alt="Profile"
                className="rounded-lg w-full h-auto object-cover shadow-2xl transform transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 group hover:bg-slate-800/50 p-6 rounded-xl transition-all duration-300 border border-slate-700/50">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Education & Expertise</h4>
                <p className="text-slate-300 leading-relaxed">
                  Recent graduate with strong foundation in software development and modern web technologies. 
                  Specialized in MERN stack development with proven experience in building 
                  production-ready web applications and RESTful APIs.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group hover:bg-slate-800/50 p-6 rounded-xl transition-all duration-300 border border-slate-700/50">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Professional Focus</h4>
                <p className="text-slate-300 leading-relaxed">
                  Dedicated to creating robust web applications with clean code practices and modern architectures. 
                  Strong emphasis on responsive design and optimal user experience.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group hover:bg-slate-800/50 p-6 rounded-xl transition-all duration-300 border border-slate-700/50">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Achievements</h4>
                <p className="text-slate-300 leading-relaxed">
                  Successfully delivered multiple full-stack projects. Active contributor to open-source 
                  projects and regular participant in coding challenges and hackathons.
                </p>
              </div>
            </div>

            {/* Key Skills Summary */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300">
                <Code className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">Full Stack Development</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300">
                <Briefcase className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">Project Management</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300">
                <Coffee className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">Problem Solving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;