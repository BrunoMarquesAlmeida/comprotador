import axios from "axios";

export default axios.create({
  // baseURL: "https://comprotador-api.herokuapp.com/",
  // baseURL: "https://bma-ctapi.herokuapp.com/",
  baseURL: "http://localhost:3001/",
});
