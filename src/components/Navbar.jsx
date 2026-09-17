import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          🎬 MovieExplorer
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
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

      </div>
    </nav>
  );
};

export default Navbar;