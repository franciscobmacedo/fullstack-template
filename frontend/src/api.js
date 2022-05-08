import axios from "axios";
// const BASE_URL = "https://snirhapi.herokuapp.com/";
// const BASE_URL = "https://api.recursoshidricos.pt/";
// const BASE_URL = "http://localhost:8000/";
const BASE_URL = process.env.VUE_APP_API;
const instance = axios.create({
  baseURL: BASE_URL,
});
export async function getMessage() {
  const response = await instance.get("/home");
  return response.data;
}
