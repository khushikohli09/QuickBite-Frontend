import axios from "axios";

const api = axios.create({
  baseURL: "https://quickbite-backend-47wd.onrender.com/api",
});

export default api;

