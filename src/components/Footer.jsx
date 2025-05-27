import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white border-t">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 p-4">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/thiagooaraujo.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/thiagooaraujo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin size={20} />
          </a>
          <a
            href="https://wa.me/5583996485508"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
