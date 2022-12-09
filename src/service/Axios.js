import axios from "axios";

const Api = axios.create({
  //    baseURL: process.env.REACT_APP_BASE_URL ,
  baseURL: "https://639164380bf398c73aa0a71d.mockapi.io",
});

export default Api;
