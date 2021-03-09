import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { initialState } from "../auth/reducer";
import { updateSearchResults, fetchSearchResults } from "./actions";
import AccountsController from "../../api/AccountsController";
jest.mock("../../api/AccountsController");

const mockStore = configureMockStore([thunk]);

describe("actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it("should create UPDATE_SEARCH_RESULTS action", () => {
    store.dispatch(updateSearchResults([], []));
    expect(store.getActions()).toMatchSnapshot();
  });
});

describe("async actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it("create SIGNUP_SUCCESS when fetching has been done", () => {
    AccountsController.getArticlesBySearch.mockResolvedValue({
      data: {
        articles: [],
        accounts: [],
      },
    });
    return store.dispatch(fetchSearchResults("")).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
