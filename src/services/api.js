/* eslint-disable comma-dangle */
import axios from "axios";

export default axios.create({
  baseURL: "https://desafio-backend-03-dindin.herokuapp.com",
  timeout: 10000,
  headers: { "Content-type": "application/json" },
});
