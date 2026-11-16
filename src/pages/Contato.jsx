import { useState, useEffect, useRef } from "react";
import { IoMdDownload } from "react-icons/io";
import {
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";
import { PROFILE } from "../constants/profile";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { useDocumentHead } from "../hooks/useDocumentHead";

const Contato = () => {
  useDocumentHead({
    title: "Contato",
    description:
      "Entre em contato com Thiago Araujo para propostas de desenvolvimento de software, consultoria técnica ou projetos de engenharia.",
  });

  const [copiedField, setCopiedField] = useState(null);
  const [customMsg, setCustomMsg] = useState("");
  const [senderName, setSenderName] = useState("");
  const copyTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (copyTimerRef.current) {
      clearTimeout(copyTimerRef.current);
    }
    copyTimerRef.current = setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const formattedText = encodeURIComponent(
      `Olá Thiago! Meu nome é ${senderName || "um visitante do portfólio"}.\n${
        customMsg || "Gostaria de conversar sobre um projeto ou oportunidade!"
      }`
    );
    window.open(
      `${PROFILE.urls.whatsapp}?text=${formattedText}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full py-16 px-6 flex items-center justify-center">
      <div className="mx-auto max-w-6xl w-full space-y-12">
        <SectionHeader
          badgeIcon={FaPaperPlane}
          badgeText="Vamos Conversar"
          titlePrefix="Entre em"
          titleHighlight="Contato"
          description="Estou disponível para novas oportunidades de trabalho, projetos de consultoria, freelances e parcerias em tecnologia."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Direct Contacts & Copy Buttons */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white tracking-wide border-b border-zinc-800 pb-3">
              Canais Diretos de Comunicação
            </h2>

            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl border border-zinc-800 flex items-center justify-between gap-4 group hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 text-cyan-400 border border-zinc-800">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                    E-mail Principal
                  </span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                aria-label="Copiar endereço de e-mail"
                onClick={() => handleCopy(PROFILE.email, "email")}
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-blue-400 border border-zinc-800 transition-all"
                title="Copiar E-mail"
              >
                {copiedField === "email" ? (
                  <FaCheck className="text-blue-400" size={16} />
                ) : (
                  <FaCopy size={16} />
                )}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-card p-5 rounded-2xl border border-zinc-800 flex items-center justify-between gap-4 group hover:border-blue-500/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 text-blue-400 border border-zinc-800">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                    WhatsApp / Telefone
                  </span>
                  <a
                    href={PROFILE.urls.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-white hover:text-blue-300 transition-colors"
                  >
                    {PROFILE.phoneDisplay}
                  </a>
                </div>
              </div>
              <button
                type="button"
                aria-label="Copiar número de telefone"
                onClick={() => handleCopy(PROFILE.phoneRaw, "phone")}
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-blue-400 border border-zinc-800 transition-all"
                title="Copiar Número"
              >
                {copiedField === "phone" ? (
                  <FaCheck className="text-blue-400" size={16} />
                ) : (
                  <FaCopy size={16} />
                )}
              </button>
            </div>

            {/* Social Media Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PROFILE.urls.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl border border-zinc-800 flex items-center gap-3 hover:border-blue-500/40 hover:bg-zinc-900/90 transition-all group"
              >
                <FaGithub
                  size={22}
                  className="text-zinc-300 group-hover:text-blue-400 transition-colors"
                />
                <div>
                  <span className="text-xs font-bold text-white block">
                    GitHub
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    @{PROFILE.githubUsername}
                  </span>
                </div>
              </a>

              <a
                href={PROFILE.urls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl border border-zinc-800 flex items-center gap-3 hover:border-blue-500/40 hover:bg-zinc-900/90 transition-all group"
              >
                <FaLinkedin
                  size={22}
                  className="text-zinc-300 group-hover:text-blue-400 transition-colors"
                />
                <div>
                  <span className="text-xs font-bold text-white block">
                    LinkedIn
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    /in/thiago-araújo
                  </span>
                </div>
              </a>
            </div>

            {/* Resume CV Download Card */}
            <div className="pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={PROFILE.urls.cv}
                className="flex items-center justify-center gap-3 w-full rounded-2xl bg-blue-600 hover:bg-blue-500 p-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:scale-[1.01] transition-all"
              >
                <IoMdDownload size={20} />
                <span>Baixar Currículo Completo (CV PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Message Generator (WhatsApp Direct) */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-800 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white tracking-wide mb-1">
                Enviar Mensagem Rápida
              </h2>
              <p className="text-xs text-zinc-400">
                Preencha os campos abaixo para iniciar uma conversa diretamente
                no meu WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div>
                <label
                  htmlFor="sender-name"
                  className="block text-xs font-mono text-zinc-300 mb-1.5 uppercase cursor-pointer"
                >
                  Seu Nome
                </label>
                <input
                  id="sender-name"
                  type="text"
                  required
                  placeholder="Ex: Maria Silva"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 text-zinc-200 placeholder-zinc-600 text-sm border border-zinc-800 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="sender-message"
                  className="block text-xs font-mono text-zinc-300 mb-1.5 uppercase cursor-pointer"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="sender-message"
                  rows={4}
                  required
                  placeholder="Escreva sobre a oportunidade ou projeto que deseja propor..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 text-zinc-200 placeholder-zinc-600 text-sm border border-zinc-800 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 active:scale-95"
              >
                <FaWhatsapp size={18} />
                <span>Enviar pelo WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
