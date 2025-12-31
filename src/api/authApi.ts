import axios from 'axios';

const API_URL = 'https://rnj64vmh-7050.inc1.devtunnels.ms/';

export const login = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};
