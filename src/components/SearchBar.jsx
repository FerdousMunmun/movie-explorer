const SearchBar = ({
  value,
  onChange,
  onSearch,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="max-w-2xl flex gap-3 py-1">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="🔍 Search for a movie..."
        className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-red-500 transition"
      />

      <button
        onClick={onSearch}
        className="bg-red-500 hover:bg-red-600 px-6 rounded-xl font-semibold transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;