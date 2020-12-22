import APIController from "./ApiController";

class АccountController extends APIController {
  constructor() {
    super();
  }

  async getAvatarImage() {
    const avatar = await this.request("get", "/account/avatar", {
      responseType: "blob",
    });
    return URL.createObjectURL(avatar.data);
  }

  async updateAvatar(avatar) {
    const updatedAvatar = await this.request(
      "post",
      `/account/avatar`,
      avatar,
      {
        responseType: "blob",
      }
    );
    return URL.createObjectURL(updatedAvatar.data);
  }

  async getUserDetails() {
    const details = await this.request("get", "/account/details");
    const fetchedDetails = Object.entries(details.data).map(([key, value]) => {
      if (value == null) {
        return [key, ""];
      }
      return [key, value];
    });
    return Object.fromEntries(fetchedDetails);
  }

  async getBlUsers() {
    const users = await this.request("get", "/account/bl");
    return users;
  }

  async blUser(userId) {
    const blStatus = await this.request("post", `/account/bl/${userId}`);
    return blStatus;
  }

  async deleteUserFromBl(userID) {
    const deleteStatus = await this.request("delete", `/account/bl/${userID}`);
    return deleteStatus;
  }

  async getLikedPosts() {
    const posts = await this.request("get", "/account/like");
    return posts;
  }

  async likePost(articleId) {
    const like = await this.request("post", `/account/like/${articleId}`);
    return like;
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
