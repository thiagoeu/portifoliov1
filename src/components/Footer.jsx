import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 text-slate-400 py-12 relative z-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wide uppercase">
              Disponível para Projetos & Oportunidades
            </span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Thiago Araujo
          </h3>
          <p className="text-xs text-slate-400 max-w-md">
            Engenharia da Computação | Desenvolvedor Full Stack especializado em Node.js, React, Go, Python e Cloud.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/thiagoeu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-all duration-300 hover:scale-110"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:araujo.thiago1051@gmail.com"
            className="p-3 rounded-full bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-all duration-300 hover:scale-110"
            title="Email"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="https://wa.me/5583996485508"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900 text-slate-300 hover:text-emerald-400 hover:bg-slate-800 border border-slate-800 transition-all duration-300 hover:scale-110"
            title="WhatsApp"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="https://instagram.com/thiagoeu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-900 text-slate-300 hover:text-pink-400 hover:bg-slate-800 border border-slate-800 transition-all duration-300 hover:scale-110"
            title="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-6xl px-6 mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>© {currentYear} Thiago Araujo. Todos os direitos reservados.</p>
        <p className="font-mono text-[11px]">
          Construído com <span className="text-cyan-400">React</span> & <span className="text-purple-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
