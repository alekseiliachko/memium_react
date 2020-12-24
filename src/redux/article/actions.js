import ArticlesController from "../../api/ArticlesController";

export const SET_ARTICLE_DATA = "SET_ARTICLE_DATA";

export const setArticleData = (articleId, articleData) => ({
  type: SET_ARTICLE_DATA,
  articleId,
  articleData,
});

export const RESET_ARTICLE_DATA = "RESET_ARTICLE_DATA";
export const resetArticleData = (articleId) => ({
  type: SET_ARTICLE_DATA,
  articleId,
});

export const fetchArticleData = (articleId) => async (dispatch) => {
  const res = await ArticlesController.getArticleById(articleId);
  dispatch(setArticleData(articleId, res.data));
};
