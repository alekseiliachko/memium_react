import APIController from "./ApiController";

class AccountsController extends APIController {
  constructor() {
    super();
  }

  async createArticle(articleData) {
    return await this.request("post", "article/", articleData).then(
      (val) => val.data
    );
  }

  async updateArticle(newArticleData) {
    return await this.request("put", "article/", newArticleData);
  }

  async articleHasLike(articleId) {
    return await this.request("get", `article/haslike/${articleId}`);
  }

  async setImageForArticle(articleId, image) {
    return await this.request("post", `article/image/${articleId}`, image).then(
      (val) => val.data
    );
  }

  async myArticles() {
    return await this.request("get", "article/my");
  }

  async deleteArticle(articleId) {
    return await this.request("delete", `article/${articleId}`);
  }

  async getArticleById(articleId) {
    return await this.request(
      "get",
      `/open/article/articleId/${articleId}`
    ).catch((err) => {
      document.location.pathname = "/404";
    });
  }

  async getArticleImage(articleId) {
    const image = await this.request(
      "get",
      `/open/article/image/${articleId}`,
      {
        responseType: "blob",
      }
    );
    if (!image.data.size) {
      return null;
    }
    return URL.createObjectURL(image.data);
  }
}

export default new AccountsController();
