import axios from "axios";
export const BASE_URL = "/api";
axios.defaults.baseURL = BASE_URL;

export default class APIController {
  constructor() {
    this.axios = axios;
    this.updateAuthHeader(localStorage.getItem("memium_token"));
  }

  async request(method, url, data = {}, params = {}) {
    const response = await this.axios[method](url, data, params).catch(
      (err) => {
        window.location.pathname = "/404";
      }
    );
    return response;
  }

  updateAuthHeader(accessToken) {
    if (accessToken) {
      this.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
      localStorage.setItem("memium_token", accessToken);
    } else {
      delete this.axios.defaults.headers.common["Authorization"];
    }
  }
}
