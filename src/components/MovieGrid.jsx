import MovieCard from "./MovieCard";

const MovieGrid = ({ shows, onDetails }) => {
  if (shows.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-400">
          No shows found.
        </p>
      </div>
    );
  }

  return (
    <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {shows.map((show) => (
        <MovieCard
          key={show.id}
          show={show}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
};

export default MovieGrid;