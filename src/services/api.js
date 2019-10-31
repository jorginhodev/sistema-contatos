import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-desafio.herokuapp.com',
});

export default api;
