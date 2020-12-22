import APIController from "./ApiController";

class AccountsController extends APIController {
  constructor() {
    super();
  }

  async createArticle(articleData) {
    return await this.request("post", "article/", articleData);
  }

  async updateArticle(newArticleData) {
    return await this.request("put", "article/", newArticleData);
  }

  async articleHasLike(articleId) {
    return await this.request("get", `article/haslike/${articleId}`);
  }

  async setImageForArticle(articleId, image) {
    return await this.request("post", `article/image/${articleId}`, image);
  }

  async myArticles() {
    return await this.request("get", "article/my");
  }

  async deleteArticle(articleId) {
    return await this.request("delete", `article/my/${articleId}`);
  }

  async getArticleById(articleId) {
    return await this.request("get", `/open/article/articleId/${articleId}`);
  }
}

export default new AccountsController();
