import axios from 'axios';

const API_BASE_URL = '/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
