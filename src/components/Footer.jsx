// Footer.jsx (sem position fixed!)
import React from "react";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="text-center text-sm text-gray-400 sm:text-left">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a
            href="..."
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-pink-400"
          >
            <IoLogoInstagram size={22} />
          </a>
          <a
            href="..."
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            <IoLogoLinkedin size={22} />
          </a>
          <a
            href="..."
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-green-400"
          >
            <IoLogoWhatsapp size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
