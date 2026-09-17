const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">
              🎬 MovieExplorer
            </h2>
            <p className="text-sm mt-1">
              Discover something amazing to watch.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-sm">
            © 2026 MovieExplorer. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;