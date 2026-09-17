const Movies = () => {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Explore Movies & Shows
        </h1>

        <p className="text-gray-400">
          Search and discover your favorite movies and TV shows.
        </p>
      </section>

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="max-w-2xl">
          <input
            type="text"
            placeholder="🔍 Search for a movie..."
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-red-500 transition"
          />
        </div>
      </section>

      {/* Movie Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Temporary Cards */}
          <div className="bg-gray-900 rounded-xl p-4">
            <div className="h-72 bg-gray-800 rounded-lg mb-4"></div>

            <h2 className="text-lg font-semibold">
              Movie Title
            </h2>

            <p className="text-gray-400 mt-2">
              ⭐ 8.5 • 📅 2024
            </p>

            <button className="w-full mt-4 bg-red-500 hover:bg-red-600 py-2 rounded-lg transition">
              See Details
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl p-4">
            <div className="h-72 bg-gray-800 rounded-lg mb-4"></div>

            <h2 className="text-lg font-semibold">
              Movie Title
            </h2>

            <p className="text-gray-400 mt-2">
              ⭐ 8.2 • 📅 2023
            </p>

            <button className="w-full mt-4 bg-red-500 hover:bg-red-600 py-2 rounded-lg transition">
              See Details
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl p-4">
            <div className="h-72 bg-gray-800 rounded-lg mb-4"></div>

            <h2 className="text-lg font-semibold">
              Movie Title
            </h2>

            <p className="text-gray-400 mt-2">
              ⭐ 8.0 • 📅 2022
            </p>

            <button className="w-full mt-4 bg-red-500 hover:bg-red-600 py-2 rounded-lg transition">
              See Details
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl p-4">
            <div className="h-72 bg-gray-800 rounded-lg mb-4"></div>

            <h2 className="text-lg font-semibold">
              Movie Title
            </h2>

            <p className="text-gray-400 mt-2">
              ⭐ 7.8 • 📅 2021
            </p>

            <button className="w-full mt-4 bg-red-500 hover:bg-red-600 py-2 rounded-lg transition">
              See Details
            </button>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Movies;