import HeroProfileCard from "../components/HeroProfileCard.jsx";
import { IoMdDownload } from "react-icons/io";
import {
  FaGithub,
  FaRocket,
  FaGraduationCap,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { PROFILE } from "../constants/profile";
import { useTypewriter } from "../hooks/useTypewriter";
import { useDocumentHead } from "../hooks/useDocumentHead";

const Hero = () => {
  useDocumentHead({
    title: "Início",
    description:
      "Portfólio profissional de Thiago Araujo, Engenheiro da Computação e Desenvolvedor Full Stack especializado em React, Node.js, Go, Python e IoT.",
  });

  const displayText = useTypewriter(PROFILE.roles, {
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDelay: 2000,
  });

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center px-6 py-12 md:py-20 overflow-hidden">
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-12 lg:flex-row">
        {/* Left Side Text Content */}
        <div className="space-y-6 text-center lg:w-7/12 lg:text-left z-10">
          {/* Status Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-1.5 text-xs font-mono text-sky-400 border border-sky-500/30 backdrop-blur-md shadow-inner">
            <FaGraduationCap size={14} className="text-emerald-400" />
            <span>{PROFILE.badgeTitle}</span>
          </div>

          {/* Main Title & Typewriter */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Olá, eu sou <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {PROFILE.name}
              </span>
            </h1>
            <div
              aria-live="polite"
              className="h-10 text-xl sm:text-2xl font-mono text-sky-400 font-semibold flex items-center justify-center lg:justify-start"
            >
              <span>{displayText}</span>
              <span className="animate-pulse ml-1 text-emerald-400">|</span>
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto lg:mx-0">
            Graduado em <strong>Engenharia da Computação</strong> com paixão por
            transformar desafios em software escalável. Especializado no
            desenvolvimento de{" "}
            <strong>APIs robustas em Node.js, Go e Python</strong>, além de{" "}
            <strong>interfaces reativas em React</strong> e integração com
            microcontroladores IoT.
          </p>

          {/* Metrics Quick Stats */}
          <div className="grid grid-cols-3 gap-3 pt-2 max-w-md mx-auto lg:mx-0">
            {PROFILE.metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-card p-3 rounded-xl border border-slate-800 text-center flex flex-col justify-center"
              >
                <span
                  className={`block text-lg sm:text-xl font-bold ${metric.colorClass} font-mono tracking-tight whitespace-nowrap`}
                >
                  {metric.value}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              to="/projects"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <FaRocket />
              <span>Ver Projetos Git</span>
              <FaArrowRight size={12} />
            </Link>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={PROFILE.urls.cv}
              className="flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:scale-[1.02]"
            >
              <IoMdDownload size={18} className="text-cyan-400" />
              <span>Download CV</span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={PROFILE.urls.github}
              aria-label="Perfil do GitHub"
              className="flex items-center justify-center p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              title="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={PROFILE.urls.whatsapp}
              aria-label="Conversar no WhatsApp"
              className="flex items-center justify-center p-3.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-400 transition-all duration-300 hover:scale-105"
              title="WhatsApp Direct"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Right Side Hero Profile Card Component */}
        <div className="lg:w-5/12 flex items-center justify-center z-10 w-full">
          <HeroProfileCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
