// Footer.jsx (sem position fixed!)
import React from "react";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io"; // Ícones do Instagram e WhatsApp
import { IoLogoLinkedin } from "react-icons/io5"; // Ícone do LinkedIn
import { Link } from "react-router-dom"; // Link para rotas externas (mesmo usando to=)

const Footer = () => {
  return (
    // Rodapé com borda superior e fundo escuro
    <footer className="border-t border-slate-700 bg-slate-900 text-white">
      {/* Container centralizado com layout responsivo */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        {/* Texto de direitos autorais */}
        <p className="text-center text-sm text-gray-400 sm:text-left">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>

        {/* Ícones de redes sociais com hover colorido */}
        <div className="flex gap-6">
          {/* Instagram */}
          <Link
            to={"https://www.instagram.com/thiagoeu"}
            target="_blank"
            className="transition hover:text-pink-400"
          >
            <IoLogoInstagram size={22} />
          </Link>

          {/* LinkedIn */}
          <Link
            to={"https://www.linkedin.com/in/thiago-araujo-946183227/"}
            target="_blank"
            className="transition hover:text-blue-400"
          >
            <IoLogoLinkedin size={22} />
          </Link>

          {/* WhatsApp com mensagem pré-preenchida */}
          <Link
            to={
              "https://wa.me/5583996485508?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os"
            }
            target="_blank"
            className="transition hover:text-green-400"
          >
            <IoLogoWhatsapp size={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
