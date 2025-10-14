import React, { useState, useEffect } from 'react';
import { FaDownload, FaArrowRight, FaTrophy, FaMedal } from 'react-icons/fa';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Web Developer', 'Competition Enthusiast', 'Problem Solver', 'Fast Learner'];

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  // Fungsi untuk scroll ke section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-yellow-500/5 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center relative z-10">
        
        {/* Profile Avatar */}
        <div className="relative mb-6 mx-auto w-32 h-32 group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-32 h-32 rounded-full border-4 border-yellow-500 overflow-hidden bg-gray-800 shadow-2xl shadow-yellow-500/25 group-hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-black text-white">FM</div>
                <div className="text-xs font-semibold text-white/90">Farel</div>
              </div>
            </div>
          </div>
          
          {/* Achievement Badge */}
          <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full border border-white flex items-center justify-center animate-bounce shadow-lg">
            <FaTrophy className="text-white text-xs" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-3 mb-4">
          <h3 className="text-base font-medium text-gray-400 tracking-widest uppercase">
            Hi, I'm Farel Maryam
          </h3>
          
          <h1 className="text-4xl sm:text-6xl font-black leading-none">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Web
            </span>
            <br />
            <span className="text-white">Developer</span>
          </h1>
          
          <div className="h-10 flex items-center justify-center">
            <h2 className="text-lg sm:text-xl font-bold text-gray-300">
              Passionate in{' '}
              <span className="text-yellow-500 border-b-2 border-yellow-500">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
          Focused on creating <span className="text-yellow-400 font-semibold">modern web solutions</span> and 
          competing in <span className="text-yellow-400 font-semibold">tech competitions</span> to sharpen my skills.
        </p>

        {/* Real Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
          <div className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="text-xl font-bold text-yellow-500">3</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="text-xl font-bold text-yellow-500">19+</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider">Achievements</div>
          </div>
          <div className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="text-xl font-bold text-yellow-500">1</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider">Certification</div>
          </div>
        </div>

        {/* CTA Buttons - FIXED dengan Anchor Links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300 cursor-pointer uppercase tracking-wider flex items-center gap-2 text-sm"
          >
            <span>See My Projects</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => scrollToSection('skills')}
            className="group border-2 border-yellow-500 text-yellow-500 font-semibold py-3 px-6 rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase tracking-wider flex items-center gap-2 text-sm"
          >
            <FaMedal />
            <span>My Achievements</span>
          </button>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-gray-400 text-xs mb-3">TECH I WORK WITH</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['React', 'JavaScript', 'Tailwind', 'Laravel', 'PHP', 'MySQL', 'Bootstrap'].map((tech, index) => (
              <div key={index} className="px-3 py-1 bg-gray-800/50 rounded-lg border border-gray-700 backdrop-blur-sm">
                <span className="text-gray-300 font-medium text-xs">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-1 cursor-pointer"
          >
            <span className="text-gray-500 text-xs tracking-widest">SCROLL</span>
            <div className="w-4 h-6 border border-yellow-500 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-yellow-500 rounded-full mt-1 animate-pulse"></div>
            </div>
          </button>
        </div>
        
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;