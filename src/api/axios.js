import axios from 'axios';

const api = axios.create({
  baseURL: 'https://d3-d-drop-server.vercel.app'
});

export default api;
