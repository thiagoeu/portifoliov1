import { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaWhatsapp, FaEnvelope, FaInstagram, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";
import CustomButton from "../components/CustomButton.jsx";
import contatoilustration from "../assets/contact.png";

const Contato = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [customMsg, setCustomMsg] = useState("");
  const [senderName, setSenderName] = useState("");

  const emailAddress = "araujo.thiago1051@gmail.com";
  const phoneNumber = "+55 (83) 99648-5508";

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const formattedText = encodeURIComponent(
      `Olá Thiago! Meu nome é ${senderName || "um visitante do portfólio"}.\n${customMsg || "Gostaria de conversar sobre um projeto ou oportunidade!"}`
    );
    window.open(`https://wa.me/5583996485508?text=${formattedText}`, "_blank");
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full py-16 px-6 flex items-center justify-center">
      <div className="mx-auto max-w-6xl w-full space-y-12">
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-950/60 px-4 py-1.5 text-xs font-mono text-cyan-400 border border-cyan-500/30">
            <FaPaperPlane size={14} />
            <span>Vamos Conversar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Entre em <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Contato</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Estou disponível para novas oportunidades de trabalho, projetos de consultoria, freelances e parcerias em tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Direct Contacts & Copy Buttons */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white tracking-wide border-b border-slate-800 pb-3">
              Canais Diretos de Comunicação
            </h2>

            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-4 group hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    E-mail Principal
                  </span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(emailAddress, "email")}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-all"
                title="Copiar E-mail"
              >
                {copiedField === "email" ? <FaCheck className="text-emerald-400" size={16} /> : <FaCopy size={16} />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-4 group hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-900 text-emerald-400 border border-slate-800">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    WhatsApp / Telefone
                  </span>
                  <a
                    href="https://wa.me/5583996485508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy("+5583996485508", "phone")}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-all"
                title="Copiar Número"
              >
                {copiedField === "phone" ? <FaCheck className="text-emerald-400" size={16} /> : <FaCopy size={16} />}
              </button>
            </div>

            {/* Social Media Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/thiagoeu"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all group"
              >
                <FaGithub size={22} className="text-slate-300 group-hover:text-cyan-400 transition-colors" />
                <div>
                  <span className="text-xs font-bold text-white block">GitHub</span>
                  <span className="text-[11px] text-slate-400">@thiagoeu</span>
                </div>
              </a>

              <a
                href="https://instagram.com/thiagoeu"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl border border-slate-800 flex items-center gap-3 hover:border-pink-500/40 hover:bg-slate-900/90 transition-all group"
              >
                <FaInstagram size={22} className="text-slate-300 group-hover:text-pink-400 transition-colors" />
                <div>
                  <span className="text-xs font-bold text-white block">Instagram</span>
                  <span className="text-[11px] text-slate-400">@thiagoeu</span>
                </div>
              </a>
            </div>

            {/* Resume CV Download Card */}
            <div className="pt-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1rL_BwkCHBXHYMH-bR-eE-aczHoJ0yk1z/view?usp=sharing"
                className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 p-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-transform"
              >
                <IoMdDownload size={20} />
                <span>Baixar Currículo Completo (CV PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Message Generator (WhatsApp Direct) */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white tracking-wide mb-1">
                Enviar Mensagem Rápida
              </h2>
              <p className="text-xs text-slate-400">
                Preencha os campos abaixo para iniciar uma conversa diretamente no meu WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Silva"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 text-slate-200 placeholder-slate-600 text-sm border border-slate-800 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Sua Mensagem
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Escreva sobre a oportunidade ou projeto que deseja propor..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 text-slate-200 placeholder-slate-600 text-sm border border-slate-800 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 active:scale-95"
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
