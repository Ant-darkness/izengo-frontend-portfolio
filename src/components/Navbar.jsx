import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className="
        fixed
        top-0
        left-0
        w-full
        z-50
        h-16
        bg-[#071A12]
        border-b
        border-green-900/50
        "
      >
        <div
          className="
          max-w-6xl
          mx-auto
          h-full
          px-4
          flex
          items-center
          justify-between
          "
        >
          <a
            href="#home"
            className="text-xl font-bold text-emerald-400"
          >
            IZENGO
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                text-sm
                text-slate-300
                hover:text-emerald-400
                transition
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#0A2418] border-t border-green-900/50">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                block
                px-4
                py-3
                text-slate-300
                hover:text-emerald-400
                "
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
