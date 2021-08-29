import axios from 'axios';

const axiosConfigs = axios.create({
  baseURL: process.env.API_SERVER_URL,
});

export default axiosConfigs;
