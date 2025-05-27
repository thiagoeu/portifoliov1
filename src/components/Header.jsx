import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-800 text-white w-full sticky top-0 shadow-md z-50">
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <div>
          <h1 className="text-xl font-bold">
            <a href="/">Logo</a>
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
              About
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-sky-300 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
