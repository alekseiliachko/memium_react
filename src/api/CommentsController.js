import APIController from "./ApiController";

class CommentsController extends APIController {
  constructor() {
    super();
  }

  async createComment(articleId, content) {
    const somewhat = await this.request("post", "/comment/", {
      articleId,
      content,
    });
    return somewhat.data;
  }

  async deleteComment(commentId) {
    const somewhat = await this.request("delete", `/comment/${commentId}`);
    return somewhat.data;
  }

  async getComments(articleId) {
    const somewhat = await this.request("get", `/open/comment/${articleId}`);
    return somewhat.data;
  }
}

export default new CommentsController();
