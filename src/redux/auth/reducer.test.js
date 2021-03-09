import { authReducer, initialState } from "./reducer";
import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOG_OUT } from "./actions";

describe("authReducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle SET_LOGIN_ATTEMPT", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_ATTEMPT,
      })
    ).toMatchSnapshot();
  });
  it("should handle LOGIN_SUCCESS_ATTEMPT", () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_SUCCESS,
        payload: "user",
      })
    ).toMatchSnapshot();
  });
  it("should handle LOG_OUT", () => {
    expect(
      authReducer(initialState, {
        type: LOG_OUT,
      })
    ).toMatchSnapshot();
  });
});
