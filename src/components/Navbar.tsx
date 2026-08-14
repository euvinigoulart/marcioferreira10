import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-sm py-4 border-b border-white/10' : 'bg-black/10 backdrop-blur-md border-b border-white/10 py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2 md:gap-3 group">
          <span className="bg-[#FFDF00] text-[#002776] font-black text-xl md:text-2xl px-2 py-1 rounded-md tracking-tighter shadow-sm transform group-hover:scale-105 transition-transform">
            55100
          </span>
          <span className="text-white font-black text-lg md:text-2xl tracking-tighter uppercase leading-none mt-1 sm:mt-0">
            MÁRCIO FERREIRA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apoie"
            className="bg-white text-[#002776] px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter hover:bg-[#FFDF00] transition-colors"
          >
            Apoie Agora
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white bg-black/20 border border-white/20 p-2 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#002776] shadow-xl py-6 flex flex-col items-center gap-6 md:hidden border-b border-white/10"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-white text-sm font-bold uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apoie"
              className="bg-white text-[#002776] px-8 py-3 rounded-full font-black uppercase tracking-tighter hover:bg-[#FFDF00] transition-colors"
            >
              Apoie Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
