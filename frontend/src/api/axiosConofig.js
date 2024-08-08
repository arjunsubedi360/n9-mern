import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/", //base Url
  headers: {
    "Content-Type": "application/json", //json
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;