


import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-md text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            🎬 MovieExplorer
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="hover:text-red-400 transition"
            >
              Home
            </Link>

            <Link
              to="/movies"
              className="hover:text-red-400 transition"
            >
              Movies
            </Link>

            <Link
              to="/movies"
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition"
            >
              Explore Movies
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pt-5 pb-2">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-400 transition"
            >
              Home
            </Link>

            <Link
              to="/movies"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-400 transition"
            >
              Movies
            </Link>

            <Link
              to="/movies"
              onClick={() => setIsOpen(false)}
              className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-lg text-center transition"
            >
              Explore Movies
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;