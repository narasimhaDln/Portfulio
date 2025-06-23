import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left space-y-2">
            <p className="text-slate-300 flex items-center justify-center md:justify-start">
              Built with{" "}
              <Heart 
                className="w-5 h-5 mx-2 text-red-500 animate-pulse" 
                fill="currentColor" 
              />{" "}
              by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 font-semibold ml-1">
                Devadurgam Lakshmi Narasimha
              </span>
            </p>
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/narasimhaDln"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/devadurgam-lakshmi-narasimha-485802241"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:narasimha34327@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;