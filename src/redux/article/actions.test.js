import { fetchArticleData } from "./actions";
import { setArticleData, resetArticleData } from "./actions";
import { initialState } from "./reducer";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
jest.mock("../../api/ArticlesController");
import ArticlesController from "../../api/ArticlesController";

const mockStore = configureMockStore([thunk]);

const articleData = {
  id: "d3268ef9-bb52-4967-b1ee-14826b9d8a18",
  imageUrl: null,
  description: null,
  authorId: "22bb3fe5-185c-4c87-8633-1586586506b7",
  title: "Chem?",
  date: 1615046988090,
  category: "Chemistry",
  data: "yes, and Jews are responsible.",
};

describe("actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it("should create SET_ARTICLE_DATA action", () => {
    store.dispatch(setArticleData(articleData.id, articleData));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should create RESET_ARTICLE_DATA action", () => {
    store.dispatch(resetArticleData(articleData.id));
    expect(store.getActions()).toMatchSnapshot();
  });
});

describe("async actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ initialState });
  });

  it("create SET_ARTICLE_DATA when fetching has been done", () => {
    const accountId = "22bb3fe5-185c-4c87-8633-1586586506b7";
    ArticlesController.getArticleById.mockResolvedValue({
      data: { articleData },
    });
    return store.dispatch(fetchArticleData(accountId)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
