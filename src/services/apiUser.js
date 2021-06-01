import axios from "axios";

const apiUser = axios.create({
  baseURL: "http://localhost:3001",
});

export default apiUser;
