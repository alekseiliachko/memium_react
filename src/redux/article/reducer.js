import { RESET_ARTICLE_DATA, SET_ARTICLE_DATA } from "./actions";

const initialState = {
  articleDataById: {},
};

export const articleReducer = (store = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLE_DATA:
      return {
        ...store,
        articleDataById: {
          ...store.articleDataById,
          [action.articleId]: action.articleData,
        },
      };
    case RESET_ARTICLE_DATA:
      return {
        ...store,
        articleDataById: {
          ...store.articleDataById,
          [action.articleId]: undefined,
        },
      };
    default:
      return store;
  }
};
