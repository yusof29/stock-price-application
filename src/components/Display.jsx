const Display = ({ stockSymbol, stockDetails, quote }) => {
  // Array of stock information fields to display
  const stockInfoFields = [
    { label: "Symbol", value: stockSymbol },
    { label: "Company Name", value: stockDetails.name || "N/A" },
    { label: "Country", value: stockDetails.country || "N/A" },
    { label: "Currency", value: stockDetails.currency || "N/A" },
    { label: "Current Price", value: quote.pc || "N/A" },
    { label: "Industry", value: stockDetails.finnhubIndustry || "N/A" },
  ];

  return (
    <div className="mt-6 bg-white p-4 border border-gray-300 rounded-md shadow-lg w-full max-w-md">
      <p className="text-lg font-semibold">Stock Information</p>
      {stockInfoFields.map((field, index) => (
        <p key={index}>
          <strong>{field.label}:</strong> {field.value}
        </p>
      ))}
    </div>
  );
};
export default Display;
