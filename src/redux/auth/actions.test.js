import {
  setAuthStatusAttempt,
  setAuthStatusSuccess,
  logout,
  authFailure,
  signupSuccess,
  signupAttempt,
  loginAttempt,
  restoreSessionAttempt,
} from "./actions";
import { AUTH_STATE, initialState } from "./reducer";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
jest.mock("../../api/AuthController");
import AuthController from "../../api/AuthController";
import ArticlesController from "../../api/ArticlesController";
import { fetchArticleData } from "../article/actions";

const mockStore = configureMockStore([thunk]);

describe("actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it("should create LOGIN_ATTEMPT action", () => {
    store.dispatch(setAuthStatusAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create AUTH_FAILURE action", () => {
    store.dispatch(authFailure(""));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create LOGIN_SUCCESS action", () => {
    store.dispatch(setAuthStatusSuccess(""));
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create SIGNUP_SUCCESS action", () => {
    store.dispatch(signupSuccess());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should create LOG_OUT action", () => {
    store.dispatch(logout());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("create LOGIN_ATTEMPT, LOGIN_SUCCESS if token exist", () => {
    localStorage.setItem("memium_token", "token");
    localStorage.setItem("name", "name");
    store.dispatch(restoreSessionAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("create LOGIN_ATTEMPT, LOGOUT if token not exist", () => {
    localStorage.removeItem("memium_token");
    store.dispatch(restoreSessionAttempt());
    expect(store.getActions()).toMatchSnapshot();
  });
  it("should clear localStorage after logout", () => {
    localStorage.setItem("memium_token", "token");
    localStorage.setItem("name", "name");
    store.dispatch(logout());
    expect(localStorage.getItem("memium_token")).toBeNull();
    expect(localStorage.getItem("name")).toBeNull();
  });
});

describe("async actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ initialState });
  });

  it("create SIGNUP_SUCCESS when fetching has been done", () => {
    AuthController.signup.mockResolvedValue();
    return store.dispatch(signupAttempt({})).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
  it("create LOGIN_ATTEMPT, LOGIN_SUCCESS when fetching has been done", () => {
    const user = {
      username: "",
      token: "",
    };
    AuthController.login.mockResolvedValue({ data: user });
    return store.dispatch(loginAttempt({})).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
