import axios from 'axios';

const axiosConfigs = axios.create({
  baseURL: process.env.API_SERVER_URL,
  withCredentials: true
});

export default axiosConfigs;
