import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const supplierPf = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const supplierPj = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
