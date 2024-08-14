import { useEffect, useState } from "react";
import { fetchCompany, fetchPriceQoute, searchStockSymbols } from "./api/api";
import Display from "./components/Display";
import SearchInput from "./components/SearchInput";
import Dropdown from "./components/Dropdown";

function App() {
  // State variables
  const [searchTerm, setSearchTerm] = useState(""); // Stores the user's search input
  const [results, setResults] = useState([]); // Stores the filtered search results
  const [stockSymbol, setStockSymbol] = useState("AAPL"); // Stores the selected stock symbol
  const [stockDetails, setStockDetails] = useState({}); // Stores details about the selected stock
  const [quote, setQuote] = useState({}); // Stores the price quote of the selected stock
  const [noResults, setNoResults] = useState(false); // Tracks whether the search returned no results
  const [loading, setLoading] = useState(false); // Tracks the loading stat

  // Handle the user clicking on a search result
  const handleResultClick = (symbol) => {
    setStockSymbol(symbol); // Set the clicked symbol as the selected stock
    setSearchTerm(""); // Clear the search input field
    setResults([]); // Clear the search results dropdown
  };

  // Effect to fetch search results and update stock details and price quote when inputs change
  useEffect(() => {
    if (searchTerm) {
      const fetchResults = async () => {
        setLoading(true); // Start loading when fetching data
        try {
          const result = await searchStockSymbols(searchTerm);

          // Filter out symbols that contain periods or colons
          const filteredData = result.result.filter(
            (item) => !item.symbol.includes(".") && !item.symbol.includes(":")
          );

          // Set the noResults state based on whether any symbols were found
          setNoResults(filteredData.length === 0);
          setResults(filteredData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false); // Stop loading when data is fetched
        }
      };

      fetchResults();
    } else {
      setResults([]); // Clear results if search term is empty
    }

    const updateDetails = async () => {
      try {
        const result = await fetchCompany(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        console.log(error);
      }
    };

    updateDetails();

    const updateQoute = async () => {
      try {
        const result = await fetchPriceQoute(stockSymbol);
        setQuote(result);
      } catch (error) {
        console.log(error);
      }
    };

    updateQoute();
  }, [searchTerm, stockSymbol]); // triggers effect when searchTerm or stockSymbol changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        {/* Search Input */}
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Dropdown List */}
        <Dropdown
          results={results}
          loading={loading}
          noResults={noResults}
          handleResultClick={handleResultClick}
        />
      </div>

      {/* Stock Information Display */}
      <Display
        stockSymbol={stockSymbol}
        stockDetails={stockDetails}
        quote={quote}
      />
    </div>
  );
}

export default App;
