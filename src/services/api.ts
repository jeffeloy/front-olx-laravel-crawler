import axios from 'axios';

export const api = axios.create({
  baseURL: <string>import.meta.env.VITE_API_URL,
})