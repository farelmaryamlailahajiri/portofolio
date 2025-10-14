import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaFigma, FaLaravel, FaReact } from 'react-icons/fa';

const projectsData = [
  {
    title: "JTI-Tracker System",
    description: "Sistem tracer study dan monitoring alumni JTI Politeknik Negeri Malang. Fitur pelacakan karir alumni dan survei kepuasan pengguna.",
    tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/farelmaryamlailahajiri/tracker",
    images: "https://drive.google.com/drive/folders/1H5Vs8upQMr1AHYRZJZVNwjkUJjd2AeAO?usp=sharing",
    demoUrl: null,
    type: "web-app",
    icon: FaLaravel,
    features: ["Tracer Study", "Survei Kepuasan", "Dashboard Admin", "Laporan Alumni"]
  },
  {
    title: "K3 Company Landing Page",
    description: "Website landing page perusahaan pangan dengan fokus pada Keselamatan dan Kesehatan Kerja (K3). Design modern dan responsive.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    githubUrl: "https://github.com/farelmaryamlailahajiri/K3",
    liveUrl: "https://k3-phi.vercel.app/",
    type: "website",
    icon: FaReact,
    features: ["Responsive Design", "Modern UI", "Fast Loading", "SEO Friendly"]
  },
  {
    title: "LastFoods UI/UX Design",
    description: "Aplikasi E-Mart untuk produk makanan mendekati masa kedaluwarsa. UI/UX design dengan fokus pada user experience dan conversion.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
    figmaUrl: "https://www.figma.com/proto/9NxmBfAIUgl0c9zhWznHk6/Lastfoods?page-id=4%3A6&node-id=47-2635&p=f&viewport=1151%2C147%2C0.17&t=ftc9pkiIvOyPNIjL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1239%3A3983&show-proto-sidebar=1",
    demoUrl: null,
    type: "ui-ux",
    icon: FaFigma,
    features: ["Food Waste Solution", "Mobile App Design", "User Flow", "Interactive Prototype"]
  }
];

const Projects = () => {
  const getProjectTypeColor = (type) => {
    switch(type) {
      case 'web-app': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'website': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'ui-ux': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getProjectTypeText = (type) => {
    switch(type) {
      case 'web-app': return 'Web Application';
      case 'website': return 'Website';
      case 'ui-ux': return 'UI/UX Design';
      default: return 'Project';
    }
  };

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          3 real projects showcasing my skills in web development and UI/UX design
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-black rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <project.icon className="text-lg text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getProjectTypeColor(project.type)}`}>
                    {getProjectTypeText(project.type)}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 flex flex-wrap gap-3">
                {/* GitHub Button (kecuali untuk LastFoods) */}
                {project.type !== 'ui-ux' && project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white font-medium text-sm transition-colors px-3 py-2 hover:bg-gray-700/50 rounded-lg"
                  >
                    <FaGithub className="text-sm" />
                    Code
                  </a>
                )}

                {/* Live Demo Button (jika ada) */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-yellow-500 hover:text-yellow-300 font-medium text-sm transition-colors px-3 py-2 hover:bg-yellow-500/10 rounded-lg"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                )}

                {/* Figma Button (khusus UI/UX) */}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors px-3 py-2 hover:bg-purple-500/10 rounded-lg"
                  >
                    <FaFigma className="text-sm" />
                    Figma Demo
                  </a>
                )}

                {/* Images/Documentation Button */}
                {project.images && project.type !== 'ui-ux' && (
                  <a
                    href={project.images}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors px-3 py-2 hover:bg-blue-500/10 rounded-lg"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Documentation
                  </a>
                )}

                {/* Placeholder untuk project yang belum ada demo */}
                {!project.liveUrl && !project.figmaUrl && !project.images && project.type !== 'ui-ux' && (
                  <span className="flex items-center gap-2 text-gray-500 text-sm px-3 py-2">
                    <FaExternalLinkAlt className="text-sm" />
                    Demo Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Each project represents different aspects of my skills - from backend development to frontend and design
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;