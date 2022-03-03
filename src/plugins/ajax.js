import axios from "axios";
const ajax = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? `${process.env.VUE_APP_BASE_URL}:${process.env.VUE_APP_PORT}`
      : ""
});
export default ajax;
