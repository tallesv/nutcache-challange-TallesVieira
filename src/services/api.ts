import axios from 'axios';

export const api = axios.create({
  baseURL: `https://nutcache-backend-tallesvieira.herokuapp.com/`,
});
