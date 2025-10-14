import React, { useEffect } from 'react'; 
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 overflow-x-hidden">
      <main className="pt-0"> {/* Hapus padding-top */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;