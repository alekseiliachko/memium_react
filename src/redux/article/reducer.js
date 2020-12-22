import { SET_ARTICLE_DATA } from "./actions";

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
    default:
      return store;
  }
};
