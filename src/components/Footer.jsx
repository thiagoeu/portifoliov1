import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { PROFILE } from "../constants/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 text-zinc-400 py-12 relative z-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-xs font-mono text-blue-400 font-semibold tracking-wide uppercase">
              Disponível para Projetos & Oportunidades
            </span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {PROFILE.name}
          </h3>
          <p className="text-xs text-zinc-400 max-w-md">{PROFILE.footerBio}</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.urls.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full bg-zinc-900 text-zinc-300 hover:text-blue-400 hover:bg-zinc-800 border border-zinc-800 transition-all duration-300 hover:scale-110"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Enviar E-mail"
            className="p-3 rounded-full bg-zinc-900 text-zinc-300 hover:text-blue-400 hover:bg-zinc-800 border border-zinc-800 transition-all duration-300 hover:scale-110"
            title="Email"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href={PROFILE.urls.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-3 rounded-full bg-zinc-900 text-zinc-300 hover:text-blue-400 hover:bg-zinc-800 border border-zinc-800 transition-all duration-300 hover:scale-110"
            title="WhatsApp"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href={PROFILE.urls.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-3 rounded-full bg-zinc-900 text-zinc-300 hover:text-blue-400 hover:bg-zinc-800 border border-zinc-800 transition-all duration-300 hover:scale-110"
            title="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-6xl px-6 mt-8 pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
        <p>© {currentYear} {PROFILE.name}. Todos os direitos reservados.</p>
        <p className="font-mono text-[11px]">
          Construído com <span className="text-blue-400">React</span> &{" "}
          <span className="text-zinc-300">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
