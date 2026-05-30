import axios from "axios";

const API = axios.create({
  baseURL: "http://13.126.24.200:5000/api",
});

export default API;
