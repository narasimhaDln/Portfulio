import { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const backgroundImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
];

const roles = [
  "Full Stack Developer.",
  "MERN Stack Expert.",
  "Problem Solver.",
  "Web Enthusiast."
];

const TypingEffect = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextText = isDeleting 
          ? currentRole.substring(0, currentText.length - 1)
          : currentRole.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
      {currentText}
      <span className="inline-block w-[4px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle -translate-y-[2px]"></span>
    </span>
  );
};

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Animated Background Slider */}
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === bgIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-zinc-950/80 z-10"></div>
          <img
            src={img}
            alt="background"
            className="w-full h-full object-cover scale-105"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-20">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8 backdrop-blur-sm animate-fade-in-down">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Available for Hire</span>
        </div>

        {/* Headlines */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
          <span className="block mb-4 text-zinc-100">Hi, I'm D.Lakshmi Narasimha</span>
          <div className="h-[1.2em] flex items-center justify-center">
            <TypingEffect />
          </div>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Crafting premium, interactive, and highly optimized scalable web experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
              Explore My Work
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-zinc-500 hover:border-blue-400 text-white rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:bg-zinc-800/50"
          >
            <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              Contact Me
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;