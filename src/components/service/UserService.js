import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8844",
});

export const registerUserApi = async (userData) => {
  let response = await api.post("/chat/register", userData);
  return response.data;
};
export const loginUserApi = async (userData) => {
  let response = await api.post("/chat/login", userData);
  return response.data;
};
export const updateUserApi = async (userData) => {
  let response = await api.put("/chat/update", userData);
  console.log(response,'API Ressss');
  
  return response.data;
};
