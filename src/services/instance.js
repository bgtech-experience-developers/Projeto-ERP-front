import axios from "axios";

<<<<<<< HEAD
const BASE_URL = 'http://localhost:3000'

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const api = axios.create({
  baseURL: BASE_URL,
=======
export const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
>>>>>>> a19dcdd3a6bb57f85bb0f000c5e4b4b61af440ff
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
