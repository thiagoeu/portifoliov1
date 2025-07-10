import { useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-800 text-gray-300 shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <div>
          <h1 className="text-xl font-bold">
            <Link className="flex items-center gap-2" to="/">
              <AiFillCode size={30} />
              Thiago Araujo Dev
            </Link>
          </h1>
        </div>

        {/* Menu desktop */}
        <ul className="hidden gap-4 md:flex">
          <li>
            <Link to="/" className="transition-colors hover:text-sky-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills" className="transition-colors hover:text-sky-300">
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition-colors hover:text-sky-300"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="transition-colors hover:text-sky-300"
            >
              Projetos
            </Link>
          </li>
        </ul>

        {/* Botão do menu mobile */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Menu mobile colapsável */}
      {isOpen && (
        <ul className="flex flex-col gap-4 bg-slate-700 px-4 py-4 md:hidden">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:text-sky-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:text-sky-300"
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:text-sky-300"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:text-sky-300"
            >
              Projetos
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
