import { useState, useEffect } from "react";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { Toaster } from "react-hot-toast";

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center z-[9999] transition-opacity duration-500">
    <div className="relative flex items-center justify-center w-24 h-24 mb-8">
      {/* Outer spinning ring */}
      <div className="absolute inset-0 border-t-2 border-r-2 border-blue-500 rounded-full animate-spin"></div>
      {/* Inner spinning ring */}
      <div className="absolute inset-2 border-b-2 border-l-2 border-cyan-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      {/* Center logo text */}
      <div className="text-zinc-100 font-bold tracking-widest text-lg bg-zinc-900 w-14 h-14 rounded-full flex items-center justify-center border border-zinc-800 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
        DLN
      </div>
    </div>
    
    <div className="flex flex-col items-center gap-3">
      <p className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase animate-pulse">
        Initializing
      </p>
      {/* Loading bar */}
      <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-1/2 animate-[pulse_1s_ease-in-out_infinite] rounded-full"></div>
      </div>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for initial launch
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.closest("a")?.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 fade-in">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
