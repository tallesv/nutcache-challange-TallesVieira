import axios from 'axios';

export const api = axios.create({
  baseURL: `https://crudcrud.com/api/${process.env.REACT_APP_CRUDCRUD_TOKEN}`,
});
