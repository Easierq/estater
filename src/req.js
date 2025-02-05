import axios from "axios";

export const BASE_URL = "https://estater-api.onrender.com/api";
// export const BASE_URL = "http://localhost:8800/api";

const apiRequest = axios.create({
  baseURL: BASE_URL,
});

export default apiRequest;
