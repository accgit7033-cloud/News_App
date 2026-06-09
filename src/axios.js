import axios from "axios";
const ApiClient = axios.create({
  baseURL: `https://newsapi.org/v2`,
  method:"GET",
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json'
  }
});
export {ApiClient}