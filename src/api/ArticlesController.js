import APIController, { BASE_URL } from "./ApiController";

class AccountsController extends APIController {
  constructor() {
    super();
  }

  async getRecommendedArticles() {
    const articles = await this.request("get", "/articles/home/");
    return articles;
  }

  async getLikedArticles() {
    const likedArticles = await this.request("get", "/articles/liked/");
    return likedArticles;
  }

  async getArticle(articleID) {
    const article = await this.request(
      "get",
      `/articles/${articleID}/article/`
    );
    return article;
  }

  async getArticleLikes(articleID) {
    const likes = await this.request("get", `/articles/${articleID}/likes/`);
    return likes;
  }

  async getArticleComment(articleID) {
    const comments = await this.request(
      "get",
      `/articles/${articleID}/comments/`
    );
    return comments;
  }

  async createComment(articleID, comment) {
    const commentStatus = await this.request(
      "post",
      `/articles/${articleID}/comments/`,
      comment
    );
    return commentStatus;
  }

  async likeArticle(articleID) {
    const likeStatus = await this.request(
      "post",
      `/articles/${articleID}/like/`
    );
    return likeStatus;
  }

  async deleteArticle(articleID) {
    const deleteStatus = await this.request(
      "delete",
      `/articles/${articleID}/delete/`
    );
    return deleteStatus;
  }
}

export default new AccountsController();
