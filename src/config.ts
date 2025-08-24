export const BASE_URL = 'https://dummyjson.com' as string;
//export const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;


if (!BASE_URL) {
    console.warn("⚠️ API_BASE_URL is not defined in .env");
  }