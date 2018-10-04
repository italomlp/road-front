import axios from 'axios';

const api = axios.create({
  baseURL: 'https://road-api.herokuapp.com/',
});

export default api;
