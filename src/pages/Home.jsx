import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-gray-950 via-red-950 to-gray-950 text-white flex items-center">

        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 w-full">

          <div className="max-w-3xl">

            <p className="text-red-400 font-semibold tracking-wider mb-5">
              🎬 WELCOME TO MOVIE EXPLORER
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Discover Your Next
              <span className="block text-red-500">
                Favorite Show
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Explore amazing movies and TV shows from around the world.
              Search for your favorite titles and discover something new
              to watch today.
            </p>

            <Link
              to="/movies"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 px-7 py-3.5 rounded-lg font-semibold transition duration-300 hover:scale-105"
            >
              Explore Movies
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
};

export default Home;