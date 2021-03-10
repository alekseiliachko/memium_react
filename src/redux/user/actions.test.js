import configureMockStore from "redux-mock-store";
import { initialState } from "./reducer";
import {
  avatarLoadingAttempt,
  blLoadingAttempt,
  deleteFromBl,
  detailsLoadingAttempt,
  detailsUpdateAttempt,
  feedLoadingAttempt,
  likedLoadingAttempt,
  loadAvatar,
  loadBl,
  loadDetails,
  loadLikedList,
  loadSubs,
  myArticlesLoadingAttempt,
  pushToLiked,
  setLoadedArticles,
  setLoadedAvatar,
  setLoadedBl,
  setLoadedDetails,
  setLoadedFeed,
  setLoadedLikedList,
  setLoadedSubs,
  subsLoadingAttempt,
  updateAvatar,
  updateDetails,
} from "./actions";
import thunk from "redux-thunk";
import AccountsController from "../../api/AccountsController";
jest.mock("../../api/AccountsController");

const mockStore = configureMockStore([thunk]);

const article = {
  id: "9064e587-3c29-4547-a5a6-51a8149456f8",
  imageUrl: null,
  authorId: "5d48bb9e-f1d9-41d2-bb02-9c4f578bd282",
  title: "Русские мемчанские",
  description: null,
  date: 1615046988090,
  category: "Anime",
};

const account = {
  accountId: "22bb3fe5-185c-4c87-8633-1586586506b7",
  username: "zilber",
  name: null,
  bio: "populated",
  imageData: null,
};
describe("actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it("should create AVATAR_LOADED action", () => {
    store.dispatch(
      setLoadedAvatar(
        "blob:http://localhost:3000/3dcb8dbb-23c7-4abf-8958-52663e0013da"
      )
    );
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create DETAILS_LOADED action", () => {
    store.dispatch(setLoadedDetails(account));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create SUBS_LOADED action", () => {
    store.dispatch(setLoadedSubs([account]));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create BL_LOADED action", () => {
    store.dispatch(setLoadedBl([account]));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create FEED_LOADED action", () => {
    store.dispatch(
      setLoadedFeed({
        articles: [],
        accounts: null,
      })
    );
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create LIKED_LOADED action", () => {
    store.dispatch(setLoadedLikedList([article]));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create PUSH_TO_LIKED action", () => {
    store.dispatch(pushToLiked(article));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create MY_ARTICLES_LOADED action", () => {
    store.dispatch(setLoadedArticles([article]));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create ATTEMPT_LOAD_AVATAR action", () => {
    store.dispatch(avatarLoadingAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create ATTEMPT_LOAD_DETAILS action", () => {
    store.dispatch(detailsLoadingAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create ATTEMPT_LOAD_SUBS action", () => {
    store.dispatch(subsLoadingAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create ATTEMPT_UPDATE_DETAILS action", () => {
    store.dispatch(detailsUpdateAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create ATTEMPT_LOAD_BL action", () => {
    store.dispatch(blLoadingAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create ATTEMPT_LOAD_LIKED action", () => {
    store.dispatch(likedLoadingAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create ATTEMPT_LOAD_FEED action", () => {
    store.dispatch(feedLoadingAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create ATTEMPT_LOAD_MY_ARTICLES action", () => {
    store.dispatch(myArticlesLoadingAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
});

describe("async tests", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ initialState });
  });

  it("create ATTEMPT_LOAD_AVATAR, AVATAR_LOADED when avatar loaded", () => {
    AccountsController.getAvatarImage.mockResolvedValue(
      "blob:http://localhost:3000/3dcb8dbb-23c7-4abf-8958-52663e0013da"
    );
    return store.dispatch(loadAvatar()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
  it("create ATTEMPT_LOAD_AVATAR, AVATAR_LOADED when avatar updated", () => {
    AccountsController.updateAvatar.mockResolvedValue(
      "blob:http://localhost:3000/3dcb8dbb-23c7-4abf-8958-52663e0013da"
    );
    return store
      .dispatch(
        updateAvatar(
          "blob:http://localhost:3000/3dcb8dbb-23c7-4abf-8958-52663e0013da"
        )
      )
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
  it("create ATTEMPT_LOAD_DETAILS, DETAILS_LOADED when loading details", () => {
    AccountsController.getUserDetails.mockResolvedValue(account);
    return store.dispatch(loadDetails()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
  it("create ATTEMPT_LOAD_SUBS, SUBS_LOADED when loading subs", () => {
    AccountsController.getSubscribersList.mockResolvedValue({
      data: [account],
    });
    return store.dispatch(loadSubs()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
  it("create ATTEMPT_UPDATE_DETAILS, DETAILS_LOADED when updating details", () => {
    AccountsController.updateDetails.mockResolvedValue({ data: account });
    return store.dispatch(updateDetails(account)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
  it("create ATTEMPT_LOAD_BL, BL_LOADED when loading blacklist", () => {
    AccountsController.getBlUsers.mockResolvedValue({ data: [account] });
    return store.dispatch(loadBl()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
  it("create BL_LOADED when delete from blacklist", () => {
    AccountsController.deleteUserFromBl.mockResolvedValue();
    AccountsController.getBlUsers.mockResolvedValue([]);
    return store.dispatch(deleteFromBl(account.accountId)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
  it("create ATTEMPT_LOAD_LIKED, LIKED_LOADED when loading liked", () => {
    AccountsController.getLikedPosts.mockResolvedValue({ data: [article] });
    return store.dispatch(loadLikedList()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
