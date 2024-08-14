const Dropdown = ({ results, loading, noResults, handleResultClick }) => {
  return (
    <>
      {results.length > 0 || loading || noResults ? (
        <ul className="bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {/* Loading Message */}
          {loading ? (
            <li className="p-2 text-gray-500">Loading data...</li>
          ) : noResults ? (
            //  No Results Message
            <li className="p-2 text-red-500">Stock name doesn't exist</li>
          ) : (
            results.map((item, index) => (
              <li
                key={index}
                onClick={() => handleResultClick(item.symbol)}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {item.symbol}
              </li>
            ))
          )}
        </ul>
      ) : null}
    </>
  );
};
export default Dropdown;
