import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://recruitment.dev.rollingglory.com/api/v2',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const GetItems = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const GetDetailItem = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default apiClient;