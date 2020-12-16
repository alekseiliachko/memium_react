import APIController from "./ApiController";

class АccountController extends APIController {
  constructor() {
    super();
  }

  async getAvatarImage() {
    const avatar = await this.request("get", "/account/avatar", {
      responseType: "blob",
    });
    return avatar;
  }

  async updateAvatar(avatar) {
    const updateStatus = await this.request("post", `/account/avatar`, avatar, {
      responseType: "blob",
    });
    return updateStatus;
  }

  async getUserDetails() {
    const avatar = await this.request("get", "/account/details");
    return avatar;
  }

  async getBlUsers() {
    const users = await this.request("get", "/account/bl");
    return users;
  }

  async deleteUserFromBl(userID) {
    const deleteStatus = await this.request("delete", `/account/bl/${userID}`);
    return deleteStatus;
  }

  async getLikedPosts() {
    const posts = await this.request("get", "/account/like");
    return posts;
  }

  async deleteLikeFromPost(articleId) {
    const deleteStatus = await this.request(
      "delete",
      `/account/like/${articleId}`
    );
    return deleteStatus;
  }

  async getRecommendedUsers() {
    const users = await this.request("get", "/account/home/");
    return users;
  }

  async getSubscribersList() {
    const users = await this.request("get", "/account/sub");
    return users;
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
}

export default new АccountController();
