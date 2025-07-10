import React from "react";
import { AiFillCode } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-slate-800 text-gray-300  w-full sticky top-0 shadow-md z-50">
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <div>
          <h1 className="text-xl font-bold">
            <a className="flex items-center gap-2" href="/">
              <AiFillCode size={30} />
              Thiago Araujo Dev
            </a>
          </h1>
        </div>
        <ul className="flex gap-4">
          <li>
            <a href="/" className="hover:text-sky-300 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-sky-300 transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-sky-300 transition-colors">
              Contato
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-sky-300 transition-colors">
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
