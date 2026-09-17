const MovieCard = ({ show, onDetails }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition">

      {/* Poster */}
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

        <button
          onClick={() => onDetails(show)}
          className="w-full mt-4 bg-red-500 hover:bg-red-600 py-2 rounded-lg transition font-medium"
        >
          See Details
        </button>

      </div>
    </div>
  );
};

export default MovieCard;