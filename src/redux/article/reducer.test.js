import { articleReducer, initialState } from "./reducer";
import { SET_ARTICLE_DATA } from "./actions";

describe("articleReducer", function () {
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

  it("should return the initial state", () => {
    expect(articleReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle SET_ARTICLE_DATA", () => {
    expect(
      articleReducer(initialState, {
        type: SET_ARTICLE_DATA,
        articleId: articleData.id,
        articleData,
      })
    ).toMatchSnapshot();
  });
});
