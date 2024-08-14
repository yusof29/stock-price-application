# Stock Search Application

This application allows users to search for stock symbols, view detailed information about selected stocks, and display their current price. It uses the Finnhub API for fetching stock data and is built with React and Vite.

## Overview

The application consists of the following components:

- **Search Functionality**: Users can search for stock symbols and view matching results.
- **Stock Details**: Displays detailed information about a selected stock.
- **Loading and Error Handling**: Shows loading indicators and error messages when necessary.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for managing dependencies

## Setup

1. **Clone the Repository and Install Dependencies**

   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   npm install

2. **Configure Environment Variables**

   link to the api key: https://drive.google.com/file/d/1SXNdEyJOy23ZOQcZX9z24OBIFiFDIVpR/view?usp=sharing
   Create a .env file in the root directory of the project and add the Finnhub API key.
   VITE_API_KEY=api_key_here

3. **Run the Application**

   To start the development server, use:
   npm run dev

## Usage

Open the application in your browser.
Use the search bar to enter a stock symbol or name.
Click on a result from the dropdown to view detailed information about the selected stock.
The stock details and current price will be displayed below the search bar.
