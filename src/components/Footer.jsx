// Footer.jsx (sem position fixed!)
import React from "react";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-6">
        <p className="text-sm text-center sm:text-left text-gray-400">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a
            href="..."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <IoLogoInstagram size={22} />
          </a>
          <a
            href="..."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <IoLogoLinkedin size={22} />
          </a>
          <a
            href="..."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <IoLogoWhatsapp size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
