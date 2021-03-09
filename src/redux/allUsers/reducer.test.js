import { allUsersReducer, initialState } from "./reducer";
import { SET_USER_AVATAR, SET_USER_DATA } from "./actions";

describe("allUserReducer", () => {
  const userData = {
    accountId: "22bb3fe5-185c-4c87-8633-1586586506b7",
    name: null,
    bio: "populated",
    gender: "gender",
    dob: 1615046987793,
    avatar: "blob:http://localhost:3000/595ee9e0-fbd4-4712-98e1-1fd759dca517",
  };
  it("should return the initial state", () => {
    expect(allUsersReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle SET_USER_DATA", () => {
    expect(
      allUsersReducer(initialState, {
        type: SET_USER_DATA,
        userId: userData.accountId,
        userData,
      })
    ).toMatchSnapshot();
  });
  it("should handle SET_AVATAR_DATA", () => {
    expect(
      allUsersReducer(initialState, {
        type: SET_USER_AVATAR,
        avatar: userData.avatar,
      })
    ).toMatchSnapshot();
  });
});
