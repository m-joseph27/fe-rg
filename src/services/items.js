import axios from "axios";

const API_BASE_URL = `https://recruitment.dev.rollingglory.com/api/v2/gifts?page[number]=1&page[size]=6`;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const apiClient = axios.create({
  baseURL: 'https://recruitment.dev.rollingglory.com/api/v2/gifts',
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