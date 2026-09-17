import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[80vh] bg-gray-950 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">

          <div className="max-w-2xl">
            <p className="text-red-500 font-semibold mb-4">
              🎬 WELCOME TO MOVIE EXPLORER
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Discover Your Next
              <span className="text-red-500"> Favorite Show</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
              Explore amazing movies and TV shows from around the world.
              Search for your favorite titles and discover something new to watch.
            </p>

           <Link
  to="/movies"
  className="inline-block bg-red-500 hover:bg-red-600 px-7 py-3 rounded-lg font-semibold transition"
>
  Explore Movies →
</Link>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Home;