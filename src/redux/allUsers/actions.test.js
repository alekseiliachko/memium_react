import {
  setUserAvatar,
  setUserData,
  fetchUserAvatar,
  fetchUserData,
} from "./actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
jest.mock("../../api/AccountOpenController");
import AccountOpenController from "../../api/AccountOpenController";

const mockStore = configureMockStore([thunk]);

const userData = {
  accountId: "22bb3fe5-185c-4c87-8633-1586586506b7",
  name: null,
  bio: "populated",
  gender: "gender",
  dob: 1615046987793,
  avatar: "blob:http://localhost:3000/595ee9e0-fbd4-4712-98e1-1fd759dca517",
};

describe("actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ userDataById: {} });
  });
  it("should create set_user_data action", () => {
    const userId = "32df86b7-872d-45d5-8a51-e217f0bc973d";
    store.dispatch(setUserData(userId, userData));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("should create set_avatar_data action", () => {
    const avatar =
      "blob:http://localhost:3000/595ee9e0-fbd4-4712-98e1-1fd759dca517";
    const userId = "22bb3fe5-185c-4c87-8633-1586586506b7";
    store.dispatch(setUserAvatar(userId, avatar));
    expect(store.getActions()).toMatchSnapshot();
  });
});

describe("async actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ userDataById: {} });
  });

  it("create SET_USER_DATA when fetching has been done", () => {
    const accountId = "22bb3fe5-185c-4c87-8633-1586586506b7";
    AccountOpenController.getAccountsDetails.mockResolvedValue({
      data: { userData },
    });
    return store.dispatch(fetchUserData(accountId)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  it("create SET_AVATAR_DATA when fetching has been done", () => {
    const accountId = "22bb3fe5-185c-4c87-8633-1586586506b7";
    AccountOpenController.getAccountsAvatar.mockResolvedValue({
      avatar: "blob:http://localhost:3000/595ee9e0-fbd4-4712-98e1-1fd759dca517",
    });
    return store.dispatch(fetchUserAvatar(accountId)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
