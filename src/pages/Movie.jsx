import { useEffect, useState } from "react";
import { getAllShows,searchShows } from "../services/MovieApi";

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");


  const handleSearch = async () => {
  if (!search.trim()) {
    const data = await getAllShows();
    setShows(data);
    return;
  }

  try {
    setLoading(true);
    setError("");

    const data = await searchShows(search);

    const results = data.map((item) => item.show);

    setShows(results);
  } catch (error) {
    setError("Failed to search shows.");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true);

        const data = await getAllShows();

        setShows(data);
      } catch (error) {
        setError("Failed to load shows.");
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* Header */}
     <section className="max-w-7xl mx-auto px-4 pb-10">
  <div className="max-w-2xl flex gap-3">

    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
      placeholder="🔍 Search for a movie..."
      className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-red-500 transition"
    />

    <button
      onClick={handleSearch}
      className="bg-red-500 hover:bg-red-600 px-6 rounded-xl font-semibold transition"
    >
      Search
    </button>

  </div>
</section>

      {/* Loading */}
      {loading && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400">
            Loading shows...
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-20">
          <p className="text-red-400 text-xl">
            {error}
          </p>
        </div>
      )}

      {/* Shows */}
      {!loading && !error && (
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {shows.map((show) => (
              <div
                key={show.id}
                className="bg-gray-900 rounded-xl overflow-hidden"
              >
                {/* Image */}
                <div className="h-80 bg-gray-800">
                  {show.image?.medium ? (
                    <img
                      src={show.image.medium}
                      alt={show.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">

                  <h2 className="text-lg font-semibold truncate">
                    {show.name}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    ⭐ {show.rating?.average || "N/A"}
                    {" • "}
                    📅 {show.premiered?.slice(0, 4) || "N/A"}
                  </p>

                  <button className="w-full mt-4 bg-red-500 hover:bg-red-600 py-2 rounded-lg transition">
                    See Details
                  </button>

                </div>
              </div>
            ))}

          </div>
        </section>
      )}

    </main>
  );
};

export default Movies;