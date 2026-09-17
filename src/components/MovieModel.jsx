const MovieModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900 text-white rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-red-500 text-white text-xl transition"
        >
          ✕
        </button>

        {/* Image */}
        <div className="h-64 md:h-80 bg-gray-800">
          {show.image?.original || show.image?.medium ? (
            <img
              src={show.image?.original || show.image?.medium}
              alt={show.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">

          <h2 className="text-3xl font-bold mb-4">
            {show.name}
          </h2>

          {/* Info */}
          <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
            <span>
              ⭐ {show.rating?.average || "N/A"}
            </span>

            <span>
              📅 {show.premiered?.slice(0, 4) || "N/A"}
            </span>

            {show.runtime && (
              <span>
                ⏱️ {show.runtime} min
              </span>
            )}
          </div>

          {/* Genres */}
          {show.genres?.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">
                Genres
              </h3>

              <div className="flex flex-wrap gap-2">
                {show.genres.map((genre) => (
                  <span
                    key={genre}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          <div>
            <h3 className="font-semibold text-xl mb-2">
              Overview
            </h3>

            <div
              className="text-gray-400 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: show.summary || "No summary available.",
              }}
            />
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="mt-8 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg transition"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
};

export default MovieModal;