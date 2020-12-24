import AccountsController from "../../api/AccountsController";

export const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";
export const updateSearchResults = (articles, authors) => ({
  type: UPDATE_SEARCH_RESULTS,
  articles,
  authors,
});

export const fetchSearchResults = (search) => async (dispatch) => {
  const res = await AccountsController.getArticlesBySearch(search);
  dispatch(updateSearchResults(res.data.articles, res.data.accounts));
};
