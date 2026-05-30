import axios from "axios";

const API_URL = "https://mern-industrial-app.onrender.com/api/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};