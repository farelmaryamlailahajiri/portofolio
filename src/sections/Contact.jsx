import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactMethods = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/6285394786878",
    detail: "+62 853-9478-6878",
    color: "hover:text-green-500",
    bgColor: "hover:bg-green-500/10",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:farelhajiri2@gmail.com",
    detail: "farelhajiri2@gmail.com",
    color: "hover:text-red-400",
    bgColor: "hover:bg-red-500/10",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/farelmaryamlailahajiri",
    detail: "/in/farelmaryam",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/farelhajiri02",
    detail: "@farelhajiri02",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-500/10",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-black text-center mb-6">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          Get in touch with me through these platforms. I'm always open to
          discussing new opportunities and collaborations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700 transition-all duration-300 hover:scale-105 group ${method.bgColor} ${method.color}`}
            >
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-current transition-colors duration-300 mb-4">
                <method.icon className="text-2xl text-yellow-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 text-center">
                {method.name}
              </h3>
              <p className="text-gray-400 group-hover:text-current transition-colors duration-300 text-sm text-center">
                {method.detail}
              </p>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 p-4 bg-gray-800/50 rounded-2xl border border-gray-700">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
              <FaMapMarkerAlt className="text-xl text-yellow-500" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-white">Based in</h4>
              <p className="text-gray-400">Malang, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Quick Response Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            I typically respond within a few hours. Looking forward to hearing
            from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
