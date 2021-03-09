import { UPDATE_SEARCH_RESULTS } from "./actions";

export const initialState = {
  articles: [],
  authors: [],
};

export const searchReducer = (store = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
      return {
        ...store,
        articles: action.articles,
        authors: action.authors,
      };
    default:
      return store;
  }
};
