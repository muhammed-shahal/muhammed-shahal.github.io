import { useState } from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants/data";

function Navigation({ onLinkClick }) {
  return (
    <ul className="nav-ul">
      {[
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#contact" },
      ].map((item) => (
        <li key={item.href} className="nav-li">
          <a
            className="nav-link"
            href={item.href}
            onClick={onLinkClick}
          >
            {item.label}
          </a>
        </li>
      ))}

      {/* GitHub Link */}
      <li className="nav-li">
        <a
          href={PERSONAL_INFO.github}
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onLinkClick}
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // Only close menu on small screens
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          {/* Logo / Title */}
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            {PERSONAL_INFO.title}
          </a>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.4 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={handleLinkClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};
