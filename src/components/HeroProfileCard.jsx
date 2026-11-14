import { FaGraduationCap } from "react-icons/fa";
import heroImg from "../assets/hero.png";
import { PROFILE } from "../constants/profile";

const HeroProfileCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center group">
      {/* Glow Suave Difuso de Fundo */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-sky-500/20 via-teal-500/15 to-emerald-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      {/* Anel Externo Elegante */}
      <div className="relative p-2 rounded-full bg-gradient-to-tr from-sky-500/30 via-slate-800 to-emerald-500/30 shadow-2xl backdrop-blur-xl">
        {/* Moldura Circular da Foto */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-sky-400/40 bg-slate-900 shadow-inner">
          <img
            src={heroImg}
            alt={PROFILE.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />
        </div>

        {/* Badge de Graduação na Base */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/95 border border-emerald-500/40 px-4 py-1.5 text-xs font-mono text-emerald-300 shadow-xl backdrop-blur-md">
            <FaGraduationCap className="text-emerald-400" size={14} />
            <span>Engenharia da Computação</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfileCard;
