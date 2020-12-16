import APIController from "./ApiController";

class АccountOpenController extends APIController {
  constructor() {
    super();
  }

  async getAccountsDetails(accountId) {
    const details = await this.request(
      "get",
      `/open/account/details/${accountId}`
    );
    return details;
  }

  async getAccountsAvatar(accountId) {
    const avatar = await this.request(
      "get",
      `/open/account/avatar/${accountId}`,
      {
        responseType: "blob",
      }
    );
    return avatar;
  }
}

export default new АccountOpenController();
