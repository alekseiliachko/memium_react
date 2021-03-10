import { userReducer, initialState } from "./reducer";

describe("userReducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });
});
