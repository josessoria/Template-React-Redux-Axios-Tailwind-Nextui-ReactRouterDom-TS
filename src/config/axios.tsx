import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com", // Reemplaza con tu URL de API
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    // Puedes agregar encabezados o tokens aquí
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores global
    return Promise.reject(error);
  }
);

export default api;
