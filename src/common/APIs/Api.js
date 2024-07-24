
import axios from "axios";

// Create and export an Axios instance with a base URL set to the CoinGecko API endpoint.
const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
  timeout: 10000,  // Set a timeout of 10 seconds
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
