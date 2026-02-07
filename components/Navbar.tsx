
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { PORTFOLIO_DATA } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          {PORTFOLIO_DATA.name.split(' ')[0]}<span className="text-secondary">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-primary dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 px-6 pb-8 border-b border-zinc-100 dark:border-zinc-900 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-secondary hover:text-primary dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
