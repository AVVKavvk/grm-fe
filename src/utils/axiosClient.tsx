import axios from "axios";
import toast from "react-hot-toast";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  async (config) => {
    try {
      return config;
    } catch (error) {
      toast.error("Authentication error");
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
