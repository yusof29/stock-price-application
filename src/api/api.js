//  Base URL for the Finnhub API
const baseURL = "https://finnhub.io/api/v1/";
// API Key
const apiKey = import.meta.env.VITE_API_KEY;

// Function to search stock symbols based on the user's input
export const searchStockSymbols = async (query) => {
  try {
    const response = await fetch(`${baseURL}search?q=${query}&token=${apiKey}`);

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Function to fetch the price quote of the selected stock symbol
export const fetchPriceQoute = async (query) => {
  try {
    const response = await fetch(
      `${baseURL}quote?symbol=${query}&token=${apiKey}`
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Function to fetch company details for the selected stock symbol
export const fetchCompany = async (query) => {
  try {
    const response = await fetch(
      `${baseURL}stock/profile2?symbol=${query}&token=${apiKey}`
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
