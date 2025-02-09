import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.131:3001",
});

export default api;
