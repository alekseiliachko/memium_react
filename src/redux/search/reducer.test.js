import { searchReducer, initialState } from "./reducer";
import { UPDATE_SEARCH_RESULTS } from "./actions";

describe("searchReducer", () => {
  it("should return the initial state", () => {
    expect(searchReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle UPDATE_SEARCH_RESULTS", () => {
    expect(
      searchReducer(initialState, {
        type: UPDATE_SEARCH_RESULTS,
        articles: [],
        authors: [],
      })
    ).toMatchSnapshot();
  });
});
