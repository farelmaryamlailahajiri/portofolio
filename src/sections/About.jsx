import React from 'react';
import { FaCode, FaTrophy, FaLightbulb, FaUsers, FaCalendarAlt, FaGraduationCap, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate <span className="text-yellow-400 font-semibold">Web Developer</span> dengan semangat kompetisi tinggi, 
            membuktikan bahwa dedikasi dan konsistensi adalah kunci kesuksesan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            
          {/* Left Column: Stats & Learning Journey */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl shadow-2xl border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Pencapaian</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-yellow-500/10 rounded-xl hover:bg-yellow-500/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">1+</div>
                  <div className="text-gray-300 font-medium">Tahun Belajar</div>
                  <div className="text-gray-500 text-sm mt-1">Programming</div>
                </div>
                <div className="text-center p-6 bg-yellow-500/10 rounded-xl hover:bg-yellow-500/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">3</div>
                  <div className="text-gray-300 font-medium">Proyek</div>
                  <div className="text-gray-500 text-sm mt-1">Web Development</div>
                </div>
                <div className="text-center p-6 bg-yellow-500/10 rounded-xl hover:bg-yellow-500/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">19</div>
                  <div className="text-gray-300 font-medium">Prestasi</div>
                  <div className="text-gray-500 text-sm mt-1">Kompetisi</div>
                </div>
                <div className="text-center p-6 bg-yellow-500/10 rounded-xl hover:bg-yellow-500/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">5+</div>
                  <div className="text-gray-300 font-medium">Teknologi</div>
                  <div className="text-gray-500 text-sm mt-1">Dikuasai</div>
                </div>
              </div>
            </div>

            {/* Learning Journey Timeline */}
            <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-2xl border border-yellow-500/20">
              <h3 className="text-xl font-bold text-yellow-500 mb-6 flex items-center gap-3">
                <FaCalendarAlt className="text-yellow-500" />
                Perjalanan Belajar Coding
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3 bg-gray-700/30 rounded-lg hover:bg-yellow-500/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <FaGraduationCap className="text-green-500 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Mulai Belajar Programming</p>
                    <p className="text-gray-400 text-sm">2023 - Basic HTML, CSS, JavaScript</p>
                    <p className="text-gray-500 text-xs">Memulai dari fundamental web development</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-gray-700/30 rounded-lg hover:bg-yellow-500/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                    <FaCode className="text-blue-500 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Fokus Web Development</p>
                    <p className="text-gray-400 text-sm">2023 - PHP, Laravel, React</p>
                    <p className="text-gray-500 text-xs">Menguasai framework modern dan backend development</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-gray-700/30 rounded-lg hover:bg-yellow-500/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                    <FaTrophy className="text-purple-500 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Aktif Kompetisi & Project</p>
                    <p className="text-gray-400 text-sm">2024 - Real Projects & Competitions</p>
                    <p className="text-gray-500 text-xs">Menerapkan skill dalam project nyata dan kompetisi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-gray-700/30 rounded-lg hover:bg-yellow-500/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mt-1">
                    <FaRocket className="text-yellow-500 text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Ekspansi Skill & Portfolio</p>
                    <p className="text-gray-400 text-sm">2024-2025 - Advanced Development</p>
                    <p className="text-gray-500 text-xs">Membangun portfolio kuat dengan berbagai teknologi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Description & Strengths */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                Memulai perjalanan programming sejak 2023, saya membuktikan bahwa <span className="text-yellow-400 font-semibold">semangat belajar dan kompetisi</span> dapat mengalahkan batasan pengalaman. Dalam waktu singkat, saya telah menguasai berbagai teknologi modern dan meraih prestasi di tingkat nasional.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                Dengan <span className="text-yellow-400 font-semibold">19 prestasi kompetisi</span> yang diraih dalam 2 tahun, saya menunjukkan kemampuan <span className="text-yellow-400 font-semibold">problem-solving</span> yang kuat dan adaptasi yang cepat terhadap tantangan baru.
              </p>
            </div>
            
            {/* Strengths Grid */}
            <div className="grid gap-4">
              <div className="flex items-start space-x-4 p-5 bg-gray-800/50 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                  <FaTrophy className="text-xl text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Competition Achiever</h4>
                  <p className="text-gray-400">19+ prestasi dalam berbagai lomba programming, business plan, dan karya tulis nasional</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-5 bg-gray-800/50 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                  <FaLightbulb className="text-xl text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Fast Learner</h4>
                  <p className="text-gray-400">Menguasai 8+ teknologi modern dalam waktu singkat dengan kurva belajar yang steep</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-5 bg-gray-800/50 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                  <FaCode className="text-xl text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Practical Developer</h4>
                  <p className="text-gray-400">Fokus pada solusi yang efisien dan implementasi yang clean dalam pengembangan web</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-gray-800/50 rounded-xl hover:bg-yellow-500/10 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                  <FaUsers className="text-xl text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Team Collaborator</h4>
                  <p className="text-gray-400">Pengalaman kolaborasi efektif dalam berbagai kompetisi tim dan project development</p>
                </div>
              </div>

              {/* Motivation Box - Dipindah ke sini (bawah Team Collaborator) */}
              <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-400 text-center italic text-sm">
                  "Dari nol hingga meraih 19 prestasi dalam 2 tahun - proof bahwa konsistensi beats talent"
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;