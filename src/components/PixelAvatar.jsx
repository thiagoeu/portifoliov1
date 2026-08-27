import { useState } from "react";
import { FaGamepad, FaUser } from "react-icons/fa";
import heroImg from "../assets/hero.png";

const PixelAvatar = () => {
  const [isRetroMode, setIsRetroMode] = useState(false);

  return (
    <div className="relative flex flex-col items-center group">
      {/* Outer Glowing Neon Ring */}
      <div
        className={`absolute -inset-2 rounded-full transition-all duration-700 blur-lg ${
          isRetroMode
            ? "bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 opacity-90 animate-pulse"
            : "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-60 group-hover:opacity-100"
        }`}
      ></div>

      {/* Main Container */}
      <div className="relative flex flex-col items-center">
        {/* Status Tag */}
        <div className="mb-4 flex items-center gap-2 rounded-full bg-slate-950/90 px-3.5 py-1 text-xs font-mono text-cyan-400 border border-cyan-500/30 backdrop-blur-md shadow-lg">
          <span className={`inline-block w-2 h-2 rounded-full ${isRetroMode ? "bg-emerald-400 animate-ping" : "bg-cyan-400"}`}></span>
          <span>{isRetroMode ? "MOLDURA RETRO PIXEL 8-BIT" : "PERFIL HD HIGH-TECH"}</span>
        </div>

        {/* Circular Avatar Wrapper */}
        <div
          className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transition-all duration-500 bg-slate-900 border-4 ${
            isRetroMode
              ? "border-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.5)] pixel-border"
              : "border-cyan-400/80 shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:scale-105"
          }`}
        >
          {/* Developer Photo */}
          <img
            src={heroImg}
            alt="Thiago Araujo"
            className={`w-full h-full object-cover object-center transition-all duration-500 ${
              isRetroMode ? "contrast-110 saturate-125 crt-scanlines" : ""
            }`}
          />

          {/* Retro CRT Grid Overlay when in Retro Mode */}
          {isRetroMode && (
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-emerald-900/10 to-slate-950/40">
              <div className="w-full h-full opacity-25 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px]"></div>
            </div>
          )}

          {/* Online Dev Badge */}
          <div className="absolute bottom-4 right-4 bg-slate-950/95 border border-emerald-500/50 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Online</span>
          </div>
        </div>

        {/* Interactive Toggle Button */}
        <button
          onClick={() => setIsRetroMode(!isRetroMode)}
          className="mt-6 flex items-center gap-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 border border-slate-700 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 active:scale-95"
        >
          {isRetroMode ? (
            <>
              <FaUser className="text-cyan-400" />
              <span>Voltar ao Modo Normal</span>
            </>
          ) : (
            <>
              <FaGamepad className="text-emerald-400 animate-bounce" size={16} />
              <span>Ativar Estilo Retro 8-Bit</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PixelAvatar;
