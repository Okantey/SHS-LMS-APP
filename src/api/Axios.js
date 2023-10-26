import axios from "axios";

export default axios.create({
  baseURL: "https://kwesistigar.pythonanywhere.com/api/v1.0"
})