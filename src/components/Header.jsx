import React from "react";
import { AiFillCode } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-800 text-gray-300 shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
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
            <a href="/" className="transition-colors hover:text-sky-300">
              Home
            </a>
          </li>
          <li>
            <Link to="/skills" className="transition-colors hover:text-sky-300">
              Habilidades
            </Link>
          </li>
          <li>
            <a href="/" className="transition-colors hover:text-sky-300">
              Contato
            </a>
          </li>
          <li>
            <a href="/" className="transition-colors hover:text-sky-300">
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
