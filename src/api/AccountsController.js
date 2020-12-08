import APIController from "./ApiController";

class AccountsController extends APIController {
  constructor() {
    super();
  }

  async getAvatarImage() {
    const avatar = await this.request("get", "/accounts/image");
    return avatar;
  }

  async getUserMeta() {
    const avatar = await this.request("get", "/accounts/image/");
    return avatar;
  }

  async getRecommendedUsers() {
    const users = await this.request("get", "/accounts/home/");
    return users;
  }

  async getSubscribersList() {
    const users = await this.request("get", "/accounts/liked/");
    return users;
  }

  async getBlackListUsers() {
    const users = await this.request("get", "/accounts/blacklisted/");
    return users;
  }

  async updateBlackList(userID) {
    const updateStatus = await this.request("post", `/accounts/${userID}/blacklist/`);
    return updateStatus;
  }

  async updateSubscribersList(userID) {
    const updateStatus = await this.request("post", `/accounts/${userID}/like/`);
    return updateStatus;
  }

  async updateMeta(meta) {
    const updateStatus = await this.request("put", `/accounts/meta/`, meta);
    return updateStatus;
  }

  async updateUserData(userData) {
    const updateStatus = await this.request("put", `/accounts/self/`, userData);
    return updateStatus;
  }

  async updateAvatar(avatar) {
    const updateStatus = await this.request("put", `/accounts/image/`, avatar);
    return updateStatus;
  }
}

export default new AccountsController();
