import axios from "axios";

const BASE_URL = "http://localhost:3000";

export function signup(data) {
  const response = axios.post(`${BASE_URL}/signup`, data);
  return response;
}
