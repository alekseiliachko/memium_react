import APIController from "./ApiController";

class AuthController extends APIController {
  constructor() {
    super();
  }

  async login(loginBody) {
    const loginResponse = await this.request("post", "auth/login", loginBody);
    return loginResponse;
  }

  async logout() {
    const logoutResponse = await this.request("post", "auth/logout");
    return logoutResponse;
  }

  async signup(signupBody) {
    const signupResponse = await this.request(
      "post",
      "auth/signup/",
      signupBody
    );
    return signupResponse;
  }
}

export default new AuthController();
