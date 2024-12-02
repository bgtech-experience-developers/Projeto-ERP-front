import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const supplierPf = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const supplierPj = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

