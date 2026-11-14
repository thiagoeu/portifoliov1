import { FaGraduationCap } from "react-icons/fa";
import heroImg from "../assets/hero.png";
import { PROFILE } from "../constants/profile";

const HeroProfileCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center group">
      {/* Moldura Circular com Borda Fina em Cinza e Azul */}
      <div className="relative p-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-2xl">
        {/* Moldura Circular da Foto */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-zinc-700 bg-zinc-950">
          <img
            src={heroImg}
            alt={PROFILE.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />
        </div>

        {/* Badge de Graduação na Base */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-950 border border-zinc-700 px-4 py-1.5 text-xs font-mono text-zinc-200 shadow-xl">
            <FaGraduationCap className="text-blue-400" size={14} />
            <span>Engenharia da Computação</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfileCard;
