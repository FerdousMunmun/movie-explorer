import { useEffect, useState } from "react";
import { getAllShows,searchShows } from "../services/MovieApi";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import SearchBar from "../components/SearchBar";

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);


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
  <SearchBar
    value={search}
    onChange={setSearch}
    onSearch={handleSearch}
  />
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
              <MovieCard
  key={show.id}
  show={show}
   onDetails={setSelectedShow}
/>
            ))}

          </div>
        </section>
      )}
<MovieModal
  show={selectedShow}
  onClose={() => setSelectedShow(null)}
/>
    </main>
  );
};

export default Movies;