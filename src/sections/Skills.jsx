import React from 'react';
import { FaReact, FaJs, FaPhp, FaHtml5, FaCss3Alt, FaLaravel, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

const skillsData = [
  { name: 'React', icon: FaReact, level: 75, color: 'text-cyan-400' },
  { name: 'JavaScript', icon: FaJs, level: 75, color: 'text-yellow-400' },
  { name: 'PHP', icon: FaPhp, level: 80, color: 'text-indigo-400' },
  { name: 'Laravel', icon: FaLaravel, level: 85, color: 'text-red-500' },
  { name: 'HTML5', icon: FaHtml5, level: 85, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, level: 80, color: 'text-blue-500' },
  { name: 'MySQL', icon: SiMysql, level: 80, color: 'text-blue-400' },
];

const achievementsData = [
  // Sertifikasi
  {
    name: "Sertifikasi Data Science",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    year: "2024",
    type: "certification",
    link: "https://drive.google.com/file/d/1wCSmLIfIlOzJzJg8vlEKTAGmIWicj7ps/view?usp=drive_link"
  },
  // Prestasi 2024
  {
    name: "Pendanaan PMW Politeknik Negeri Malang - Brow Crush",
    issuer: "Politeknik Negeri Malang",
    year: "2024",
    type: "funding",
    position: "Pendanaan"
  },
  {
    name: "Poster Terfavorit Techno Fair and Seminar UKM PP Polinema", 
    issuer: "UKM PP Polinema",
    year: "2024",
    type: "competition",
    position: "Juara Poster Terfavorit"
  },
  {
    name: "Juara PKM Internal JTI Kategori PKM-K",
    issuer: "JTI Polinema",
    year: "2024",
    type: "competition", 
    position: "Juara 1"
  },
  {
    name: "Juara 1 PKM Internal Formadiksi Kategori PKM-K",
    issuer: "Formadiksi Polinema",
    year: "2024",
    type: "competition",
    position: "Juara 1"
  },
  {
    name: "Juara 1 Poster PESTADIKSI",
    issuer: "PESTADIKSI",
    year: "2024",
    type: "competition",
    position: "Juara 1"
  },
  {
    name: "Juara 1 Fotografi PESTADIKSI",
    issuer: "PESTADIKSI", 
    year: "2024",
    type: "competition",
    position: "Juara 1"
  },
  {
    name: "Juara 2 Esai National Literacy BEM Politeknik Negeri Malang",
    issuer: "BEM Polinema",
    year: "2024",
    type: "competition",
    position: "Juara 2"
  },
  {
    name: "Pendanaan PMW Politeknik Negeri Malang - Lokalabs",
    issuer: "Politeknik Negeri Malang",
    year: "2024", 
    type: "funding",
    position: "Pendanaan"
  },
  // Prestasi 2025
  {
    name: "Juara 3 Business Plan PEKAN HIMAKOM UMJ",
    issuer: "HIMAKOM UMJ",
    year: "2025",
    type: "competition", 
    position: "Juara 3"
  },
  {
    name: "Juara 1 Business Plan Tech & Trade Competition",
    issuer: "Tech & Trade Competition",
    year: "2025",
    type: "competition",
    position: "Juara 1"
  },
  {
    name: "Juara 2 Business Plan Koperasi Mahasiswa Universitas Bengkulu",
    issuer: "Universitas Bengkulu",
    year: "2025",
    type: "competition",
    position: "Juara 2"
  },
  {
    name: "Juara 1 Lomba Cerpen Hardiknas Unsoed",
    issuer: "Universitas Jenderal Soedirman",
    year: "2025",
    type: "competition",
    position: "Juara 1"
  },
  {
    name: "Juara 2 Lomba Esai Hardiknas Unsoed",
    issuer: "Universitas Jenderal Soedirman",
    year: "2025",
    type: "competition",
    position: "Juara 2"
  },
  {
    name: "Juara 1 Videografi KIP-K Art Festival 2025 Universitas Airlangga",
    issuer: "Universitas Airlangga",
    year: "2025",
    type: "competition",
    position: "Juara 1"
  },
  {
    name: "Juara 3 Esai EHA KSPA Universitas Negeri Jember",
    issuer: "Universitas Negeri Jember",
    year: "2025",
    type: "competition",
    position: "Juara 3"
  },
  {
    name: "Poster Terfavorit Techno Fair and Seminar UKM PP Polinema",
    issuer: "UKM PP Polinema", 
    year: "2025",
    type: "competition",
    position: "Juara Poster Terfavorit"
  },
  {
    name: "Juara 3 Business Plan Muamalah Fair 2025 UIN SATU Tulungagung",
    issuer: "UIN SATU Tulungagung",
    year: "2025",
    type: "competition",
    position: "Juara 3"
  },
  {
    name: "Juara 1 Cerpen Islamic Festival Of Psychology Universitas Negeri Malang",
    issuer: "Universitas Negeri Malang",
    year: "2025",
    type: "competition", 
    position: "Juara 1"
  },
   {
    name: "Juara 1 Esai RK INK BLEND Competition",
    issuer: "Universitas Siliwangi",
    year: "2025",
    type: "competition",
    position: "Juara 1"
  },
  {
    name: "Juara 1 Poster Entrepreneur Festival",
    issuer: "Politeknik Negeri Malang",
    year: "2025",
    type: "competition",
    position: "Juara 1"
  },
  {
    name: "Juara 3 & Favorite Digital Marketing Video Entrepreneur Festival",
    issuer: "Politeknik Negeri Malang",
    year: "2025",
    type: "competition",
    position: "Juara 3 & Favorite"
  }
];

const Skills = () => {
  const getPositionColor = (position) => {
    if (!position) return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    
    if (position.includes('Juara 1') || position.includes('Juara 1')) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (position.includes('Juara 2')) return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    if (position.includes('Juara 3')) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    if (position.includes('Pendanaan')) return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    if (position.includes('Terfavorit')) return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
    return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getIconColor = (type) => {
    switch(type) {
      case 'certification': return 'text-yellow-500';
      case 'funding': return 'text-purple-500';
      case 'competition': return 'text-cyan-500';
      default: return 'text-gray-500';
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'certification': return 'bg-yellow-500/20 border-yellow-500/30';
      case 'funding': return 'bg-purple-500/20 border-purple-500/30';
      case 'competition': return 'bg-cyan-500/20 border-cyan-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Skills & Achievements
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          {skillsData.length} Technologies & {achievementsData.length} Achievements
        </p>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-yellow-500 text-center mb-8">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
              >
                <skill.icon className={`text-4xl ${skill.color} mb-3 mx-auto`} />
                <h4 className="font-bold text-white mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-1 block">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              My Achievements ({achievementsData.length})
            </h3>
            <p className="text-gray-400 mb-6">
              Collection of certifications, competitions, and funding achievements
            </p>
            
            {/* Link to Certificates Folder */}
            <a
              href="https://drive.google.com/drive/folders/1Fz_DFOJlCAdLjdfz-JS88zGFRVXkb2oG?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl hover:bg-yellow-400 transition-all duration-300 mb-8"
            >
              <FaExternalLinkAlt />
              View All Certificates
            </a>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievementsData.map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border transition-all duration-300 hover:scale-105 bg-gray-800/50 border-gray-700 hover:border-yellow-500/50 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(achievement.type)}`}>
                    <FaAward className={`text-lg ${getIconColor(achievement.type)}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {achievement.name}
                      </h4>
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-500 hover:text-yellow-400 transition-colors ml-2"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{achievement.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-500 text-xs font-semibold">{achievement.year}</span>
                      {achievement.position && (
                        <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getPositionColor(achievement.position)}`}>
                          {achievement.position}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-12 p-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-2xl border border-yellow-500/20">
          <div className="text-center">
            <h4 className="text-lg font-bold text-yellow-500 mb-2">Achievement Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{achievementsData.filter(a => a.position && a.position.includes('Juara 1')).length}</div>
                <div className="text-gray-400">Juara 1</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{achievementsData.filter(a => a.position && a.position.includes('Juara 2')).length}</div>
                <div className="text-gray-400">Juara 2</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{achievementsData.filter(a => a.position && a.position.includes('Juara 3')).length}</div>
                <div className="text-gray-400">Juara 3</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{achievementsData.filter(a => a.type === 'funding').length}</div>
                <div className="text-gray-400">Pendanaan</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;