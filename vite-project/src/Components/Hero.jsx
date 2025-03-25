import { ArrowDown, Code, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-glow"
        ></div>
        <div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-glow animation-delay-2000"
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-glow animation-delay-4000"
        ></div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-tech"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${15 + Math.random() * 15}s`,
                opacity: 0.1,
                fontSize: `${Math.random() * 20 + 20}px`
              }}
            >
              {['⚛️', '🌐', '💻', '🔥', '⚡️', '🎨'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        {/* Glowing Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-glow-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                background: `rgba(${Math.random() * 155 + 100}, ${Math.random() * 155 + 100}, 255, 0.5)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="space-y-6 animate-fade-in-down backdrop-blur-sm bg-slate-900/30 p-8 rounded-2xl shadow-2xl">
          <span className="inline-block text-blue-400 text-lg md:text-xl font-medium tracking-wide mb-2 animate-pulse">
            Hi, I'm
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 animate-gradient">
              Devadurgam Lakshmi Narasimha
            </span>
          </h1>

          <div className="relative">
            <p className="text-xl md:text-2xl text-slate-300 font-medium mt-4 flex items-center justify-center gap-3">
              <Code className="w-6 h-6 text-blue-400 animate-bounce-slow" />
              Full Stack Web Developer
              <span className="text-blue-400 animate-pulse">&</span>
              Design Thinker
              <Palette className="w-6 h-6 text-teal-400 animate-bounce-slow animation-delay-200" />
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Explore My Work
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Circles */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>
        <div className="w-2 h-2 rounded-full bg-teal-400 animate-ping delay-100"></div>
        <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping delay-200"></div>
      </div>
    </section>
  );
}

export default Hero;