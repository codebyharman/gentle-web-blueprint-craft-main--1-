import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

const linkBaseClass =
  "text-orange-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white/10 rounded-lg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLinks = () => (
    <>
      <Link to="/" className={linkBaseClass} onClick={() => setIsMenuOpen(false)}>
        Home
      </Link>
      <Link
        to="/mata-ke-bheti"
        className={linkBaseClass}
        onClick={() => setIsMenuOpen(false)}
      >
        Mata Ke Bhete
      </Link>
      <Link
        to="/history"
        className={linkBaseClass}
        onClick={() => setIsMenuOpen(false)}
      >
        History
      </Link>
      <Link
        to="/media"
        className={linkBaseClass}
        onClick={() => setIsMenuOpen(false)}
      >
        Images & Videos
      </Link>
      <a
        href="https://jhirimela.online/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkBaseClass} flex items-center gap-1`}
      >
        <ShoppingBag size={16} />
        Shopping
      </a>
      <Link
        to="/contact"
        className={linkBaseClass}
        onClick={() => setIsMenuOpen(false)}
      >
        Contact Us
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-orange-600/95 via-red-600/95 to-orange-600/95 backdrop-blur-md border-b border-orange-300 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/81db68a9-9509-4a74-be85-bcedfe831396.png"
              alt="JHIRI MELA Logo"
              className="h-10 w-10 rounded-full shadow-md"
            />
            <h1 className="text-2xl font-bold text-white drop-shadow-lg">
              JHIRI MELA
            </h1>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLinks />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-orange-100 hover:text-white focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-orange-700/95 via-red-700/95 to-orange-700/95 border-t border-orange-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Render links */}
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 