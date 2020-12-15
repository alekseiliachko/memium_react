import APIController from "./ApiController";

class АccountController extends APIController {
  constructor() {
    super();
  }

  async getAvatarImage() {
    const avatar = await this.request("get", "/account/avatar");
    return avatar;
  }

  async updateAvatar(avatar) {
    const updateStatus = await this.request("post", `/account/avatar`, avatar, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return updateStatus;
  }

  async getUserDetails() {
    const avatar = await this.request("get", "/account/details");
    return avatar;
  }

  async getRecommendedUsers() {
    const users = await this.request("get", "/account/home/");
    return users;
  }

  async getSubscribersList() {
    const users = await this.request("get", "/account/sub");
    return users;
  }

  async getBlackListUsers() {
    const users = await this.request("get", "/account/blacklisted/");
    return users;
  }

  async updateBlackList(userID) {
    const updateStatus = await this.request(
      "post",
      `/account/${userID}/blacklist/`
    );
    return updateStatus;
  }

  async updateSubscribersList(userID) {
    const updateStatus = await this.request("post", `/account/${userID}/like/`);
    return updateStatus;
  }

  async updateDetails(details) {
    const updatedDetails = await this.request(
      "put",
      `/account/details`,
      details
    );
    return updatedDetails;
  }

  async updateUserData(userData) {
    const updateStatus = await this.request("put", `/account/self/`, userData);
    return updateStatus;
  }
}

export default new АccountController();
