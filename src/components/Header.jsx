import { useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Habilidades", path: "/skills" },
    { name: "Projetos", path: "/projects" },
    { name: "Contato", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <AiFillCode size={24} className="animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Thiago Araujo
            </span>
            <span className="text-[10px] font-mono text-cyan-400/90 tracking-widest uppercase">
              Full Stack Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    active
                      ? "text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-md shadow-cyan-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* GitHub Shortcut Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/thiagoeu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-slate-800/90 hover:bg-slate-700 px-4 py-2 text-xs font-semibold text-cyan-300 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-cyan-500/20 hover:shadow-lg"
          >
            <FaGithub size={16} />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-cyan-400 md:hidden border border-slate-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir Menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95 px-6 py-4 backdrop-blur-lg">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      active
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                        : "text-slate-300 hover:bg-slate-900 hover:text-cyan-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href="https://github.com/thiagoeu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 p-3 text-sm font-semibold text-cyan-300 border border-slate-800"
              >
                <FaGithub size={18} />
                <span>GitHub Profile</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
