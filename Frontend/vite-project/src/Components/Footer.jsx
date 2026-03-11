import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left space-y-2">
            <p className="flex items-center justify-center md:justify-start">
              Crafted with <Heart className="w-4 h-4 mx-2 text-rose-500 animate-pulse" fill="currentColor" /> by
              <span className="text-zinc-100 font-semibold ml-1 hover:text-blue-400 transition-colors">
                D.Lakshmi Narasimha
              </span>
            </p>
            <p className="text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/narasimhaDln"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/devadurgam-l-n/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:narasimha34327@gmail.com"
              aria-label="Email"
              className="text-zinc-500 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
